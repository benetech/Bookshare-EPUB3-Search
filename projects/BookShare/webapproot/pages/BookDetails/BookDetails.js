dojo.declare("BookDetails", wm.Page, {
	"preferredDevice": "phone",
    start: function() {

    },
    onHide: function() {
        this.bookDetailsDataSet.clearData();
    },
    downloadSVarSuccess: function(inSender, inDeprecated) {
        var value = inSender.getValue("dataValue") || "";
        var code = (value.match(/\<status\-code\>(\d+)/) || [])[1];
        switch(code) {
            case "42":
            case "40":
                app.alert("Content not available");
            break;
            case "41":
                app.alert("Content not available for your account; please try another account");
            break;
            case "60":
                app.alert("The mobile application does not have access to this content, please go to http://bookshare.com");
            break;
            default:
                this.notifyDownloadSuccess.update();
                
                /* Sadly, IOS popup blocker blocks windows that are opened after a delay rather than directly triggered
                 * by a user event.  All wm.Button onClick events contain a short delay and can't be used to open the window.
                 * Similarly, the ServiceVariable onSuccess event handler can't open a new window.
                 * Connect to the domNode's onClick event directly to open the new window and avoid the IOS popup blocker.
                 * For the same reason, ontouchstart is needed for real mobile devices as onclick has delays imposed by the browser.
                 */
                this._openQueueConnect = this.connect(app.confirmDialog.button1.domNode, wm.isFakeMobile ? "onclick" : "ontouchstart", this, "openQueue");                
        }
        if (app.alertDialog && app.alertDialog.showing) {
            dojo.attr(app.alertDialog.domNode, "role", "alertdialog");
            app.alertDialog.domNode.focus();
        }
        if (app.confirmDialog && app.confirmDialog.showing) {
             dojo.attr(app.confirmDialog.domNode, "role", "alertdialog");
             app.confirmDialog.domNode.focus();    
        }
    },
    bookDetailsSVarSuccess: function(inSender, inDeprecated) {
        var validFormats = main.formats || ["EPUB 3"];
        var downloadFormats = inSender.getValue("bookshare.book.metadata.downloadFormat");
        if (downloadFormats) {
            var found = false;
            downloadFormats.forEach(function(item) {
                if (dojo.indexOf(validFormats, item.getValue("dataValue")) >= 0)
                    found = true;
            });            
        }
        this.bookDownloadButton.setDisabled(!found);
        this.ariaAlertBook();
    },
    openQueue: function(inSender, inResult) {       
         var url = "https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass");         
         window.open(url);
    },
    
    /* Failure to disconnect means that all uses of the confirm dialog will open the users history */
    notifyDownloadSuccessClose: function(inSender) {
        this.disconnect(this._openQueueConnect);
        
        /* Dismiss this as button1 "View Queue" will never have its normal onclick event fire due to the window change blocking the full event */
        app.confirmDialog.hide();
    },
    downloadMenuListSelect: function(inSender, inItem) {
        switch(inSender.selectedItem.getValue("dataValue")) {
            case "home": 
                main.layers1.setLayerIndex(1);
                break;
            case "book":
                this.layers.setLayerIndex(0);
                break;
            case "downloads":
                window.open("https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass"));
                break;
        }
    },
    successLabelShow: function(inSender) {
        main.ariaAlert("Your book has been added to your queue");        
    },
    mainLayerShow: function(inSender) {
        if (!this.bookDetailsDataSet.isEmpty() && !this.bookDetailsSVar.getValue("bookshare.book").isEmpty()) {
            this.ariaAlertBook();
        }
    },
    ariaAlertBook: function() {
        var authorList = this.bookDetailsSVar.getValue("bookshare.book.metadata.author");
        var authors = "";
        authorList.forEach(function(item) {
            if (authors) authors += ", ";
            authors += item.getValue("dataValue");
        });
        main.ariaAlert("Book Details Page Loaded.  Showing book " + 
        this.bookDetailsSVar.getValue("bookshare.book.metadata.title") + 
        " by " + authors);        
    },
    bookDetailsDataSetSetData: function(inSender) {
        wm.onidle(this, function() {
            if (!inSender.isEmpty()) this.bookDetailsSVar.update();
        });
    },
    _end: 0
});
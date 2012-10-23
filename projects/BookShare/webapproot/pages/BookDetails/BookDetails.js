dojo.declare("BookDetails", wm.Page, {
	"preferredDevice": "phone",
    start: function() {
        dojo.attr(this.ariaRoleLabel.domNode, "role", "alert");
        dojo.attr(this.downloadSuccessDialog.domNode, "role", "alert");
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
    downloadSuccessDialogShow: function(inSender) {
        inSender.focus();
    },
    _end: 0
});
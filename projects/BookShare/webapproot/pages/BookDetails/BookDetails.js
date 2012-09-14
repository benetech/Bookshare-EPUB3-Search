dojo.declare("BookDetails", wm.Page, {
	"preferredDevice": "phone",
    start: function() {
        
    },

    downloadSVarSuccess: function(inSender, inDeprecated) {
        var value = inSender.getValue("dataValue") || "";
        var code = (value.match(/\<status\-code\>(\d+)/) || [])[1]
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
                window.open("https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass"));            
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
    _end: 0
});
dojo.declare("Main", wm.Page, {
    start: function() {
        
    },
    "preferredDevice": "phone",

    mainMenuListSelect: function(inSender, inItem) {
        switch(inSender.selectedItem.getValue("name")) {
            case "Search":
                this.searchLayer.activate();
                break;
            case "About App":
                this.aboutAppLayer.activate();
                break;
            default:
                this.bookListLayer.activate();
        }
    },
    _end: 0
});
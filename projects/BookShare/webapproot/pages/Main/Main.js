dojo.declare("Main", wm.Page, {
    start: function() {
        
    },
    "preferredDevice": "phone",

    loginSuccess: function(){
        this.homeLayer.activate();
    },
    mainMenuListSelect: function(inSender, inItem) {
        //alert(inSender.selectedItem.getValue("name"));
        switch(inSender.selectedItem.getValue("name")) {
            case "Search":
                this.searchLayer.activate();
                break;
            case "About App":
                this.aboutAppLayer.activate();
                break;
            case "Latest":
                this.bookListLayer.activate();
                this.browseLatestSVar.update();
                break;
            case "Popular":
                this.bookListLayer.activate();
                this.browsePopularSVar.update();
                break;
            case "":
            case "":
            default:
                this.bookListLayer.activate();
        }
    },
    sharedBookListSVarSuccess: function(inSender, inDeprecated) {
        this.bookListPageContainer.setProp("bookListDataSet", inSender.getValue("bookshare.book.list.result"));
    },
    _end: 0
});
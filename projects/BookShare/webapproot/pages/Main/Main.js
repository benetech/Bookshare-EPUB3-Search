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
            case "Latest":
                this.bookListLayer.activate();
                this.listLabel.setCaption("Latest");
                this.browseLatestSVar.update();
                break;
            case "Popular":
                this.bookListLayer.activate();
                this.listLabel.setCaption("Popular");
                this.browsePopularSVar.update();
                break;
            case "Category":
                this.layerCategory.activate();
                break;
            case "My Downloads":
                this.layerDownloads.activate();
                break;    
            case "About App":
                this.layerAbout.activate();
                break;
            default:
                this.listLabel.setCaption("");
                this.bookListLayer.activate();
        }
    },
    sharedBookListSVarSuccess: function(inSender, inDeprecated) {
        this.bookListPageContainer.page.bookList.setScrollTop(0);
        this.bookListPageContainer.setProp("bookListDataSet", inSender.getValue("bookshare.book.list.result"));        
    },
    searchOptionsListSelect1: function(inSender, inItem) {
        switch(inSender.selectedItem.getValue("dataValue")) {
            case "author":
                this.authorSearchSVar.update();
                break;
            case "all":
                this.ftsSearchSVar.update();
                break;
            case "title":
                this.titleSearchSVar.update();
                break;
            default:
                this.bookListLayer.activate();
        }
        
    },
    _end: 0
});
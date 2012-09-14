dojo.declare("Main", wm.Page, {
    
    // comment this out to disable filtering by format
    //formats: ["EPUB3"],
    "preferredDevice": "phone",
    start: function() {
        
    },
    downloadTypeFilter: function(inValue) {
        var result = false; 
        inValue.forEach(
            dojo.hitch(this, function(item) {
                if (dojo.indexOf(this.formats, item.getValue("dataValue")) != -1) result = true;
            })
        );
        console.log(result);
        return result;
    },

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
            case "Category":
                this.layerCategory.activate();
                break;
            case "My Downloads":
                window.open("https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass"));
                break;    
            case "About App":
                this.layerAbout.activate();
                break;
            default:
                this.bookListLayer.activate();
        }
    },
    sharedBookListSVarSuccess: function(inSender, inDeprecated) {
        this.bookListPageContainer.page.bookList.setScrollTop(0);
        if (this.formats) {
            inSender.getValue("bookshare.book.list.result").setQuery({downloadFormat: dojo.hitch(this,"downloadTypeFilter")});        
        }
        this.bookListPageContainer.setProp("bookListDataSet", inSender.getValue("bookshare.book.list.result.queriedItems"));        
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
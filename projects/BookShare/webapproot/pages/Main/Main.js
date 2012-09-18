dojo.declare("Main", wm.Page, {
    
    // comment this out to disable filtering by format
    //formats: ["EPUB 3"],
    "preferredDevice": "phone",
    start: function() {
        dojo.attr(this.logo.img, "alt", "Bookshare Logo");
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
            case "Latest":
                this.bookListPageContainer.setProp("listLabelCaption", "Latest");
                this.bookListLayer.activate();
                this.browseLatestSVar.update();
                break;
            case "Popular":
                this.bookListPageContainer.setProp("listLabelCaption", "Popular");
                this.bookListLayer.activate();
                this.browsePopularSVar.update();
                break;
            case "By Category":
                this.categorySVar.update();
                this.layerCategory.activate();
                break;
            case "By Grade":
                this.gradeListSVar.update();
                this.layerGrade.activate();
                break;
            case "My Downloads":
                window.open("https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass"));
                break;    
            case "About App":
                this.layerAbout.activate();
                break;
            default:
                this.bookListPageContainer.setProp("listLabelCaption", "");
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
        this.updateSearchListLabel();
    },
    updateSearchListLabel: function() {
        this.bookListPageContainer.setProp("listLabelCaption", "Search: " + this.searchText.getDataValue());    
    },
    layers1Change: function(inSender, inIndex) {
        if (inIndex <= 1) {
            this.backButton.hide();
            this.headerPanel.setHeight("48px");
        } else {
            this.backButton.show();
            this.headerPanel.setHeight("30px");
        }
    },
    _end: 0
});
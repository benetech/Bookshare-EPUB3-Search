wm.require("wm.List");
wm.ListItem.extend({
     create: function() {
        this.inherited(arguments);
        if (!this.domNode.id) {
            dojo.addClass(this.domNode, 'wmlist-item');
            this.rowId = this.list.nextRowId++;
            this.domNode.id = this.list.getRuntimeId() + "_ITEM_" + this.rowId;
            dojo.attr(this.domNode,"role", "button");
        }
    }
});

dojo.declare("Main", wm.Page, {
    
    // comment this out to disable filtering by format
    //formats: ["EPUB 3"],
    "preferredDevice": "phone",
    start: function() {        
        dojo.attr(this.logo.img, "alt", "Bookshare Logo");        
        this.connect(app.appRoot, "resize", this, "updateImageSize");  
        dojo.attr(this.mainMenuRoleLabel.domNode,"role", "alert");
            dojo.attr(this.searchLabel.domNode,"role", "alert");  
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
            this.backButton.setShowing(false);
        } else {
            this.backButton.setShowing(true);
        }
        this.updateImageSize();
        
        /* Desperate hack to load the facebook widget without it affecting initial load time.
         * Explanation: The facebook widget requires loading of the facebook, gadget and iframe classes.
         * Waiting for these impacts load time for starting the app.  Loading these later, when nothing
         * else is loading means less impact on the user.
         */
        if (inIndex == 1 && !this.facebookWidget) {
            this.facebookWidget = this.panel1.createComponents({facebookWidget: ["wm.gadget.FacebookLikeButton", 
            {"height":"21px","href":"http://www.bookshare.org","layout":"button_count","width":"95px"}, {}]})[0];
            this.panel1.reflow();
        }

    },
    updateImageSize: function() {
        var maxImageWidth = 286;
        if (this.headerPanel.bounds.w - (this.backButton.showing ? this.backButton.bounds.w : 0) > 286) {
            this.logo.setAspect("none");
        } else {
            this.logo.setAspect("v");
        }

    },
    homeLayerShow: function(inSender) {
        this.mainMenuRoleLabel.setCaption("Showing Main Menu");
    },
    homeLayerHide: function(inSender) {
        this.mainMenuRoleLabel.setCaption("");
    },
    searchLayerShow: function(inSender) {
        this.searchLabel.setCaption("Enter a search and then select button below");
    },
    searchLayerHide: function(inSender) {
        this.searchLabel.setCaption("");        
    },
    _end: 0
});
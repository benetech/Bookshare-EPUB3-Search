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
wm.List.extend({
    queryItem: function(query, inItem, inRowIndex) {
        var w = "*";
        var isMatch = true;
        for (var key in query) {
            if (this._columnsHash && this._columnsHash[key] && this._columnsHash[key].isCustomField) {
                var col = this._columnsHash[key];
                if (col.expression) {
                    inItem[key] = wm.expression.getValue(col.expression, inItem, this.owner);
                } else if (col.formatFunc) {
                    switch (col.formatFunc) {
                    case 'wm_date_formatter':
                    case 'Date (WaveMaker)':
                    case 'wm_localdate_formatter':
                    case 'Local Date (WaveMaker)':
                    case 'wm_time_formatter':
                    case 'Time (WaveMaker)':
                    case 'wm_number_formatter':
                    case 'Number (WaveMaker)':
                    case 'wm_currency_formatter':
                    case 'Currency (WaveMaker)':
                    case 'wm_image_formatter':
                    case 'Image (WaveMaker)':
                    case 'wm_link_formatter':
                    case 'Link (WaveMaker)':
                        break;
                    case 'wm_array_formatter':
                        inItem[key] = this.arrayFormatter(key, col.formatProps, null, null, null, inItem[key]);
                        break;
                    default:
                        if (!this.isDesignLoaded()) inItem[key] = dojo.hitch(this.owner, col.formatFunc)("", inRowIndex, dojo.indexOf(this.columns, col), key, {
                            customStyles: [],
                            customClasses: []
                        }, inItem);
                    }
                }
            }
            var a = inItem[key];
            if (dojo.isString(a)) a = a.replace(/\\([^\\])/g, "$1");
            var b = query[key];
            var matchStart = true;

            if (dojo.isString(b)) {
                b = b.replace(/\\([^\\])/g, "$1");
                if (b.charAt(0) == w) {
                    b = b.substring(1);
                    matchStart = false;
                }
            }

            if (b == w) continue;

            if (dojo.isString(a) && dojo.isString(b)) {
                if (b.charAt(b.length - 1) == w) b = b.slice(0, -1);
                a = a.toLowerCase();
                b = b.toLowerCase();
                var matchIndex = a.indexOf(b);
                if (matchIndex == -1 || matchIndex > 0 && matchStart) {
                    isMatch = false;
                    break;
                }
            } else if (a !== b) {
                isMatch = false;
                break;
            }

        }
        return isMatch;
    }
});
wm.PageContainer.extend({
       _onHideParent: function() {
        if (this.page) {
            wm.fire(this.page, "onHide");
            this.page.root.callOnHideParent();
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
    clearBookList: function() {
        this.bookListPageContainer.setProp("bookListDataSet", null);          
        
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
        wm.job("setAriaAlert", 3000, this, function() {
           this.mainMenuRoleLabel.setCaption("Main menu page is loaded");
        });
    },
    homeLayerHide: function(inSender) {
        this.mainMenuRoleLabel.setCaption("");
    },
    searchLayerShow: function(inSender) {
        wm.job("setAriaAlert", 1000, this, function() {            
            this.searchLabel.setCaption("Search page is loaded, Enter a search and then select button below");
        });
    },
    searchLayerHide: function(inSender) {
        this.searchLabel.setCaption("");        
    },
  
	_end: 0
}); 
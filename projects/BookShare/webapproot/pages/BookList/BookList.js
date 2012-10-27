dojo.declare("BookList", wm.Page, {
	"preferredDevice": "phone",
    start: function() {
    },

    onShow: function() {
      this.bookList.deselectAll();
      if (!this.bookList.dataSet) {
          this.connectOnce(this.bookList, "setDataSet", this, "onShow");
          return;
      }
      var count = this.bookList.dataSet.getCount();
      var alertText = "Book List Page Loaded.  ";
      if (count == 25) {
          alertText += "Showing first page of results" ;
      } else {
          alertText += "Showing " + count + " results" ;
      }
      alertText += " for " + this.listLabel.caption;
      main.ariaAlert(alertText);
    },
    bookListScrollToBottom: function(inSender) {
        if (this.bookList.dataSet) {
            var dataSet = this.bookList.dataSet.isAncestorInstanceOf(wm.ServiceVariable);            
        }
        if (dataSet) {
            this.pagingSVar.setService(dataSet.service);
            this.pagingSVar.setOperation(dataSet.operation);
            this.pagingSVar.input.setDataSet(dataSet.input);
            
            var page = this.bookList.dataSet.owner.owner.getValue("page");
            var maxPages = this.bookList.dataSet.owner.owner.getValue("numPages");
            if (page < maxPages) {
                this.pagingSVar.input.setValue("page", 1 + page);                 
                this.pagingSVar.update();
                dataSet._requester = true; // fakery to tell wm.List that we are paging the dataSet
            }
        }
    },
    pagingSVarSuccess: function(inSender, inDeprecated) {
        var data = inSender.getValue("bookshare.book.list.result");
        this.bookList.dataSet.data._list = this.bookList.dataSet.data._list.concat(data.data._list);
        this.bookList.setDataSet(this.bookList.dataSet);
        
        var dataSet = this.bookList.dataSet.isAncestorInstanceOf(wm.ServiceVariable);
        this.bookList.dataSet.owner.setValue("page", inSender.getValue("bookshare.book.list.page"));
        delete dataSet._requester;
    },
   
    scrollDownButtonClick: function(inSender) {
        this.bookList.setScrollTop(this.bookList.getScrollTop() + this.bookList.getListNodeHeight()/2);        
	},
    
	scrollUpButtonClick: function(inSender) {
		 this.bookList.setScrollTop(this.bookList.getScrollTop() - this.bookList.getListNodeHeight()/2);            
	},
	
	_end: 0
});
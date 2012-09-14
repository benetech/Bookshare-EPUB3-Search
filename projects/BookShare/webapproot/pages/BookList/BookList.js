dojo.declare("BookList", wm.Page, {
	"preferredDevice": "phone",
    start: function() {
        
    },
    onShow: function() {
      this.bookList.deselectAll();  
    },
    _end: 0
});
wm.Variable.extend({
    getJoin: function(inField, inString) {
        if (inString === undefined) inString = ", ";
        if (inField === undefined) inField = "dataValue";
        var str = "";
        this.forEach(function(item) {
           if (str) str += inString;
           str += item.getValue(inField);
        });
        return str;
    }
});
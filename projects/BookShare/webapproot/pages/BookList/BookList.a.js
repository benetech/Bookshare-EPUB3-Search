dojo.declare("BookList", wm.Page, {
"preferredDevice": "phone",
start: function() {
},
_end: 0
});

BookList.widgets = {
variable1: ["wm.Variable", {"isList":true,"json":"[{\"author\":[{\"dataValue\":\"Derek\"},{\"dataValue\":\"Michael\"}],\"availableToDownload\":\"1\",\"briefSynopsis\":\"A great book written by adequate people\",\"downloadFormat\":[{\"dataValue\":\"epub3\"}],\"dtbookSize\":\"3000\",\"freelyAvailable\":\"1\",\"id\":\"1\",\"images\":\"0\",\"isbn13\":\"0\",\"publisher\":\"VMware\",\"title\":\"Advanced WaveMaker\"}]","type":"PopularBookList.bookshare.book.list.result"}, {}],
onList1Select: ["wm.Property", {"isEvent":true,"property":"list1.onSelect","type":"string"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"caption":"Popular Searches","padding":"4","width":"100%"}, {}],
list1: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":false,"field":"availableToDownload","title":"AvailableToDownload","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"briefSynopsis","title":"BriefSynopsis","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dtbookSize","title":"DtbookSize","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"freelyAvailable","title":"FreelyAvailable","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"id","title":"Id","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"images","title":"Images","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"isbn13","title":"Isbn13","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"publisher","title":"Publisher","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>\" + ${title} + \"</div>\"\n+ \"<div class='MobileRow'>\" + ${author.dataValue} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"title","title":"Title","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>\" + ${title} + \"</div>\" +\n\"<div class='MobileRow'>\" + ${author.0.dataValue} + \", \" + ${author.1.dataValue} + \"</div>\"","mobileColumn":true},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"","isCustomField":true,"mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"variable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

BookList.prototype._cssText = '';
BookList.prototype._htmlText = '';
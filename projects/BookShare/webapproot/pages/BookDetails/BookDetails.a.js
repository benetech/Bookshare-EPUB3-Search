dojo.declare("BookDetails", wm.Page, {
"preferredDevice": "phone",
start: function() {
},
_end: 0
});

BookDetails.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
dataForm1: ["wm.DataForm", {"desktopHeight":"100%","fitToContentHeight":true,"height":"373px","isCompositeKey":false,"layoutKind":"left-to-right","mobileHeight":"100%","readonly":true,"type":"PopularBookList.bookshare.book.list.result"}, {}, {
dataForm1EditorFormPanel: ["wm.FormPanel", {"height":"100%","type":"wm.FormPanel"}, {}, {
titleEditor1: ["wm.Text", {"caption":"Title","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"title","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
authorList: ["wm.Text", {"caption":"Authors","captionSize":"120px","dataValue":undefined,"displayValue":"","emptyValue":"emptyString","height":"35px","readonly":true,"width":"100%"}, {}],
freelyAvailableEditor1: ["wm.Number", {"caption":"FreelyAvailable","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"freelyAvailable","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
downloadFormatOneToMany1Panel: ["wm.Panel", {"desktopHeight":"96px","enableTouchHeight":true,"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"100px","verticalAlign":"middle","width":"100%"}, {}, {
downloadFormatOneToMany1: ["wm.OneToMany", {"caption":undefined,"captionAlign":"left","captionPosition":undefined,"captionSize":"20px","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"downloadFormat","minMobileHeight":100,"width":"100%"}, {}],
button1: ["wm.Button", {"caption":"Download","height":"40px","margin":"4","width":"100px"}, {}]
}],
briefSynopsisEditor1: ["wm.Text", {"autoSizeHeight":true,"caption":"BriefSynopsis","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"briefSynopsis","height":"20px","mobileHeight":"93px","readonly":true,"required":undefined,"width":"100%"}, {}],
isbn13Editor1: ["wm.Text", {"caption":"Isbn13","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"isbn13","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
publisherEditor1: ["wm.Text", {"caption":"Publisher","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"publisher","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
availableToDownloadEditor1: ["wm.Number", {"caption":"AvailableToDownload","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"availableToDownload","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
dtbookSizeEditor1: ["wm.Number", {"caption":"DtbookSize","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"dtbookSize","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}]
}]
}]
}]
};

BookDetails.prototype._cssText = '';
BookDetails.prototype._htmlText = '';
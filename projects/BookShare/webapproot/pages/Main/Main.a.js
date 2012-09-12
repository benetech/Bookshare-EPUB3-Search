dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
mainMenuListSelect: function(inSender, inItem) {
switch(inSender.selectedItem.getValue("name")) {
case "Search":
this.searchLayer.activate();
break;
case "About App":
this.aboutAppLayer.activate();
break;
default:
this.bookListLayer.activate();
}
},
_end: 0
});

Main.widgets = {
variable1: ["wm.Variable", {"isList":true,"json":"[{name: \"Sunday\", dataValue: 0}, {name: \"Monday\", dataValue: 1},{name: \"Tuesday\", dataValue: 2},{name: \"Wednesday\", dataValue: 3},{name: \"Thursday\", dataValue: 4},{name: \"Friday\", dataValue: 5},{name: \"Saturday\", dataValue: 6}]","type":"EntryData"}, {}],
mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Search\"},{\"name\":\"Latest\"},{\"name\":\"Popular\"},{\"name\":\"Category\"},{\"name\":\"Periodicals\"},{\"name\":\"About App\"}]","type":"EntryData"}, {}],
searchOptionsVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Search All\",\"dataValue\":\"all\"},{\"name\":\"Search Titles\",\"dataValue\":\"title\"},{\"name\":\"Search Authors\",\"dataValue\":\"author\"}]","type":"EntryData"}, {}],
sleeTestSvcVar01: ["wm.ServiceVariable", {"operation":"BookIdLookup","service":"xhrService"}, {}, {
input: ["wm.ServiceInput", {"type":"BookIdLookupInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"543194\"","targetProperty":"id"}, {}],
wire1: ["wm.Wire", {"expression":"\"partnerdemo@bookshare.org\"","targetProperty":"for"}, {}],
wire2: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
wire3: ["wm.Wire", {"expression":"\"rjpu85fzjfw578zcbuxws4r9\"","targetProperty":"api_key"}, {}],
wire4: ["wm.Wire", {"expression":"\"7454739e907f5595ae61d84b8547f574\"","targetProperty":"X-password"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["Page"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
layers1: ["wm.Layers", {"styles":{"backgroundColor":""}}, {}, {
homeLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"36px","source":"resources/images/logos/Android/wavemaker_36x36.png","styles":{},"width":"36px"}, {}],
titleLabel: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle","MainContent"]},"border":"6","borderColor":"#febd57","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":" ${name} \n","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","manageHistory":false,"margin":"6","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false,"styles":{"backgroundColor":"#ffffff"}}, {"onSelect":"mainMenuListSelect","onShow":"mainMenuList.deselectAll"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
searchLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel3: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
backButton3: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"70px"}, {"onclick":"app._onBack"}],
titleLabel3: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
panel2: ["wm.Panel", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"6","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
formPanel1: ["wm.FormPanel", {"height":"100%"}, {}, {
text1: ["wm.Text", {"caption":"Search","captionSize":"120px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","placeHolder":"Enter Search","width":"100%"}, {}],
searchOptionsList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"bookListLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"searchOptionsVar","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"!${text1.dataValue}","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
bookListLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel1: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
backButton1: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"70px"}, {"onclick":"app._onBack"}],
titleLabel1: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
pageContainer1: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","deferLoad":true,"margin":"6","pageName":"BookList","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{"onList1Select":"list1.onSelect"},"subpageMethodlist":{},"subpageProplist":{}}, {"onList1Select":"bookDetailsLayer"}]
}],
bookDetailsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel2: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
backButton2: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"70px"}, {"onclick":"app._onBack"}],
titleLabel2: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
pageContainer2: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#FEBD57","deferLoad":true,"margin":"6","pageName":"BookDetails","styles":{"backgroundColor":""},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}],
panel1: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,2,2,2","verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"&copy;2012 Benetech, VMware","height":"16px","padding":"0","singleLine":false,"styles":{"fontSize":"9px"},"width":"156px"}, {}],
spacer1: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
gadgetFacebookLikeButton1: ["wm.gadget.FacebookLikeButton", {"height":"21px","href":"http://www.bookshare.org","layout":"button_count","width":"95px"}, {}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';
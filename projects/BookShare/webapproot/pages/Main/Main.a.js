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
window.open("https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass"));
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

Main.widgets = {
mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Search\"},{\"name\":\"Latest\"},{\"name\":\"Popular\"},{\"name\":\"Category\"},{\"name\":\"My Downloads\"},{\"name\":\"About App\"}]","type":"EntryData"}, {}],
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
browseLatestSVar: ["wm.ServiceVariable", {"operation":"BrowseLatest","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"BrowseLatestInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}]
}]
}]
}],
browsePopularSVar: ["wm.ServiceVariable", {"operation":"AuthorSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"AuthorSearchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
}]
}],
authorSearchSVar: ["wm.ServiceVariable", {"operation":"AuthorSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"AuthorSearchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"author"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
wire2: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}]
}]
}]
}],
titleSearchSVar: ["wm.ServiceVariable", {"operation":"TitleSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TitleSearchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"title"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
wire5: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
wire6: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}]
}]
}]
}],
ftsSearchSVar: ["wm.ServiceVariable", {"operation":"FullTextSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"FullTextSearchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"searchFTS"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire4: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
wire5: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
wire6: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["Page"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
layers1: ["wm.Layers", {"defaultLayer":0,"styles":{"backgroundColor":""}}, {}, {
layerLogin: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel4: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"36px","source":"resources/images/logos/Android/wavemaker_36x36.png","styles":{},"width":"36px"}, {}],
titleLabel4: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
loginPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#FEBD57","deferLoad":true,"margin":"6","onSvarUserInfoSuccess":"homeLayer","pageName":"Login","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
homeLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"mainMenuList.deselectAll"}, {
headerPanel: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"36px","source":"resources/images/logos/Android/wavemaker_36x36.png","styles":{},"width":"36px"}, {}],
titleLabel: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle","MainContent"]},"border":"6","borderColor":"#febd57","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":" ${name} \n","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","manageHistory":false,"margin":"6","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false,"styles":{"backgroundColor":"#ffffff"}}, {"onSelect":"mainMenuListSelect"}, {
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
searchOptionsList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"bookListLayer","onSelect1":"searchOptionsListSelect1","onShow":"searchOptionsList.selectAll"}, {
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
listLabel: ["wm.Label", {"_classes":{"domNode":["HeaderPanel"]},"align":"center","caption":"","padding":"4","width":"100%"}, {}],
bookListPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","deferLoad":true,"margin":"6","pageName":"BookList","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{"onList1Select":"bookList.onSelect"},"subpageMethodlist":{},"subpageProplist":{"bookListDataSet":"bookList.dataSet","bookListSelectedItem":"bookList.selectedItem"}}, {"onList1Select":"bookDetailsLayer"}]
}],
bookDetailsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel2: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
backButton2: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"70px"}, {"onclick":"app._onBack"}],
titleLabel2: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
bookDetailsPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#FEBD57","deferLoad":true,"margin":"6","pageName":"BookDetails","styles":{"backgroundColor":""},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{"bookDetailsDataSetDataSet":"bookDetailsDataSet.dataSet"}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookListPageContainer.bookListSelectedItem","targetProperty":"bookDetailsDataSetDataSet"}, {}]
}]
}]
}],
layerCategory: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel5: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
backButton4: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"70px"}, {"onclick":"app._onBack"}],
titleLabel5: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
categoryPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","deferLoad":true,"margin":"6","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
layerAbout: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
headerPanel6: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
backButton5: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"70px"}, {"onclick":"app._onBack"}],
titleLabel6: ["wm.Label", {"align":"center","caption":"Bookshare","height":"100%","padding":"4","width":"100%"}, {}]
}],
aboutPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","deferLoad":true,"margin":"6","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
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
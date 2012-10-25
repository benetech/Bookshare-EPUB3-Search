dojo.declare("BookDetails", wm.Page, {
"preferredDevice": "phone",
start: function() {
},
downloadSVarSuccess: function(inSender, inDeprecated) {
var value = inSender.getValue("dataValue") || "";
var code = (value.match(/\<status\-code\>(\d+)/) || [])[1];
switch(code) {
case "42":
case "40":
app.alert("Content not available");
break;
case "41":
app.alert("Content not available for your account; please try another account");
break;
case "60":
app.alert("The mobile application does not have access to this content, please go to http://bookshare.com");
break;
default:
this.notifyDownloadSuccess.update();
/* Sadly, IOS popup blocker blocks windows that are opened after a delay rather than directly triggered
* by a user event.  All wm.Button onClick events contain a short delay and can't be used to open the window.
* Similarly, the ServiceVariable onSuccess event handler can't open a new window.
* Connect to the domNode's onClick event directly to open the new window and avoid the IOS popup blocker.
* For the same reason, ontouchstart is needed for real mobile devices as onclick has delays imposed by the browser.
*/
this._openQueueConnect = this.connect(app.confirmDialog.button1.domNode, wm.isFakeMobile ? "onclick" : "ontouchstart", this, "openQueue");
}
if (app.alertDialog && app.alertDialog.showing) {
dojo.attr(app.alertDialog.domNode, "role", "alertdialog");
app.alertDialog.domNode.focus();
}
if (app.confirmDialog && app.confirmDialog.showing) {
dojo.attr(app.confirmDialog.domNode, "role", "alertdialog");
app.confirmDialog.domNode.focus();
}
},
bookDetailsSVarSuccess: function(inSender, inDeprecated) {
var validFormats = main.formats || ["EPUB 3"];
var downloadFormats = inSender.getValue("bookshare.book.metadata.downloadFormat");
if (downloadFormats) {
var found = false;
downloadFormats.forEach(function(item) {
if (dojo.indexOf(validFormats, item.getValue("dataValue")) >= 0)
found = true;
});
}
this.bookDownloadButton.setDisabled(!found);
},
openQueue: function(inSender, inResult) {
var url = "https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass");
window.open(url);
},
/* Failure to disconnect means that all uses of the confirm dialog will open the users history */
notifyDownloadSuccessClose: function(inSender) {
this.disconnect(this._openQueueConnect);
/* Dismiss this as button1 "View Queue" will never have its normal onclick event fire due to the window change blocking the full event */
app.confirmDialog.hide();
},
downloadMenuListSelect: function(inSender, inItem) {
switch(inSender.selectedItem.getValue("dataValue")) {
case "home":
main.layers1.setLayerIndex(1);
break;
case "book":
this.layers.setLayerIndex(0);
break;
case "downloads":
window.open("https://www.bookshare.org/bookHistory?j_userName=" + app.varUser.getValue("email") + "&j_password=" + app.varUser.getValue("pass"));
break;
}
},
successLabelShow: function(inSender) {
this.successLabel.setCaption("");
wm.job("showAriaLabel", 3000, this, function() {
this.successLabel.setCaption("Your book has been added to your queue");
});
},
ariaRoleLabelShow: function(inSender) {
this.ariaRoleLabel.setCaption("");
wm.job("showAriaLabel", 3000, this, function() {
this.ariaRoleLabel.$.binding.wires.caption.refreshValue();
});
},
_end: 0
});

BookDetails.widgets = {
bookDetailsDataSet: ["wm.Variable", {"json":"{\"author\":[{\"dataValue\":\"Elizabeth Wood\"},{\"dataValue\":\"Justine Howard\"},{\"dataValue\":\"Pat Broadhead\"}],\"availableToDownload\":0,\"bookshareId\":\"548376\",\"briefSynopsis\":\"Providing high quality play experiences is an essential part of good early years education, but this can pose a challenge for practitioners who face pressure from a more didactic primary curriculum, and from parents worried that their children will \",\"category\":[{\"dataValue\":\"Nonfiction\"}],\"completeSynopsis\":\"Providing high quality play experiences is an essential part of good early years education, but this can pose a challenge for practitioners who face pressure from a more didactic primary curriculum, and from parents worried that their children will fail to acquire essential skills and knowledge.  By helping the reader to develop their understanding of the complex relationships between play and learning, this book examines current theoretical perspectives on play, alongside examples of recent and innovative play research from a range of disciplinary and methodological perspectives.  With contributions from leading play scholars, it brings together theory, research, policy and practice in relation to play and learning in early years settings.  The emphasis is on the relationship between play and learning, and play and pedagogy, and the need to understand these dimensions more substantially in order to teach with confidence.  Included are chapters on: - the influence of play on thinking, problem-solving and creativity - cooperative play and learning - play, risk and outdoor learning - learning to play in cultural context There are chapter objectives, reflective points, reflective tasks and suggestions for further reading throughout, to facilitate critical thinking and encourage independent study.  Suitable for early years practitioners, early childhood students at undergraduate and postgraduate levels, and all those who work with and care for young children, this is an exciting and thought-provoking book.\",\"contentId\":548376,\"copyright\":\"2010\",\"downloadFormat\":[{\"dataValue\":\"BRF\"},{\"dataValue\":\"DAISY\"}],\"dtbookSize\":928926,\"freelyAvailable\":0,\"images\":1,\"isbn13\":\"9781446244333\",\"language\":[{\"dataValue\":\"English US\"}],\"publishDate\":\"09122012\",\"publisher\":\"SAGE Press\",\"quality\":\"Publisher Quality\",\"title\":\"Play and Learning in the Early Years\"}","type":"BrowseLatestResponse.bookshare.book.list.result"}, {}],
bookDetailsDataSetDataSet: ["wm.Property", {"bindSource":undefined,"bindTarget":1,"property":"bookDetailsDataSet.dataSet","type":"BrowseLatestResponse.bookshare.book.list.result"}, {}],
bookDetailsSVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"BookIdLookup","service":"xhrService"}, {"onSuccess":"bookDetailsSVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"BookIdLookupInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsDataSet.id","targetProperty":"id"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}]
}]
}]
}],
downloadSVar: ["wm.ServiceVariable", {"operation":"DownloadAsync","service":"xhrService"}, {"onSuccess":"downloadsLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formPanel","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DownloadAsyncInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.contentId","targetProperty":"content"}, {}],
wire1: ["wm.Wire", {"expression":"3","targetProperty":"version"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}]
}]
}]
}],
notifyDownloadSuccess: ["wm.NotificationCall", {"operation":"confirm"}, {"onClose":"notifyDownloadSuccessClose"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"View Queue\"","targetProperty":"OKButtonText"}, {}],
wire2: ["wm.Wire", {"expression":"\"Continue Browsing\"","targetProperty":"CancelButtonText"}, {}],
wire: ["wm.Wire", {"expression":"\"<div role='alertdialog'>Your book has been added to your queue</div>\"","targetProperty":"text"}, {}]
}]
}]
}],
downloadMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Goto downloads\",\"dataValue\":\"downloads\"},{\"name\":\"Find more books\",\"dataValue\":\"home\"},{\"name\":\"Return to book description\",\"dataValue\":\"book\"}]","type":"EntryData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"_classes":{"domNode":["BookHeaderPanel"]},"fitToContentHeight":true,"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
titleLabel: ["wm.Label", {"autoSizeHeight":true,"height":"20px","minDesktopHeight":20,"minHeight":20,"padding":"4","singleLine":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.title","targetProperty":"caption"}, {}]
}]
}],
bookDownloadButton: ["wm.Button", {"caption":"Download","height":"100%","margin":"8","minHeight":60,"minMobileHeight":60,"width":"100px"}, {"onclick":"downloadSVar"}]
}],
layers: ["wm.Layers", {"manageHistory":false}, {}, {
mainLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
formPanel: ["wm.FormPanel", {"captionAlign":"left","captionSize":"100px","height":"100%"}, {}, {
panel2: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Author","padding":"4,4,4,0","styles":{"fontWeight":"bold"},"width":"100px"}, {}],
authorListLabel: ["wm.Label", {"autoSizeHeight":true,"display":"Array","height":"8px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.ArrayFormatter", {}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.author","targetProperty":"caption"}, {}]
}]
}]
}],
qualityEditor1: ["wm.Text", {"caption":"Quality","captionAlign":"left","changeOnKey":true,"displayValue":"","emptyValue":"emptyString","enableTouchHeight":false,"height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.quality","targetProperty":"dataValue"}, {}]
}]
}],
publisherEditor1: ["wm.Text", {"caption":"Publisher","captionAlign":"left","changeOnKey":true,"displayValue":"","emptyValue":"emptyString","enableTouchHeight":false,"height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.publisher","targetProperty":"dataValue"}, {}]
}]
}],
publishDateEditor1: ["wm.Text", {"caption":"Published","captionAlign":"left","changeOnKey":true,"displayValue":"//","emptyValue":"emptyString","enableTouchHeight":false,"formatter":undefined,"height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${bookDetailsSVar.publishDate}.substr(0,2) + \"/\" + ${bookDetailsSVar.publishDate}.substr(2,2) + \"/\" + ${bookDetailsSVar.publishDate}.substr(4)","targetProperty":"dataValue"}, {}]
}]
}],
panel4: ["wm.Panel", {"fitToContentHeight":true,"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Formats","padding":"4,4,4,0","styles":{"fontWeight":"bold"},"width":"100px"}, {}],
authorListLabel1: ["wm.Label", {"autoSizeHeight":true,"display":"Array","height":"8px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.ArrayFormatter", {}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.downloadFormat","targetProperty":"caption"}, {}]
}]
}]
}],
completeSynopsisEditor1: ["wm.Text", {"autoSizeHeight":true,"caption":"Synopsis","captionAlign":"left","captionPosition":"top","captionSize":"16px","changeOnKey":true,"displayValue":"","emptyValue":"emptyString","enableTouchHeight":false,"height":"35px","maxHeight":100000,"readonly":true,"required":undefined,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.completeSynopsis","targetProperty":"dataValue"}, {}]
}]
}],
ariaRoleLabel: ["wm.Label", {"_classes":{"domNode":["ARIARoleLabel"]},"ariaRole":"alert","height":"1px","padding":"0","width":"100%"}, {"onShow":"ariaRoleLabelShow"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Book Details Page Loaded.  Showing book \" + ${bookDetailsSVar.bookshare.book.metadata.title} + \" by \" + ${bookDetailsSVar.bookshare.book.metadata.author.dataValue}","targetProperty":"caption"}, {}]
}]
}]
}]
}]
}],
downloadsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
successLabel: ["wm.Label", {"align":"center","ariaRole":"alert","caption":"","height":"32px","padding":"4","width":"100%"}, {"onShow":"successLabelShow"}],
downloadMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"downloadMenuListSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"downloadMenuVar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

BookDetails.prototype._cssText = '.BookHeaderPanel {\
background-color: #febd57;\
}\
.BookHeaderPanel .wmlabel {\
font-weight: bold ;\
font-size: 1.4Em ;\
color: white ;\
}\
';
BookDetails.prototype._htmlText = '';
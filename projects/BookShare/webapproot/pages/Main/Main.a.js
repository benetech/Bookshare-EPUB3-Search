dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
_end: 0
});

Main.widgets = {
variable1: ["wm.Variable", {"isList":true,"json":"[{name: \"Sunday\", dataValue: 0}, {name: \"Monday\", dataValue: 1},{name: \"Tuesday\", dataValue: 2},{name: \"Wednesday\", dataValue: 3},{name: \"Thursday\", dataValue: 4},{name: \"Friday\", dataValue: 5},{name: \"Saturday\", dataValue: 6}]","type":"EntryData"}, {}],
mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Search\"},{\"name\":\"Latest\"},{\"name\":\"Popular\"},{\"name\":\"Category\"},{\"name\":\"Periodicals\"},{\"name\":\"About App\"}]","type":"EntryData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
headerPanel: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"36px","source":"resources/images/logos/Android/wavemaker_36x36.png","width":"36px"}, {}],
titleLabel: ["wm.Label", {"align":"center","caption":"Book Share","height":"100%","padding":"4","width":"100%"}, {}]
}],
layers1: ["wm.Layers", {}, {}, {
homeLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":" ${name} \n","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"bookListLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
bookListLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"BookList","subpageEventlist":{"onList1Select":"list1.onSelect"},"subpageMethodlist":{},"subpageProplist":{}}, {"onList1Select":"bookDetailsLayer"}]
}],
bookDetailsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"BookDetails","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';
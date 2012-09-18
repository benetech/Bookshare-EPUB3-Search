dojo.declare("About", wm.Page, {
"preferredDevice": "phone",
start: function() {
},
_end: 0
});

About.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
html1: ["wm.Html", {"autoSizeHeight":true,"height":"112px","html":"<font face=\"verdanda\" size=\"3\"><p>This BookShare application was developed by VMware employees pro bono as part of the Service Learning initiative sponsored by the <a href=\"http://www.vmware.com/company/foundation.html\">VMware Foundation</a>.</p>\n</font>","margin":"0,5,0,5","minDesktopHeight":15}, {}],
picture1: ["wm.Picture", {"aspect":"h","height":"115px","source":"resources/images/logos/VMW_10Q3_ICON_Foundation_R4.png","width":"319px"}, {}],
html2: ["wm.Html", {"autoSizeHeight":true,"height":"167px","html":"<font face=\"verdanda\" size=\"2\">\n<p>The <a href=\"https://www.bookshare.org/\">Bookshare</a> project is supported by the U.S. Department of Education, Office of Special Education Programs (Cooperative Agreement #H327K070001). Opinions expressed herein are those of the authors and do not necessarily represent the position of the U.S. Department of Education.</p>\n<p>Bookshare © 2012 <a href=\"http://www.benetech.org/\">Benetech</a>. All rights reserved. Bookshare® is a registered trademark of Benetech.</p></font>","margin":"0,5,0,5","minDesktopHeight":15}, {}]
}]
};

About.prototype._cssText = '';
About.prototype._htmlText = '';
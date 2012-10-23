/*
*  Copyright (C) 2010-2012 VMware, Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*     http://www.apache.org/licenses/LICENSE-2.0
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
dojo.declare("Login", wm.Page, {
"preferredDevice": "phone",
start: function() {
var md5text = wm.load("resources/javascript/md5.js");
eval(md5text);
this.hex_md5 = hex_md5;
if (window["PhoneGap"]) {
this.restorePhonegapCredentials();
} else {
this.usernameInput.setDataValue(dojo.cookie("user") || "");
this.usernameInput.focus();
}
this.loadingDialog.setMargin(parseInt(this.loadingDialog.widgetToCover.margin) + parseInt(this.loadingDialog.widgetToCover.border));
dojo.attr(this.loginErrorMsg.domNode, "role", "alert");
},
loginButtonClick: function(inSender) {
this.loginErrorMsg.setCaption("");
var username = this.usernameInput.getDataValue();
app.varUser.setData({'email':username,
"hashPass":this.hex_md5(this.passwordInput.getDataValue()),
"pass":this.passwordInput.getDataValue()});
dojo.cookie("user", username, {
expires: 365
});
},
svarUserInfoResult: function(inSender) {
inSender.getData() === null ? this.loginFailed() : this.svarUserInfoSuccess(inSender);
},
svarUserInfoSuccess: function(inSender) {
var data = inSender.getData();
if (!data || !data.bookshare) return this.loginFailed();
console.log("Welcome: " + inSender.getData().bookshare.user.displayName);
if (window["PhoneGap"]) {
var varUserData = app.varUser.getData();
this.phonegapCredentialStorage.setData({
email: varUserData.email,
pass: varUserData.pass,
dataValue:varUserData.hashPass
});
}
main.loginSuccess();
},
loginFailed: function(inResponse) {
this.loginErrorMsg.setCaption("Invalid username or password.");
this.usernameInput.focus();
},
restorePhonegapCredentials: function() {
var username = this.phonegapCredentialStorage.getValue("email");
var password = this.phonegapCredentialStorage.getValue("pass");
if (username || password) {
this.usernameInput.setDataValue(username);
this.passwordInput.setDataValue(password);
if (username && password) {
this.loginButton.onclick();
}
}
},
_end: 0
});

Login.widgets = {
phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"user"}, {}],
svarUserInfo: ["wm.ServiceVariable", {"operation":"UserInfo","service":"xhrService"}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"svarUserInfoSuccess"}, {
input: ["wm.ServiceInput", {"type":"UserInfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}]
}]
}]
}],
loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionSize":"80px","captionWidth":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox: ["wm.Layout", {}, {}, {
loginMainPanel: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
loginLabel: ["wm.Label", {"_classes":{"domNode":["FullSizeLabel"]},"align":"center","caption":"Please login to use this service","height":"100%","padding":"4","width":"100%"}, {}],
loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"border":"2","desktopHeight":"222px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"230px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":""},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"136px","horizontalAlign":"center","verticalAlign":"middle","width":"100%"}, {}, {
usernameInput: ["wm.Text", {"caption":"Email","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataValue":"","desktopHeight":"68px","displayValue":"","emptyValue":"emptyString","height":"68px","mobileHeight":"68px","width":"100%"}, {}],
passwordInput: ["wm.Text", {"caption":"Password","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataValue":"","desktopHeight":"68px","displayValue":"","emptyValue":"emptyString","height":"68px","mobileHeight":"68px","password":true,"width":"100%"}, {}]
}],
loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
loginButton: ["wm.Button", {"borderColor":"#000000","caption":"Login","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"svarUserInfo"}]
}]
}],
spacer1: ["wm.Spacer", {"height":"100%","width":"96px"}, {}]
}]
}]
};

Login.prototype._cssText = '.Login .Login-loginErrorMsg {\
font-size: 12px; color: red\
}\
.Login .Login-wmTitle {\
font-size: 20px;\
}\
.wmmobile .Login .wmeditor .wmlabel {\
font-size: 16px;\
}\
.wmmobile .Login .wmeditor input {\
font-size: 20px;\
}\
.Login div .rounded {\
-webkit-border-radius: 8px;\
-moz-border-radius: 8px;\
border-radius: 8px;\
}\
';
Login.prototype._htmlText = '<div id="sample">Sample Markup</div>\
';
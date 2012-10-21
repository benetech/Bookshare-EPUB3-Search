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
    },
    loginButtonClick: function(inSender) {
        this.loginErrorMsg.setCaption("");
        var username = this.usernameInput.getDataValue();
        
        app.varUser.setData({'email':username, "hashPass":this.hex_md5(this.passwordInput.getDataValue()), "pass":this.passwordInput.getDataValue()});
        dojo.cookie("user", username, {
            expires: 365
        });
    },
    
  svarUserInfoResult: function(inSender) {
        inSender.getData() === null ? this.loginFailed() : this.svarUserInfoSuccess(inSender);
  },
        
  svarUserInfoSuccess: function(inSender) {    
       console.log("Welcome: " + inSender.getData().bookshare.user.displayName);
        if (window["PhoneGap"]) {
            this.phonegapCredentialStorage.setData({
                name: app.varUser.getData().email,
                dataValue:app.varUser.getData().hashPass
            });
        }
        main.loginSuccess();
    },
    loginFailed: function(inResponse) {
        this.loginErrorMsg.setCaption("Invalid username or password.");
        this.usernameInput.focus();
    },
    restorePhonegapCredentials: function() {        
        var username = this.phonegapCredentialStorage.getValue("name");
        var password = this.phonegapCredentialStorage.getValue("dataValue");
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



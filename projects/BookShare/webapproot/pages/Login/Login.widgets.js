Login.widgets = {
	phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
	loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionSize":"80px","captionWidth":"100px"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	svarUserInfo: ["wm.ServiceVariable", {"operation":"UserInfo","service":"xhrService"}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"svarUserInfoResult"}, {
		input: ["wm.ServiceInput", {"type":"UserInfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}]
			}]
		}]
	}],
	layoutBox: ["wm.Layout", {}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"border":"2","desktopHeight":"222px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"234px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":""},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
				panel1: ["wm.FormPanel", {"captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"90px","editorHeight":"68px","fitToContentHeight":true,"height":"140px","mobileHeight":"90px"}, {}, {
					usernameInput: ["wm.Text", {"caption":"Email","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"68px","mobileHeight":"68px","width":"100%"}, {}],
					passwordInput: ["wm.Text", {"caption":"Password","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"68px","mobileHeight":"68px","password":true,"width":"100%"}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"borderColor":"#000000","caption":"Login","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"svarUserInfo"}]
				}]
			}]
		}]
	}]
}
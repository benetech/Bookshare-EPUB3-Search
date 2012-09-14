wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "shiftDeserializedProperties",
		"operationType": null,
		"parameters": [{
			"name": "index",
			"type": "int"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['wavemakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['wm_default'] = {"wm.ToggleButton":{"border":"1","borderColor":"#333333"},"wm.ToggleButtonPanel":{"border":"1","borderColor":"#333333"},"wm.Button":{"border":"1","borderColor":"#333333","height":"32px"},"wm.Layout":{"border":"0","borderColor":"#333333"},"wm.Bevel":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.Splitter":{"bevelSize":"4","border":"1","borderColor":"#333333"},"wm.AccordionDecorator":{"captionBorder":"1","captionBorderColor":"#333333"},"wm.AccordionLayers":{"border":"0","borderColor":"#333333","captionBorder":"2","layerBorder":"1","captionHeight":"30"},"wm.FancyPanel":{"margin":"2","border":"0","borderColor":"#999999","innerBorder":"2","labelHeight":"24"},"wm.TabLayers":{"layersType":"Tabs","margin":"0,2,0,2","clientBorder":"1","border":"0","clientBorderColor":"#999999","headerHeight":"29px","borderColor":"#999999","mobileHeaderHeight":"38px"},"wm.WizardLayers":{"margin":"0,2,0,2","border":"0","clientBorder":"1","clientBorderColor":"#333333"},"wm.Layer":{},"wm.Dialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","containerClass":"MainContent","titlebarHeight":"22"},"wm.GenericDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.RichTextDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.PageDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","noBevel":true,"containerClass":"MainContent"},"wm.DesignableDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.DojoMenu":{"padding":"0","border":"0","borderColor":"#333333"},"wm.List":{"margin":"0,2,0,2","border":"2","borderColor":"#333333"},"wm.dijit.ProgressBar":{"border":"0","borderColor":"#333333"},"wm.RichText":{"border":"0","borderColor":"#333333"},"wm.RoundedButton":{"border":"0","borderColor":"#333333"},"wm.DataGrid":{"border":"2","borderColor":"#333333"},"wm.Label":{},"wm.Picture":{},"wm.Spacer":{},"wm.Layers":{"border":"0"},"wm.PageContainer":{},"wm.Panel":{"borderColor":"#333333","border":"0"},"wm.CheckBoxEditor":{},"wm.CurrencyEditor":{},"wm.Text":{"border":"0"},"wm.SelectMenu":{"border":"0"},"wm.dijit.Calendar":{},"wm.DojoGrid":{"border":"1","borderColor":"#999999"},"wm.Control":{"borderColor":"#333333"},"wm.BusyButton":{"border":"1","borderColor":"#333333"},"wm.Checkbox":{"border":"0"},"wm.ColorPicker":{"border":"0"},"wm.Currency":{"border":"0"},"wm.Date":{"border":"0"},"wm.Number":{"border":"0"},"wm.RadioButton":{"border":"0"},"wm.Slider":{"border":"0"},"wm.LargeTextArea":{"border":"0"},"wm.Time":{"border":"0"},"wm.WidgetsJsDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.FileUploadDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.ColorPickerDialog":{"border":"1","borderColor":"#333333"},"wm.MainContentPanel":{"border":"1","borderColor":"#ffffff"},"wm.HeaderContentPanel":{"border":"1","borderColor":"#888888"},"wm.EmphasizedContentPanel":{"border":"1","borderColor":"#333333"},"wm.WidgetList":{},"wm.PopupMenuButton":{}};
dojo.declare("BookShare", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"saveCounter": 113, 
	"showIOSPhoneGapBackButton": false, 
	"studioVersion": "6.5.0.M4", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		"BrowseLatestResponse.bookshare": ["wm.TypeDefinition", {}, {}, {
			version: ["wm.TypeDefinitionField", {"fieldName":"version"}, {}],
			messages: ["wm.TypeDefinitionField", {"fieldName":"messages","fieldType":"StringData","isList":true}, {}],
			book: ["wm.TypeDefinitionField", {"fieldName":"book","fieldType":"BrowseLatestResponse.bookshare.book"}, {}]
		}], 
		"BrowseLatestResponse.bookshare.book": ["wm.TypeDefinition", {}, {}, {
			list: ["wm.TypeDefinitionField", {"fieldName":"list","fieldType":"BrowseLatestResponse.bookshare.book.list"}, {}]
		}], 
		"BrowseLatestResponse.bookshare.book.list": ["wm.TypeDefinition", {}, {}, {
			result: ["wm.TypeDefinitionField", {"fieldName":"result","fieldType":"BrowseLatestResponse.bookshare.book.list.result","isList":true}, {}],
			limit: ["wm.TypeDefinitionField", {"fieldName":"limit","fieldType":"Number"}, {}],
			numPages: ["wm.TypeDefinitionField", {"fieldName":"numPages","fieldType":"Number"}, {}],
			page: ["wm.TypeDefinitionField", {"fieldName":"page","fieldType":"Number"}, {}],
			totalResults: ["wm.TypeDefinitionField", {"fieldName":"totalResults","fieldType":"Number"}, {}]
		}], 
		"BrowseLatestResponse.bookshare.book.list.result": ["wm.TypeDefinition", {}, {}, {
			author: ["wm.TypeDefinitionField", {"fieldName":"author","fieldType":"StringData","isList":true}, {}],
			availableToDownload: ["wm.TypeDefinitionField", {"fieldName":"availableToDownload","fieldType":"Number"}, {}],
			briefSynopsis: ["wm.TypeDefinitionField", {"fieldName":"briefSynopsis"}, {}],
			downloadFormat: ["wm.TypeDefinitionField", {"fieldName":"downloadFormat","fieldType":"StringData","isList":true}, {}],
			dtbookSize: ["wm.TypeDefinitionField", {"fieldName":"dtbookSize","fieldType":"Number"}, {}],
			freelyAvailable: ["wm.TypeDefinitionField", {"fieldName":"freelyAvailable","fieldType":"Number"}, {}],
			id: ["wm.TypeDefinitionField", {"fieldName":"id","fieldType":"Number"}, {}],
			images: ["wm.TypeDefinitionField", {"fieldName":"images","fieldType":"Number"}, {}],
			isbn13: ["wm.TypeDefinitionField", {"fieldName":"isbn13"}, {}],
			publisher: ["wm.TypeDefinitionField", {"fieldName":"publisher"}, {}],
			title: ["wm.TypeDefinitionField", {"fieldName":"title"}, {}]
		}], 
		"CategoryListResponse.bookshare": ["wm.TypeDefinition", {}, {}, {
			category: ["wm.TypeDefinitionField", {"fieldName":"category","fieldType":"CategoryListResponse.bookshare.category"}, {}],
			version: ["wm.TypeDefinitionField", {"fieldName":"version"}, {}],
			messages: ["wm.TypeDefinitionField", {"fieldName":"messages","fieldType":"StringData","isList":true}, {}]
		}], 
		"CategoryListResponse.bookshare.category": ["wm.TypeDefinition", {}, {}, {
			list: ["wm.TypeDefinitionField", {"fieldName":"list","fieldType":"CategoryListResponse.bookshare.category.list"}, {}],
			result: ["wm.TypeDefinitionField", {"fieldName":"result","fieldType":"CategoryListResponse.bookshare.category.result","isList":true}, {}]
		}], 
		"CategoryListResponse.bookshare.category.list": ["wm.TypeDefinition", {}, {}, {
			limit: ["wm.TypeDefinitionField", {"fieldName":"limit","fieldType":"Number"}, {}],
			numPages: ["wm.TypeDefinitionField", {"fieldName":"numPages","fieldType":"Number"}, {}],
			page: ["wm.TypeDefinitionField", {"fieldName":"page","fieldType":"Number"}, {}]
		}], 
		"CategoryListResponse.bookshare.category.result": ["wm.TypeDefinition", {}, {}, {
			name: ["wm.TypeDefinitionField", {"fieldName":"name"}, {}]
		}], 
		"GradeListResponse.bookshare": ["wm.TypeDefinition", {}, {}, {
			grade: ["wm.TypeDefinitionField", {"fieldName":"grade","fieldType":"GradeListResponse.bookshare.grade"}, {}],
			version: ["wm.TypeDefinitionField", {"fieldName":"version"}, {}],
			messages: ["wm.TypeDefinitionField", {"fieldName":"messages","fieldType":"StringData","isList":true}, {}]
		}], 
		"GradeListResponse.bookshare.grade": ["wm.TypeDefinition", {}, {}, {
			list: ["wm.TypeDefinitionField", {"fieldName":"list","fieldType":"GradeListResponse.bookshare.grade.list"}, {}],
			result: ["wm.TypeDefinitionField", {"fieldName":"result","fieldType":"GradeListResponse.bookshare.grade.result","isList":true}, {}]
		}], 
		"GradeListResponse.bookshare.grade.list": ["wm.TypeDefinition", {}, {}, {
			limit: ["wm.TypeDefinitionField", {"fieldName":"limit","fieldType":"Number"}, {}],
			numPages: ["wm.TypeDefinitionField", {"fieldName":"numPages","fieldType":"Number"}, {}],
			page: ["wm.TypeDefinitionField", {"fieldName":"page","fieldType":"Number"}, {}]
		}], 
		"GradeListResponse.bookshare.grade.result": ["wm.TypeDefinition", {}, {}, {
			name: ["wm.TypeDefinitionField", {"fieldName":"name"}, {}]
		}], 
		"ISBNLookupResponse.bookshare": ["wm.TypeDefinition", {}, {}, {
			version: ["wm.TypeDefinitionField", {"fieldName":"version"}, {}],
			messages: ["wm.TypeDefinitionField", {"fieldName":"messages","fieldType":"StringData","isList":true}, {}],
			book: ["wm.TypeDefinitionField", {"fieldName":"book","fieldType":"ISBNLookupResponse.bookshare.book"}, {}]
		}], 
		"ISBNLookupResponse.bookshare.book": ["wm.TypeDefinition", {}, {}, {
			metadata: ["wm.TypeDefinitionField", {"fieldName":"metadata","fieldType":"ISBNLookupResponse.bookshare.book.metadata"}, {}]
		}], 
		"ISBNLookupResponse.bookshare.book.metadata": ["wm.TypeDefinition", {}, {}, {
			author: ["wm.TypeDefinitionField", {"fieldName":"author","fieldType":"StringData","isList":true}, {}],
			availableToDownload: ["wm.TypeDefinitionField", {"fieldName":"availableToDownload","fieldType":"Number"}, {}],
			bookshareId: ["wm.TypeDefinitionField", {"fieldName":"bookshareId"}, {}],
			briefSynopsis: ["wm.TypeDefinitionField", {"fieldName":"briefSynopsis"}, {}],
			category: ["wm.TypeDefinitionField", {"fieldName":"category","fieldType":"StringData","isList":true}, {}],
			completeSynopsis: ["wm.TypeDefinitionField", {"fieldName":"completeSynopsis"}, {}],
			contentId: ["wm.TypeDefinitionField", {"fieldName":"contentId","fieldType":"Number"}, {}],
			copyright: ["wm.TypeDefinitionField", {"fieldName":"copyright"}, {}],
			downloadFormat: ["wm.TypeDefinitionField", {"fieldName":"downloadFormat","fieldType":"StringData","isList":true}, {}],
			dtbookSize: ["wm.TypeDefinitionField", {"fieldName":"dtbookSize","fieldType":"Number"}, {}],
			freelyAvailable: ["wm.TypeDefinitionField", {"fieldName":"freelyAvailable","fieldType":"Number"}, {}],
			images: ["wm.TypeDefinitionField", {"fieldName":"images","fieldType":"Number"}, {}],
			isbn13: ["wm.TypeDefinitionField", {"fieldName":"isbn13"}, {}],
			language: ["wm.TypeDefinitionField", {"fieldName":"language","fieldType":"StringData","isList":true}, {}],
			publishDate: ["wm.TypeDefinitionField", {"fieldName":"publishDate"}, {}],
			publisher: ["wm.TypeDefinitionField", {"fieldName":"publisher"}, {}],
			quality: ["wm.TypeDefinitionField", {"fieldName":"quality"}, {}],
			title: ["wm.TypeDefinitionField", {"fieldName":"title"}, {}]
		}], 
		"UserInfoResponse.bookshare": ["wm.TypeDefinition", {}, {}, {
			version: ["wm.TypeDefinitionField", {"fieldName":"version"}, {}],
			messages: ["wm.TypeDefinitionField", {"fieldName":"messages","fieldType":"StringData","isList":true}, {}],
			user: ["wm.TypeDefinitionField", {"fieldName":"user","fieldType":"UserInfoResponse.bookshare.user"}, {}],
			downloadsRemaining: ["wm.TypeDefinitionField", {"fieldName":"downloadsRemaining","fieldType":"Number"}, {}]
		}], 
		"UserInfoResponse.bookshare.user": ["wm.TypeDefinition", {}, {}, {
			userId: ["wm.TypeDefinitionField", {"fieldName":"userId","fieldType":"Number"}, {}],
			displayName: ["wm.TypeDefinitionField", {"fieldName":"displayName"}, {}]
		}], 
		BrowseLatestResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"BrowseLatestResponse.bookshare"}, {}]
		}], 
		CategoryListResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"CategoryListResponse.bookshare"}, {}]
		}], 
		GradeListResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"GradeListResponse.bookshare"}, {}]
		}], 
		ISBNLookupResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"ISBNLookupResponse.bookshare"}, {}]
		}], 
		UserInfoResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"UserInfoResponse.bookshare"}, {}]
		}], 
		user: ["wm.TypeDefinition", {}, {}, {
			field1: ["wm.TypeDefinitionField", {"fieldName":"email"}, {}],
			field2: ["wm.TypeDefinitionField", {"fieldName":"hashPass"}, {}]
		}], 
		AuthorSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"author":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		BookIdLookup: ["wm.XhrDefinition", {"headers":{},"parameters":{"id":{"transmitType":"path","type":"String","bindable":true},"for":{"transmitType":"path","type":"String","bindable":true},"format":{"transmitType":"path","type":"String","bindable":true},"api_key":{"transmitType":"queryString","type":"String","bindable":true},"X-password":{"transmitType":"header","type":"String","bindable":true}},"returnType":"ISBNLookupResponse","url":"https://api.bookshare.org/book"}, {}], 
		BrowseLatest: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/latest"}, {}], 
		BrowsePopular: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/popular"}, {}], 
		CategoryList: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"CategoryListResponse","url":"https://api.bookshare.org/reference/category/list"}, {}], 
		CategorySearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"category":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		DatePublishedSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"since":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		DownloadAsync: ["wm.XhrDefinition", {"headers":{},"parameters":{"content":{"transmitType":"path","type":"Number"},"version":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"String","url":"https://api.bookshare.org/download"}, {}], 
		FullTextSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"searchFTS":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book"}, {}], 
		GradeList: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"GradeListResponse","url":"https://api.bookshare.org/reference/grade/list"}, {}], 
		GradeSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"grade":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		ISBNLookup: ["wm.XhrDefinition", {"headers":{},"parameters":{"isbn":{"transmitType":"path","type":"String"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"ISBNLookupResponse","url":"https://api.bookshare.org/book"}, {}], 
		TitleAuthorSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"search":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book"}, {}], 
		TitleSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"title":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		UserInfo: ["wm.XhrDefinition", {"headers":{},"parameters":{"for":{"transmitType":"path","type":"String"},"X-password":{"transmitType":"header","type":"String"},"api_key":{"transmitType":"queryString","type":"String"}},"returnType":"UserInfoResponse","url":"https://api.bookshare.org/user/info/display/format/json"}, {}], 
		varAPIKey: ["wm.Variable", {"type":"StringData"}, {}], 
		varUser: ["wm.Variable", {"type":"user"}, {}]
	},
	_end: 0
});

BookShare.extend({
 postInit: function() {
    var api_key = dojo.trim(wm.load("resources/passwords/api_key.txt"));
    app.varAPIKey.setValue("dataValue", api_key);
    this.inherited(arguments);
    },
	_end: 0
});
BookShare.prototype._css = '.HeaderPanel, .HeaderPanel .wmlabel {\
font-weight: bold ;\
font-size: 1.4Em ;\
color: white ;\
}\
html.WMApp body .MainContent {\
background-color: #ffffff;\
-webkit-border-radius: 16px;\
border-radius: 16px;\
}\
html .wm_default .wmbutton {\
background: -webkit-gradient(linear, center top, center bottom, from(#F37D23), color-stop(94%,#C2641A), to(#C2641A));\
background: -moz-linear-gradient(top, #F37D23 0%,#C2641A 94%,#C2641A 100%);\
background: -o-linear-gradient(top, #F37D23 0%,#C2641A 94%,#C2641A 100%);\
background: -ms-linear-gradient(top, #F37D23 0%,#C2641A 94%,#C2641A 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#F37D23", endColorstr="#C2641A",GradientType=0);\
color: white;\
font-weight: bold;\
}\
.MobileListStyle .wmlist-item {\
background: -webkit-gradient(linear, center top, center bottom, from(#F37D23), color-stop(94%,#C2641A), to(#C2641A));\
background: -moz-linear-gradient(top, #F37D23 0%,#C2641A 94%,#C2641A 100%);\
background: -o-linear-gradient(top, #F37D23 0%,#C2641A 94%,#C2641A 100%);\
background: -ms-linear-gradient(top, #F37D23 0%,#C2641A 94%,#C2641A 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#F37D23", endColorstr="#C2641A",GradientType=0);\
border-color: #febd57 !important;\
border-width: 1px 2px 2px 1px !important;\
}\
.MobileListStyle .wmlist-item.wmlist-item-selected {\
background: -webkit-gradient(linear, center top, center bottom, from(#F37D23), color-stop(10%,#C2641A), to(#C2641A));\
background: -moz-linear-gradient(top, #F37D23 0%,#C2641A 10%,#C2641A 100%);\
background: -o-linear-gradient(top, #F37D23 0%,#C2641A 10%,#C2641A 100%);\
background: -ms-linear-gradient(top, #F37D23 0%,#C2641A 10%,#C2641A 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#F37D23", endColorstr="#C2641A",GradientType=0);\
color: white !important;\
font-weight: bold;\
}\
.mblArrow {\
border-color: #6C88C7 !important;\
}\
.Page {\
background: -webkit-gradient(linear, center top, center bottom, from(#6C88C7), color-stop(20%,#B0C6F5), to(#B0C6F5));\
background: -moz-linear-gradient(top, #6C88C7 0%,#B0C6F5 20%,#B0C6F5 100%);\
background: -o-linear-gradient(top, #6C88C7 0%,#B0C6F5 20%,#B0C6F5 100%);\
background: -ms-linear-gradient(top, #6C88C7 0%,#B0C6F5 20%,#B0C6F5 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#6C88C7", endColorstr="#B0C6F5",GradientType=0);\
}\
';

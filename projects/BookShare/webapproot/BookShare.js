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
	"saveCounter": 61, 
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
		BrowseLatestResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"BrowseLatestResponse.bookshare"}, {}]
		}], 
		ISBNLookupResponse: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"ISBNLookupResponse.bookshare"}, {}]
		}], 
		BookIdLookup: ["wm.XhrDefinition", {"headers":{},"parameters":{"id":{"transmitType":"path","type":"String","bindable":true},"for":{"transmitType":"path","type":"String","bindable":true},"format":{"transmitType":"path","type":"String","bindable":true},"api_key":{"transmitType":"queryString","type":"String","bindable":true},"X-password":{"transmitType":"header","type":"String","bindable":true}},"returnType":"ISBNLookupResponse","url":"http://api.bookshare.org/book"}, {}], 
		BrowseLatest: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"String"},"limit":{"transmitType":"path","type":"String"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"http://api.bookshare.org/book"}, {}], 
		ISBNLookup: ["wm.XhrDefinition", {"headers":{},"parameters":{"isbn":{"transmitType":"path","type":"String"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"ISBNLookupResponse","url":"http://api.bookshare.org/book"}, {}]
	},
	_end: 0
});

BookShare.extend({

	_end: 0
});
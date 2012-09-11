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
	"saveCounter": 22, 
	"showIOSPhoneGapBackButton": false, 
	"studioVersion": "6.5.0.M4", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		"PopularBookList.bookshare": ["wm.TypeDefinition", {}, {}, {
			version: ["wm.TypeDefinitionField", {"fieldName":"version"}, {}],
			messages: ["wm.TypeDefinitionField", {"fieldName":"messages","fieldType":"StringData","isList":true}, {}],
			book: ["wm.TypeDefinitionField", {"fieldName":"book","fieldType":"PopularBookList.bookshare.book"}, {}]
		}], 
		"PopularBookList.bookshare.book": ["wm.TypeDefinition", {}, {}, {
			list: ["wm.TypeDefinitionField", {"fieldName":"list","fieldType":"PopularBookList.bookshare.book.list"}, {}]
		}], 
		"PopularBookList.bookshare.book.list": ["wm.TypeDefinition", {}, {}, {
			result: ["wm.TypeDefinitionField", {"fieldName":"result","fieldType":"PopularBookList.bookshare.book.list.result","isList":true}, {}],
			limit: ["wm.TypeDefinitionField", {"fieldName":"limit","fieldType":"Number"}, {}],
			numPages: ["wm.TypeDefinitionField", {"fieldName":"numPages","fieldType":"Number"}, {}],
			page: ["wm.TypeDefinitionField", {"fieldName":"page","fieldType":"Number"}, {}],
			totalResults: ["wm.TypeDefinitionField", {"fieldName":"totalResults","fieldType":"Number"}, {}]
		}], 
		"PopularBookList.bookshare.book.list.result": ["wm.TypeDefinition", {}, {}, {
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
		PopularBookList: ["wm.TypeDefinition", {}, {}, {
			bookshare: ["wm.TypeDefinitionField", {"fieldName":"bookshare","fieldType":"PopularBookList.bookshare"}, {}]
		}], 
		typeDefinition1: ["wm.TypeDefinition", {}, {}]
	},
	_end: 0
});

BookShare.extend({

	_end: 0
});
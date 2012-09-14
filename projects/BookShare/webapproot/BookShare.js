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
	"projectSubVersion": "Alpha0", 
	"projectVersion": 1, 
	"saveCounter": 160, 
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
			field2: ["wm.TypeDefinitionField", {"fieldName":"hashPass"}, {}],
			field3: ["wm.TypeDefinitionField", {"fieldName":"pass"}, {}]
		}], 
		AuthorSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"author":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		BookIdLookup: ["wm.XhrDefinition", {"headers":{},"parameters":{"id":{"transmitType":"path","type":"String","bindable":true},"for":{"transmitType":"path","type":"String","bindable":true},"format":{"transmitType":"path","type":"String","bindable":true},"api_key":{"transmitType":"queryString","type":"String","bindable":true},"X-password":{"transmitType":"header","type":"String","bindable":true}},"returnType":"ISBNLookupResponse","url":"https://api.bookshare.org/book"}, {}], 
		BrowseLatest: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/latest"}, {}], 
		BrowsePopular: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/popular"}, {}], 
		CategoryList: ["wm.XhrDefinition", {"headers":{},"parameters":{"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"CategoryListResponse","url":"https://api.bookshare.org/reference/category/list"}, {}], 
		CategorySearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"category":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		DatePublishedSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"since":{"transmitType":"path","type":"String"},"page":{"transmitType":"path","type":"Number"},"limit":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"format":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book/search"}, {}], 
		DownloadAsync: ["wm.XhrDefinition", {"headers":{},"parameters":{"content":{"transmitType":"path","type":"Number"},"version":{"transmitType":"path","type":"Number"},"for":{"transmitType":"path","type":"String"},"api_key":{"transmitType":"queryString","type":"String"},"X-password":{"transmitType":"header","type":"String"}},"returnType":"StringData","url":"https://api.bookshare.org/download"}, {}], 
		FullTextSearch: ["wm.XhrDefinition", {"headers":{},"parameters":{"searchFTS":{"transmitType":"path","type":"String","bindable":true},"page":{"transmitType":"path","type":"Number","bindable":true},"limit":{"transmitType":"path","type":"Number","bindable":true},"for":{"transmitType":"path","type":"String","bindable":true},"format":{"transmitType":"path","type":"String","bindable":true},"api_key":{"transmitType":"queryString","type":"String","bindable":true},"X-password":{"transmitType":"header","type":"String","bindable":true}},"returnType":"BrowseLatestResponse","url":"https://api.bookshare.org/book"}, {}], 
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
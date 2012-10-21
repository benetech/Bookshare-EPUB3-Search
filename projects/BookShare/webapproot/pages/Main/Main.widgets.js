Main.widgets = {
	mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Search\"},{\"name\":\"Latest\"},{\"name\":\"Popular\"},{\"name\":\"By Category\"},{\"name\":\"By Grade\"},{\"name\":\"My Downloads\"},{\"name\":\"About App\"}]","type":"EntryData"}, {}],
	searchOptionsVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Search All\",\"dataValue\":\"all\"},{\"name\":\"Search Titles\",\"dataValue\":\"title\"},{\"name\":\"Search Authors\",\"dataValue\":\"author\"}]","type":"EntryData"}, {}],
	sleeTestSvcVar01: ["wm.ServiceVariable", {"operation":"BookIdLookup","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"BookIdLookupInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"543194\"","targetProperty":"id"}, {}],
				wire1: ["wm.Wire", {"expression":"\"partnerdemo@bookshare.org\"","targetProperty":"for"}, {}],
				wire2: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire3: ["wm.Wire", {"expression":"\"rjpu85fzjfw578zcbuxws4r9\"","targetProperty":"api_key"}, {}],
				wire4: ["wm.Wire", {"expression":"\"7454739e907f5595ae61d84b8547f574\"","targetProperty":"X-password"}, {}]
			}]
		}]
	}],
	browseLatestSVar: ["wm.ServiceVariable", {"operation":"BrowseLatest","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"BrowseLatestInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}]
			}]
		}]
	}],
	browsePopularSVar: ["wm.ServiceVariable", {"operation":"BrowsePopular","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"BrowsePopularInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	authorSearchSVar: ["wm.ServiceVariable", {"operation":"AuthorSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"AuthorSearchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"searchText.dataValue","targetProperty":"author"}, {}],
				wire1: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire2: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
				wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}]
			}]
		}]
	}],
	titleSearchSVar: ["wm.ServiceVariable", {"operation":"TitleSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"TitleSearchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"searchText.dataValue","targetProperty":"title"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire5: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire6: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}]
			}]
		}]
	}],
	ftsSearchSVar: ["wm.ServiceVariable", {"operation":"FullTextSearch","service":"xhrService"}, {"onSuccess":"sharedBookListSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"FullTextSearchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"searchText.dataValue","targetProperty":"searchFTS"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire4: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire5: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
				wire6: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	categorySVar: ["wm.ServiceVariable", {"operation":"CategoryList","service":"xhrService"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layerCategory","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"CategoryListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire1: ["wm.Wire", {"expression":"50","targetProperty":"limit"}, {}],
				wire2: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}]
			}]
		}]
	}],
	categorySearchSVar: ["wm.ServiceVariable", {"operation":"CategorySearch","service":"xhrService"}, {"onSuccess":"bookListNavCall","onSuccess1":"bookListLayer","onSuccess2":"sharedBookListSVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"bookListLayer","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"CategorySearchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
				wire2: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"categoryList.selectedItem.name","targetProperty":"category"}, {}]
			}]
		}]
	}],
	bookListNavCall: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BookList\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"bookListPageContainer","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	gradeListSVar: ["wm.ServiceVariable", {"operation":"GradeList","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"GradeListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire2: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}]
			}]
		}]
	}],
	gradeSearchSVar: ["wm.ServiceVariable", {"operation":"GradeSearch","service":"xhrService"}, {"onSuccess":"bookListNavCall","onSuccess1":"bookListLayer","onSuccess2":"sharedBookListSVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"GradeList","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"GradeSearchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}],
				wire1: ["wm.Wire", {"expression":"25","targetProperty":"limit"}, {}],
				wire2: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"GradeList.selectedItem.name","targetProperty":"grade"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["Page"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		headerPanel: ["wm.Panel", {"_classes":{"domNode":["HeaderPanel"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			backButton: ["wm.MobileIconButton", {"border":"0","desktopHeight":"36px","direction":"back","height":"46px","margin":"4,24,4,4","mobileHeight":"46px","showing":false,"source":"resources/images/logos/Android/wavemaker_36x36.png","width":"90px"}, {"onclick":"app._onBack"}],
			logo: ["wm.Picture", {"height":"100%","source":"resources/images/logos/bookshare_48.png","styles":{},"width":"100%"}, {}]
		}],
		layers1: ["wm.Layers", {"defaultLayer":0,"minDesktopHeight":280,"minHeight":280,"styles":{"backgroundColor":""}}, {"onchange":"layers1Change"}, {
			layerLogin: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				loginPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#FEBD57","deferLoad":true,"margin":"6","pageName":"Login","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			homeLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle","MainContent"]},"border":"6","borderColor":"#febd57","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"","mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":" ${name} \n","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","manageHistory":false,"margin":"6","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false,"styles":{"backgroundColor":"#ffffff"}}, {"onSelect":"mainMenuListSelect","onSelect1":"mainMenuList.deselectAll"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuVar","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			searchLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel2: ["wm.Panel", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"6","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
					formPanel1: ["wm.FormPanel", {"height":"100%"}, {}, {
						searchLabel: ["wm.Label", {"align":"center","caption":"Enter a search and then select button below","padding":"4","singleLine":false,"width":"100%"}, {}],
						searchText: ["wm.Text", {"caption":"Search","captionSize":"120px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","placeHolder":"Enter Search","width":"100%"}, {"onEnterKeyPress":"bookListLayer","onEnterKeyPress1":"ftsSearchSVar","onEnterKeyPress2":"updateSearchListLabel"}],
						searchOptionsList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","manageHistory":false,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"bookListLayer","onSelect1":"searchOptionsListSelect1","onSelect2":"searchOptionsList.deselectAll","onShow":"searchOptionsList.selectAll"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"searchOptionsVar","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":"!${searchText.dataValue}","targetProperty":"disabled"}, {}]
							}]
						}]
					}]
				}]
			}],
			bookListLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				bookListPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","deferLoad":true,"listLabelCaption":"","margin":"6","pageName":"BookList","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{"onList1Select":"bookList.onSelect"},"subpageMethodlist":{},"subpageProplist":{"bookListDataSet":"bookList.dataSet","bookListSelectedItem":"bookList.selectedItem","listLabelCaption":"listLabel.caption","listLabelShowing":"listLabel.showing"}}, {"onList1Select":"bookDetailsLayer"}]
			}],
			bookDetailsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				bookDetailsPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#FEBD57","deferLoad":true,"margin":"6","pageName":"BookDetails","styles":{"backgroundColor":""},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{"bookDetailsDataSetDataSet":"bookDetailsDataSet.dataSet"}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"bookListPageContainer.bookListSelectedItem","targetProperty":"bookDetailsDataSetDataSet"}, {}]
					}]
				}]
			}],
			layerCategory: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				categoryList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>\" + ${name} + \"</div>\"\n","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","manageHistory":false,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"categorySearchSVar"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"categorySVar.bookshare.category.result","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			layerAbout: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				aboutPageContainer: ["wm.PageContainer", {"_classes":{"domNode":["MainContent"]},"border":"6","borderColor":"#febd57","deferLoad":true,"margin":"6","pageName":"About","styles":{"backgroundColor":"#ffffff"},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			layerGrade: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				GradeList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" + ${name} + \"</div>\"\n","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","manageHistory":false,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"gradeSearchSVar"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"gradeListSVar.bookshare.grade.result","targetProperty":"dataSet"}, {}]
					}]
				}]
			}]
		}],
		panel1: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,2,2,2","verticalAlign":"middle","width":"100%"}, {}, {
			label1: ["wm.Label", {"caption":"&copy;2012 Benetech.","height":"16px","padding":"0","singleLine":false,"styles":{"fontSize":"9px"},"width":"156px"}, {}],
			spacer1: ["wm.Spacer", {"height":"48px","width":"100%"}, {}]
		}]
	}]
}
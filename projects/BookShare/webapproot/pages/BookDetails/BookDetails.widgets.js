BookDetails.widgets = {
	bookDetailsDataSet: ["wm.Variable", {"json":"{\"author\":[{\"dataValue\":\"Elizabeth Wood\"},{\"dataValue\":\"Justine Howard\"},{\"dataValue\":\"Pat Broadhead\"}],\"availableToDownload\":0,\"bookshareId\":\"548376\",\"briefSynopsis\":\"Providing high quality play experiences is an essential part of good early years education, but this can pose a challenge for practitioners who face pressure from a more didactic primary curriculum, and from parents worried that their children will \",\"category\":[{\"dataValue\":\"Nonfiction\"}],\"completeSynopsis\":\"Providing high quality play experiences is an essential part of good early years education, but this can pose a challenge for practitioners who face pressure from a more didactic primary curriculum, and from parents worried that their children will fail to acquire essential skills and knowledge.  By helping the reader to develop their understanding of the complex relationships between play and learning, this book examines current theoretical perspectives on play, alongside examples of recent and innovative play research from a range of disciplinary and methodological perspectives.  With contributions from leading play scholars, it brings together theory, research, policy and practice in relation to play and learning in early years settings.  The emphasis is on the relationship between play and learning, and play and pedagogy, and the need to understand these dimensions more substantially in order to teach with confidence.  Included are chapters on: - the influence of play on thinking, problem-solving and creativity - cooperative play and learning - play, risk and outdoor learning - learning to play in cultural context There are chapter objectives, reflective points, reflective tasks and suggestions for further reading throughout, to facilitate critical thinking and encourage independent study.  Suitable for early years practitioners, early childhood students at undergraduate and postgraduate levels, and all those who work with and care for young children, this is an exciting and thought-provoking book.\",\"contentId\":548376,\"copyright\":\"2010\",\"downloadFormat\":[{\"dataValue\":\"BRF\"},{\"dataValue\":\"DAISY\"}],\"dtbookSize\":928926,\"freelyAvailable\":0,\"images\":1,\"isbn13\":\"9781446244333\",\"language\":[{\"dataValue\":\"English US\"}],\"publishDate\":\"09122012\",\"publisher\":\"SAGE Press\",\"quality\":\"Publisher Quality\",\"title\":\"Play and Learning in the Early Years\"}","type":"BrowseLatestResponse.bookshare.book.list.result"}, {"onSetData":"bookDetailsDataSetSetData"}],
	bookDetailsDataSetDataSet: ["wm.Property", {"bindSource":undefined,"bindTarget":1,"property":"bookDetailsDataSet.dataSet","type":"BrowseLatestResponse.bookshare.book.list.result"}, {}],
	bookDetailsSVar: ["wm.ServiceVariable", {"operation":"BookIdLookup","service":"xhrService"}, {"onSuccess":"bookDetailsSVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"BookIdLookupInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsDataSet.id","targetProperty":"id"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire3: ["wm.Wire", {"expression":"\"json\"","targetProperty":"format"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}]
			}]
		}]
	}],
	downloadSVar: ["wm.ServiceVariable", {"operation":"DownloadAsync","service":"xhrService"}, {"onSuccess":"downloadsLayer"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"formPanel","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"DownloadAsyncInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.contentId","targetProperty":"content"}, {}],
				wire1: ["wm.Wire", {"expression":"3","targetProperty":"version"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUser.email","targetProperty":"for"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUser.hashPass","targetProperty":"X-password"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varAPIKey.dataValue","targetProperty":"api_key"}, {}]
			}]
		}]
	}],
	notifyDownloadSuccess: ["wm.NotificationCall", {"operation":"confirm"}, {"onClose":"notifyDownloadSuccessClose"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"View Queue\"","targetProperty":"OKButtonText"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Continue Browsing\"","targetProperty":"CancelButtonText"}, {}],
				wire: ["wm.Wire", {"expression":"\"<div role='alertdialog'>Your book has been added to your queue</div>\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	downloadMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Goto downloads\",\"dataValue\":\"downloads\"},{\"name\":\"Find more books\",\"dataValue\":\"home\"},{\"name\":\"Return to book description\",\"dataValue\":\"book\"}]","type":"EntryData"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"_classes":{"domNode":["BookHeaderPanel"]},"fitToContentHeight":true,"height":"62px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			titleLabel: ["wm.Label", {"autoSizeHeight":true,"height":"20px","minDesktopHeight":20,"minHeight":20,"padding":"4","singleLine":false,"width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.title","targetProperty":"caption"}, {}]
				}]
			}],
			bookDownloadButton: ["wm.Button", {"caption":"Download","height":"100%","margin":"8","minHeight":60,"minMobileHeight":60,"width":"100px"}, {"onclick":"downloadSVar"}]
		}],
		layers: ["wm.Layers", {"manageHistory":false}, {}, {
			mainLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"mainLayerShow"}, {
				formPanel: ["wm.FormPanel", {"captionAlign":"left","captionSize":"100px","height":"100%"}, {}, {
					panel2: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label1: ["wm.Label", {"caption":"Author","padding":"4,4,4,0","styles":{"fontWeight":"bold"},"width":"100px"}, {}],
							authorListLabel: ["wm.Label", {"autoSizeHeight":true,"display":"Array","height":"8px","padding":"4","singleLine":false,"width":"100%"}, {}, {
								format: ["wm.ArrayFormatter", {}, {}],
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.author","targetProperty":"caption"}, {}]
								}]
							}]
						}],
						qualityEditor1: ["wm.Text", {"caption":"Quality","captionAlign":"left","changeOnKey":true,"displayValue":"","emptyValue":"emptyString","enableTouchHeight":false,"height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.quality","targetProperty":"dataValue"}, {}]
							}]
						}],
						publisherEditor1: ["wm.Text", {"caption":"Publisher","captionAlign":"left","changeOnKey":true,"displayValue":"","emptyValue":"emptyString","enableTouchHeight":false,"height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.publisher","targetProperty":"dataValue"}, {}]
							}]
						}],
						publishDateEditor1: ["wm.Text", {"caption":"Published","captionAlign":"left","changeOnKey":true,"displayValue":"//","emptyValue":"emptyString","enableTouchHeight":false,"formatter":undefined,"height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${bookDetailsSVar.publishDate}.substr(0,2) + \"/\" + ${bookDetailsSVar.publishDate}.substr(2,2) + \"/\" + ${bookDetailsSVar.publishDate}.substr(4)","targetProperty":"dataValue"}, {}]
							}]
						}],
						panel4: ["wm.Panel", {"fitToContentHeight":true,"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label2: ["wm.Label", {"caption":"Formats","padding":"4,4,4,0","styles":{"fontWeight":"bold"},"width":"100px"}, {}],
							authorListLabel1: ["wm.Label", {"autoSizeHeight":true,"display":"Array","height":"8px","padding":"4","singleLine":false,"width":"100%"}, {}, {
								format: ["wm.ArrayFormatter", {}, {}],
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.downloadFormat","targetProperty":"caption"}, {}]
								}]
							}]
						}],
						completeSynopsisEditor1: ["wm.Text", {"autoSizeHeight":true,"caption":"Synopsis","captionAlign":"left","captionPosition":"top","captionSize":"16px","changeOnKey":true,"displayValue":"","emptyValue":"emptyString","enableTouchHeight":false,"height":"35px","maxHeight":100000,"readonly":true,"required":undefined,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"bookDetailsSVar.bookshare.book.metadata.completeSynopsis","targetProperty":"dataValue"}, {}]
							}]
						}]
					}]
				}]
			}],
			downloadsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				successLabel: ["wm.Label", {"align":"center","ariaRole":"alert","caption":"Your book has been added to your queue","height":"32px","padding":"4","width":"100%"}, {"onShow":"successLabelShow"}],
				downloadMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"downloadMenuListSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"downloadMenuVar","targetProperty":"dataSet"}, {}]
					}]
				}]
			}]
		}]
	}]
}
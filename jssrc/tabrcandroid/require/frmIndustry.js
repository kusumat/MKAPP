define("frmIndustry", function() {
    return function(controller) {
        function addWidgetsfrmIndustry() {
            this.setDefaultUnit(voltmx.flex.DP);
            var TopHead = new com.ohio.lmi.TopHead({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "80dp",
                "id": "TopHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA",
                "overrides": {
                    "TopHead": {
                        "height": "80dp",
                        "top": "0dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flexScrollSub = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flexScrollSub",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0i0f6499d16754b",
                "top": "80dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flexScrollSub.setDefaultUnit(voltmx.flex.DP);
            var flexBHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flexBHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0j208bc864c634b",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            flexBHeader.setDefaultUnit(voltmx.flex.DP);
            var headerContainer08 = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "headerContainer08",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "headerContainerSknMaster0e3f4193681f04a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            headerContainer08.setDefaultUnit(voltmx.flex.DP);
            var headerTitleLabel = new voltmx.ui.Label({
                "centerX": "49%",
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "40dp",
                "skin": "headerTitleSkinMaster0cecc3450ea3741",
                "text": "INDUSTRY PAYROLL JOBS",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerIconLeft = new voltmx.ui.Label({
                "height": "100%",
                "id": "headerIconLeft",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin0fc84a4c2d1e142",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Home = new voltmx.ui.Label({
                "height": "100%",
                "id": "Home",
                "isVisible": true,
                "right": 12,
                "skin": "CopyslFontAwesomeIcon0h125f4880b5240",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerButtonLeft = new voltmx.ui.Button({
                "focusSkin": "headerIconCartSkin0df4352f865354c",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "skin": "headerButtonBackSkin0ce66cff1fbd643",
                "text": "Back",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnHome = new voltmx.ui.Button({
                "focusSkin": "headerIconCartSkin0df4352f865354c",
                "height": "100%",
                "id": "btnHome",
                "isVisible": true,
                "right": 10,
                "skin": "headerButtonClearSkin0g5e3a1b762a44c",
                "text": "home",
                "top": "0dp",
                "width": "36dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer08.add(headerTitleLabel, headerIconLeft, Home, headerButtonLeft, btnHome);
            flexBHeader.add(headerContainer08);
            voltmx.mvc.registry.add('flexSegSub0b8d940e5ed104f', 'flexSegSub0b8d940e5ed104f', 'flexSegSub0b8d940e5ed104fController');
            var segSubIndustry = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }, {
                    "lblSeg": "SUBSECTION"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segSubIndustry",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_c4c74aefc3dc4d23b4b9d2b9189cfda6,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg0b42d52f91c5e48",
                "rowSkin": "seg0dc1d513dca114c",
                "rowTemplate": "flexSegSub0b8d940e5ed104f",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader0a1bb82afe7744d",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblSeg": "lblSeg"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexScrollSub.add(flexBHeader, segSubIndustry);
            var Foot = new com.ohio.lmi.foot.Foot({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "height": "50dp",
                "id": "Foot",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA",
                "overrides": {
                    "Foot": {
                        "bottom": "0dp",
                        "height": "50dp",
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(TopHead, flexScrollSub, Foot);
        };
        return [{
            "addWidgets": addWidgetsfrmIndustry,
            "enabledForIdleTimeout": false,
            "id": "frmIndustry",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "appName": "OhioLMIKRA"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});
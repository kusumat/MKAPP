define("frmLabor", function() {
    return function(controller) {
        function addWidgetsfrmLabor() {
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
                "bottom": 0,
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
                "skin": "CopyslFSbox0h00804f6642b40",
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
                "skin": "CopyslFbox0bcc1b0b8e2844f",
                "top": "0px",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            flexBHeader.setDefaultUnit(voltmx.flex.DP);
            var CopyheaderContainer0de23bb138f074d = new voltmx.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "CopyheaderContainer0de23bb138f074d",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "headerContainerSknMaster0ad298f148f8f4d",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            CopyheaderContainer0de23bb138f074d.setDefaultUnit(voltmx.flex.DP);
            var CopyheaderTitleLabel0i8548c57a0d849 = new voltmx.ui.Label({
                "centerX": "49%",
                "height": "100%",
                "id": "CopyheaderTitleLabel0i8548c57a0d849",
                "isVisible": true,
                "left": "40dp",
                "skin": "headerTitleSkinMaster0i94b8aa3421340",
                "text": "Labor Force",
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
            var CopyheaderIconLeft0h7f6b490a0d547 = new voltmx.ui.Label({
                "height": "100%",
                "id": "CopyheaderIconLeft0h7f6b490a0d547",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin0cc440b0e4a334c",
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
            var CopyHome0g1e3bc66dc1d4b = new voltmx.ui.Label({
                "height": "100%",
                "id": "CopyHome0g1e3bc66dc1d4b",
                "isVisible": true,
                "right": 12,
                "skin": "CopyslFontAwesomeIcon0aaaa2ce40ae940",
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
            var CopyheaderButtonLeft0gea84696406e46 = new voltmx.ui.Button({
                "focusSkin": "headerIconCartSkin0e26ed8b9847347",
                "height": "100%",
                "id": "CopyheaderButtonLeft0gea84696406e46",
                "isVisible": true,
                "left": "0dp",
                "skin": "headerButtonBackSkin0d15b7aeac27c4f",
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
            var CopybtnHome0c6ccabce02084b = new voltmx.ui.Button({
                "focusSkin": "headerIconCartSkin0e26ed8b9847347",
                "height": "100%",
                "id": "CopybtnHome0c6ccabce02084b",
                "isVisible": true,
                "right": 10,
                "skin": "headerButtonClearSkin0fdb40747836d41",
                "text": "home",
                "top": "0dp",
                "width": "36dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyheaderContainer0de23bb138f074d.add(CopyheaderTitleLabel0i8548c57a0d849, CopyheaderIconLeft0h7f6b490a0d547, CopyHome0g1e3bc66dc1d4b, CopyheaderButtonLeft0gea84696406e46, CopybtnHome0c6ccabce02084b);
            flexBHeader.add(CopyheaderContainer0de23bb138f074d);
            voltmx.mvc.registry.add('CopyflexSegSub0da820a0605274d', 'CopyflexSegSub0da820a0605274d', 'CopyflexSegSub0da820a0605274dController');
            var segSub = new voltmx.ui.SegmentedUI2({
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
                }],
                "groupCells": false,
                "height": "83%",
                "id": "segSub",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_a38a213452f041c5b284f1410dbc1817,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg0e3e2484463bf4b",
                "rowSkin": "seg0b1ad0bfaedbd46",
                "rowTemplate": "CopyflexSegSub0da820a0605274d",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader0h4bde2fc62d64f",
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
            flexScrollSub.add(flexBHeader, segSub);
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
            "addWidgets": addWidgetsfrmLabor,
            "enabledForIdleTimeout": false,
            "id": "frmLabor",
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
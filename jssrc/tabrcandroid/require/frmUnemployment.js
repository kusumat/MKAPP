define("frmUnemployment", function() {
    return function(controller) {
        function addWidgetsfrmUnemployment() {
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
                "skin": "CopyslFSbox0d5a5d285e06046",
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
                "skin": "CopyslFbox0j7217677fa8a4b",
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
                "height": "56dp",
                "id": "headerContainer08",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "headerContainerSknMaster0d1c4f4a09a1841",
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
                "skin": "headerTitleSkinMaster0d49563d4142242",
                "text": "UNEMPLOYMENT RATE",
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
                "skin": "headerBackIconSkin0ce4a34b4ab6a4e",
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
                "skin": "CopyslFontAwesomeIcon0ba104dee434740",
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
                "focusSkin": "headerIconCartSkin0eebcef0c10df4a",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "skin": "headerButtonBackSkin0ie22dcb904474a",
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
                "focusSkin": "headerIconCartSkin0eebcef0c10df4a",
                "height": "100%",
                "id": "btnHome",
                "isVisible": true,
                "right": 10,
                "skin": "headerButtonClearSkin0e7202a86ab4e48",
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
            voltmx.mvc.registry.add('flexSegment', 'flexSegment', 'flexSegmentController');
            var segCounty = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblSeg": "MainSection"
                }, {
                    "lblSeg": "MainSection"
                }, {
                    "lblSeg": "MainSection"
                }, {
                    "lblSeg": "MainSection"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segCounty",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_da881188cc1540879660321166ab0642,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg0d20613d99f3446",
                "rowSkin": "seg0fd1fbadc0f6043",
                "rowTemplate": "flexSegment",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader0ea1c9f772c644e",
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
            flexScrollSub.add(flexBHeader, segCounty);
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
            "addWidgets": addWidgetsfrmUnemployment,
            "enabledForIdleTimeout": false,
            "id": "frmUnemployment",
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
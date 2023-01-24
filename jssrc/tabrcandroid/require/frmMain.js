define("frmMain", function() {
    return function(controller) {
        function addWidgetsfrmMain() {
            this.setDefaultUnit(voltmx.flex.DP);
            var MainHead = new com.ohio.lmi.MainHead({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "40dp",
                "id": "MainHead",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA",
                "overrides": {
                    "MainHead": {
                        "height": "40dp",
                        "top": "0dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flexScroll = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flexScroll",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "slFSbox0i11a8aa6118e42",
                "top": "40dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flexScroll.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('FBox0d2b4dfcdbd5e48', 'FBox0d2b4dfcdbd5e48', 'FBox0d2b4dfcdbd5e48Controller');
            var segFrm = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblSeg": "LABOR FORCE"
                }, {
                    "lblSeg": "UNEMPLOYMENT"
                }, {
                    "lblSeg": "INDUSTRY JOBS"
                }, {
                    "lblSeg": "SUBSTATE ECONOMY"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segFrm",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_ieadc85f33c34e58887fb598c7fa2389,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg0aa4a8fb45cdf41",
                "rowSkin": "seg0b1ad0bfaedbd46s",
                "rowTemplate": "FBox0d2b4dfcdbd5e48",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader0fccab335cf8d4b",
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
                "widgetSkin": "Copyseg0e457d848ab8b41",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            flexScroll.add(segFrm);
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
            this.add(MainHead, flexScroll, Foot);
        };
        return [{
            "addWidgets": addWidgetsfrmMain,
            "enabledForIdleTimeout": false,
            "id": "frmMain",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_de63d56cbdfa468a80b81250eb95757a,
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
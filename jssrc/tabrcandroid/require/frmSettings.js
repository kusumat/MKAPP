define("frmSettings", function() {
    return function(controller) {
        function addWidgetsfrmSettings() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flexScrollSub = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flexScrollSub",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "3dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0i44ba503ad9242",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flexScrollSub.setDefaultUnit(voltmx.flex.DP);
            var Label0f78da73dbfbb45 = new voltmx.ui.Label({
                "id": "Label0f78da73dbfbb45",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0e3f30c6ed55c41",
                "text": "Push Notification when Data Changes",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "184dp",
                "width": "99.99%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var SwitchPushNotification = new voltmx.ui.Switch({
                "centerX": "50.01%",
                "height": "32dp",
                "id": "SwitchPushNotification",
                "isVisible": true,
                "leftSideText": "ON",
                "onSlide": controller.AS_Switch_abdfb4e10dcc430183ec4e82159d8b8b,
                "rightSideText": "OFF",
                "selectedIndex": 1,
                "skin": "defSwitchNormal",
                "top": "220dp",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexScrollSub.add(Label0f78da73dbfbb45, SwitchPushNotification);
            var flexBHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flexBHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0f51b907fe1064c",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            flexBHeader.setDefaultUnit(voltmx.flex.DP);
            var headerAboutTitleLabel = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "headerAboutTitleLabel",
                "isVisible": true,
                "left": "20dp",
                "right": "50dp",
                "skin": "CopyheaderTitleSkinMaster0e4cbde69fca247",
                "text": "Settings",
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
            var CloseSettings = new voltmx.ui.Label({
                "height": "100%",
                "id": "CloseSettings",
                "isVisible": true,
                "onTouchStart": controller.AS_Label_i34df7312ae44b8186d923c3f4dd777b,
                "right": "0dp",
                "skin": "CopyslFontAwesomeIcon0b805308eaf974c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "36dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flexBHeader.add(headerAboutTitleLabel, CloseSettings);
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
                    "Gear": {
                        "isVisible": false
                    },
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
            this.add(flexScrollSub, flexBHeader, MainHead, Foot);
        };
        return [{
            "addWidgets": addWidgetsfrmSettings,
            "enabledForIdleTimeout": false,
            "id": "frmSettings",
            "init": controller.AS_Form_fdb0a5f73a99403d9c06e65f685d8da7,
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
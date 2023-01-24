define("frmBrowser", function() {
    return function(controller) {
        function addWidgetsfrmBrowser() {
            this.setDefaultUnit(voltmx.flex.DP);
            var Head = new com.ohio.lmi.Head({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "Head",
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
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flexScrollSub = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
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
                "skin": "CopyslFSbox0a7ad704f225a4c",
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
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0fc73eaac84a941",
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
                "skin": "CopyheaderContainerSknMaster5",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            headerContainer08.setDefaultUnit(voltmx.flex.DP);
            var headerTitleLabel = new voltmx.ui.Label({
                "centerX": "55%",
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "80dp",
                "right": "80%",
                "skin": "CopyheaderTitleSkinMaster5",
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
                "skin": "CopyheaderBackIconSkin5",
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
            var Gear = new voltmx.ui.Label({
                "height": "100%",
                "id": "Gear",
                "isVisible": true,
                "right": "10dp",
                "skin": "CopyCopyslFontAwesomeIcon0f25d23eb831b43",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
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
                "left": "40dp",
                "skin": "CopyCopyslFontAwesomeIcon0c447357e8d4347",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerButtonLeft = new voltmx.ui.Button({
                "focusSkin": "CopyheaderIconCartSkin4",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_ea013db5192b4405917f0c49461389d4,
                "skin": "CopyheaderButtonBackSkin4",
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
            var headerButtonRight = new voltmx.ui.Button({
                "focusSkin": "CopyheaderIconCartSkin4",
                "height": "100%",
                "id": "headerButtonRight",
                "isVisible": true,
                "onClick": controller.AS_Button_ea3e6b8ee83e4212b791e5f2339b87cb,
                "right": "0dp",
                "skin": "CopyheaderButtonClearSkin4",
                "text": "Settings",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnHome = new voltmx.ui.Button({
                "focusSkin": "CopyheaderIconCartSkin4",
                "height": "100%",
                "id": "btnHome",
                "isVisible": true,
                "left": 37,
                "onClick": controller.AS_Button_d1952297dcb445a1b65a2766a784bf9f,
                "right": "100dp",
                "skin": "CopyheaderButtonClearSkin4",
                "text": "home",
                "top": "0dp",
                "width": "34dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [15, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer08.add(headerTitleLabel, headerIconLeft, Gear, Home, headerButtonLeft, headerButtonRight, btnHome);
            flexBHeader.add(headerContainer08);
            var brwWidget = new voltmx.ui.Browser({
                "detectTelNumber": false,
                "enableZoom": false,
                "height": "100%",
                "htmlString": "Browser",
                "id": "brwWidget",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "onFailure": controller.AS_Browser_i01e63c2b77d4760be0377c528dd1d5d,
                "top": "0dp",
                "width": "100.00%",
                "zIndex": 1
            }, {}, {});
            flexScrollSub.add(flexBHeader, brwWidget);
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
            this.add(Head, flexScrollSub, Foot);
        };
        return [{
            "addWidgets": addWidgetsfrmBrowser,
            "enabledForIdleTimeout": false,
            "id": "frmBrowser",
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
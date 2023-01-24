define("frmAbout", function() {
    return function(controller) {
        function addWidgetsfrmAbout() {
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
                "skin": "CopyslFSbox0f5bb20ace74d4e",
                "top": "120dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flexScrollSub.setDefaultUnit(voltmx.flex.DP);
            var FlexContainerTitle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "FlexContainerTitle",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0d7eb0d1023d247",
                "top": "40dp",
                "width": "99.55%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerTitle.setDefaultUnit(voltmx.flex.DP);
            var lblText = new voltmx.ui.Label({
                "id": "lblText",
                "isVisible": true,
                "left": "25dp",
                "maxNumberOfLines": null,
                "skin": "CopydefLabel0c7782ecbb80041",
                "text": "Total Private: All Employees Average Weekly Earnings",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "25dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainerTitle.add(lblText);
            var FlexContainerSource = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "FlexContainerSource",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0d7eb0d1023d247",
                "top": "120dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerSource.setDefaultUnit(voltmx.flex.DP);
            var CopylblText0ae470d7d5c434f = new voltmx.ui.Label({
                "id": "CopylblText0ae470d7d5c434f",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopydefLabel0eebf29b947be4e",
                "text": "Source",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSource = new voltmx.ui.Label({
                "id": "lblSource",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopydefLabel0fabe5b6cbdb241",
                "text": "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "45dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainerSource.add(CopylblText0ae470d7d5c434f, lblSource);
            var FlexContainerRawData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "FlexContainerRawData",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0d7eb0d1023d247",
                "top": "200dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerRawData.setDefaultUnit(voltmx.flex.DP);
            var CopylblText0ac40ed76fd124d = new voltmx.ui.Label({
                "id": "CopylblText0ac40ed76fd124d",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopydefLabel0eebf29b947be4e",
                "text": "Raw Data",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var HyperLinkButton = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60.00%",
                "id": "HyperLinkButton",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "25dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0aa200442f53e49",
                "top": "34dp",
                "width": "90.67%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            HyperLinkButton.setDefaultUnit(voltmx.flex.DP);
            var AboutButtonLink = new voltmx.ui.Button({
                "focusSkin": "ButtonLinkFocusSkin0ea0533c728bf47",
                "height": "72.22%",
                "id": "AboutButtonLink",
                "isVisible": true,
                "left": "2dp",
                "onClick": controller.AS_Button_cb09390c30474315b444bf2e2aa693ef,
                "skin": "CopyFooterButtonLink0ic333998f0bf42",
                "text": "Download",
                "top": "10dp",
                "width": "46.08%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            HyperLinkButton.add(AboutButtonLink);
            FlexContainerRawData.add(CopylblText0ac40ed76fd124d, HyperLinkButton);
            var FlexContainerEmpty = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "FlexContainerEmpty",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0d7eb0d1023d247",
                "top": "300dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainerEmpty.setDefaultUnit(voltmx.flex.DP);
            var CopylblText0j8494369bab44d = new voltmx.ui.Label({
                "id": "CopylblText0j8494369bab44d",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopydefLabel0eebf29b947be4e",
                "text": "LMI Home Page",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": voltmx.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LinkHomepage = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "43.75%",
                "id": "LinkHomepage",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "25dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0aa200442f53e49",
                "top": "35dp",
                "width": "90.67%",
                "zIndex": 1,
                "appName": "OhioLMIKRA"
            }, {
                "paddingInPixel": false
            }, {});
            LinkHomepage.setDefaultUnit(voltmx.flex.DP);
            var lnkHome = new voltmx.ui.Button({
                "bottom": 5,
                "focusSkin": "lnkHomeFocusSkin0b6ef61d64b5c4d",
                "id": "lnkHome",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_da184cec1c42466aac59a65061787ed8,
                "right": "15dp",
                "skin": "lnkHomeFocusSkin0b6ef61d64b5c4d",
                "text": "https://ohiolmi.com",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            LinkHomepage.add(lnkHome);
            FlexContainerEmpty.add(CopylblText0j8494369bab44d, LinkHomepage);
            flexScrollSub.add(FlexContainerTitle, FlexContainerSource, FlexContainerRawData, FlexContainerEmpty);
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
                "skin": "CopyslFbox0j4b940b745764b",
                "top": "80dp",
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
                "skin": "headerTitleSkinMaster0b30d401ff90f41",
                "text": "About",
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
            var RemoveItem = new voltmx.ui.Label({
                "height": "100%",
                "id": "RemoveItem",
                "isVisible": true,
                "right": "0dp",
                "skin": "CopyslFontAwesomeIcon0jd39568f83464b",
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
            flexBHeader.add(headerAboutTitleLabel, RemoveItem);
            var Foot = new com.ohio.lmi.foot.Foot({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 0,
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
                        "bottom": 0,
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
            this.add(TopHead, flexScrollSub, flexBHeader, Foot);
        };
        return [{
            "addWidgets": addWidgetsfrmAbout,
            "enabledForIdleTimeout": false,
            "id": "frmAbout",
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
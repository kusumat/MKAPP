define(function() {
    return function(controller) {
        var Foot = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Foot",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "Foot"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Foot"), extendConfig({}, controller.args[2], "Foot"));
        Foot.setDefaultUnit(voltmx.flex.DP);
        var flexFooter = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flexFooter",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0a3c7670b916f4e",
            "top": "0",
            "width": "100%",
            "appName": "OhioLMIKRA"
        }, controller.args[0], "flexFooter"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flexFooter"), extendConfig({}, controller.args[2], "flexFooter"));
        flexFooter.setDefaultUnit(voltmx.flex.DP);
        var FooterHyperLinkButton = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "FooterHyperLinkButton",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "FooterLink",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "FooterHyperLinkButton"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FooterHyperLinkButton"), extendConfig({}, controller.args[2], "FooterHyperLinkButton"));
        FooterHyperLinkButton.setDefaultUnit(voltmx.flex.DP);
        var ButtonLink = new voltmx.ui.Button(extendConfig({
            "bottom": "100%",
            "centerX": "49.96%",
            "centerY": "50.32%",
            "focusSkin": "ButtonLinkFocusSkin",
            "id": "ButtonLink",
            "isVisible": true,
            "left": "120dp",
            "onClick": controller.AS_Button_g030f3b16fd649fea50db66e17cc3501,
            "right": "0dp",
            "skin": "ButtonLinkNormalSkin",
            "text": "Contact Us",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "ButtonLink"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ButtonLink"), extendConfig({}, controller.args[2], "ButtonLink"));
        var btnVersion = new voltmx.ui.Button(extendConfig({
            "bottom": "100%",
            "centerY": "50.32%",
            "focusSkin": "ButtonLinkFocusSkin",
            "id": "btnVersion",
            "isVisible": true,
            "right": "10dp",
            "skin": "ButtonLinkNormalSkin",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnVersion"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVersion"), extendConfig({}, controller.args[2], "btnVersion"));
        FooterHyperLinkButton.add(ButtonLink, btnVersion);
        flexFooter.add(FooterHyperLinkButton);
        Foot.add(flexFooter);
        return Foot;
    }
})
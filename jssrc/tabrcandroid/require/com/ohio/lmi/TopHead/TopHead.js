define(function() {
    return function(controller) {
        var TopHead = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "TopHead",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "TopHead"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "TopHead"), extendConfig({}, controller.args[2], "TopHead"));
        TopHead.setDefaultUnit(voltmx.flex.DP);
        var TopHeadTiltle = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "TopHeadTiltle",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0d2dad2359a974d",
            "top": "0",
            "width": "100%",
            "appName": "OhioLMIKRA"
        }, controller.args[0], "TopHeadTiltle"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "TopHeadTiltle"), extendConfig({}, controller.args[2], "TopHeadTiltle"));
        TopHeadTiltle.setDefaultUnit(voltmx.flex.DP);
        var lblHead = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopydefLabel0d3a38ab1860447",
            "text": "Ohio Labor Market Information",
            "textStyle": {},
            "top": 0,
            "width": voltmx.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHead"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHead"));
        TopHeadTiltle.add(lblHead);
        var TopHeadToolbar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "TopHeadToolbar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0a49c8633f3bc45",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "TopHeadToolbar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "TopHeadToolbar"), extendConfig({}, controller.args[2], "TopHeadToolbar"));
        TopHeadToolbar.setDefaultUnit(voltmx.flex.DP);
        var topHeaderContainerBar = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "topHeaderContainerBar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "CopyheaderContainerSknMaster4",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "topHeaderContainerBar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "topHeaderContainerBar"), extendConfig({}, controller.args[2], "topHeaderContainerBar"));
        topHeaderContainerBar.setDefaultUnit(voltmx.flex.DP);
        var headerTitleLabel = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "headerTitleLabel",
            "isVisible": true,
            "left": "80dp",
            "right": "80%",
            "skin": "CopyheaderTitleSkinMaster4",
            "text": "Title",
            "textStyle": {},
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "headerTitleLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "headerTitleLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "headerTitleLabel"));
        var headerIconLeft = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "headerIconLeft",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_Label_c7deb0577b1b4dc2bb408c7af6247aca,
            "skin": "CopyheaderBackIconSkin4",
            "text": "",
            "textStyle": {},
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "headerIconLeft"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "headerIconLeft"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "headerIconLeft"));
        var Home = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "Home",
            "isVisible": true,
            "left": "37dp",
            "onTouchStart": controller.AS_Label_ec84c422bb6e46a495f2131dfe7bbf95,
            "skin": "CopyCopyslFontAwesomeIcon5",
            "text": "",
            "textStyle": {},
            "top": "0%",
            "width": "34dp",
            "zIndex": 1
        }, controller.args[0], "Home"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Home"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "Home"));
        topHeaderContainerBar.add(headerTitleLabel, headerIconLeft, Home);
        TopHeadToolbar.add(topHeaderContainerBar);
        TopHead.add(TopHeadTiltle, TopHeadToolbar);
        return TopHead;
    }
})
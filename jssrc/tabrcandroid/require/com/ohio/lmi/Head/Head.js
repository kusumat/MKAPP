define(function() {
    return function(controller) {
        var Head = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Head",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "Head"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Head"), extendConfig({}, controller.args[2], "Head"));
        Head.setDefaultUnit(voltmx.flex.DP);
        var flexHead = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flexHead",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0c34b6aeae93f4f",
            "top": "0",
            "width": "100%",
            "appName": "OhioLMIKRA"
        }, controller.args[0], "flexHead"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flexHead"), extendConfig({}, controller.args[2], "flexHead"));
        flexHead.setDefaultUnit(voltmx.flex.DP);
        var lblHead = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopydefLabel0hfb9b5ec3b774d",
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
        flexHead.add(lblHead);
        var HeaderToolbar = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "HeaderToolbar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0hfe6dc53fc0148",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "HeaderToolbar"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "HeaderToolbar"), extendConfig({}, controller.args[2], "HeaderToolbar"));
        HeaderToolbar.setDefaultUnit(voltmx.flex.DP);
        var topHeaderContainerBar = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "topHeaderContainerBar",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "CopyheaderContainerSknMaster0dff01e14e3fc45",
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
            "skin": "CopyheaderTitleSkinMaster0c0747d10faa340",
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
            "onTouchStart": controller.AS_Label_g886808426da4c8bbb08d98ea3a0f2bd,
            "skin": "CopyheaderBackIconSkin0j74c41c2a6d343",
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
            "onTouchStart": controller.AS_Label_g35867dd790541b1b773eb0b271db3d4,
            "skin": "CopyCopyslFontAwesomeIcon0a6fdae509ab740",
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
        var Gear = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "Gear",
            "isVisible": true,
            "right": "0dp",
            "skin": "CopyCopyslFontAwesomeIcon0ee422640cfb749",
            "text": "",
            "textStyle": {},
            "top": 0,
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "Gear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Gear"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "Gear"));
        topHeaderContainerBar.add(headerTitleLabel, headerIconLeft, Home, Gear);
        HeaderToolbar.add(topHeaderContainerBar);
        Head.add(flexHead, HeaderToolbar);
        return Head;
    }
})
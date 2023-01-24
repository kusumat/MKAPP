define(function() {
    return function(controller) {
        var MainHead = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "MainHead",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "OhioLMIKRA"
        }, controller.args[0], "MainHead"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "MainHead"), extendConfig({}, controller.args[2], "MainHead"));
        MainHead.setDefaultUnit(voltmx.flex.DP);
        var CopyflexHead0i1f4c18f27a14d = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "CopyflexHead0i1f4c18f27a14d",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox2",
            "top": "0",
            "width": "100%",
            "appName": "OhioLMIKRA"
        }, controller.args[0], "CopyflexHead0i1f4c18f27a14d"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "CopyflexHead0i1f4c18f27a14d"), extendConfig({}, controller.args[2], "CopyflexHead0i1f4c18f27a14d"));
        CopyflexHead0i1f4c18f27a14d.setDefaultUnit(voltmx.flex.DP);
        var lblHead = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHead",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopydefLabel2",
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
        var Gear = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "Gear",
            "isVisible": true,
            "onTouchStart": controller.AS_Label_i53997b4fb7b4ad9bf5ae2fae0cff8c1,
            "right": "0dp",
            "skin": "CopyCopyslFontAwesomeIcon",
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
        CopyflexHead0i1f4c18f27a14d.add(lblHead, Gear);
        MainHead.add(CopyflexHead0i1f4c18f27a14d);
        return MainHead;
    }
})
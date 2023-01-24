define("FBox0d2b4dfcdbd5e48", function() {
    return function(controller) {
        FBox0d2b4dfcdbd5e48 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "FBox0d2b4dfcdbd5e48",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "width": "100%",
            "appName": "OhioLMIKRA"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0d2b4dfcdbd5e48.setDefaultUnit(voltmx.flex.DP);
        var lblSeg = new voltmx.ui.Label({
            "id": "lblSeg",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0e0516eed638646",
            "text": "Label",
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
        FBox0d2b4dfcdbd5e48.add(lblSeg);
        return FBox0d2b4dfcdbd5e48;
    }
})
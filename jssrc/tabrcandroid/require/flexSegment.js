define("flexSegment", function() {
    return function(controller) {
        flexSegment = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9.40%",
            "id": "flexSegment",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0d482e22f20994d",
            "appName": "OhioLMIKRA"
        }, {
            "paddingInPixel": false
        }, {});
        flexSegment.setDefaultUnit(voltmx.flex.DP);
        var lblSeg = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblSeg",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopydefLabel0f0f2313058254f",
            "text": "MainSection",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexSegment.add(lblSeg);
        return flexSegment;
    }
})
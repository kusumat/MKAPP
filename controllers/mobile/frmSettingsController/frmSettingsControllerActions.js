define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for CloseSettings **/
    AS_Label_f0b57cdbd63042a9860d677d3a1ea325: function AS_Label_f0b57cdbd63042a9860d677d3a1ea325(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmMain");
        ntf.navigate();
    },
    /** onSlide defined for SwitchPushNotification **/
    AS_Switch_cab036ef42ed4595aa064dfa6b58c5c1: function AS_Switch_cab036ef42ed4595aa064dfa6b58c5c1(eventobject) {
        var self = this;
        //#ifdef android
        SetAndroidPushNotifications(this.view);
        //#endif       
        //#ifdef iphone
        SetiOSPushNotifications(this.view);
        //#endif
    },
    /** init defined for frmSettings **/
    AS_Form_ba7b61f925e645418eea20b3668f4484: function AS_Form_ba7b61f925e645418eea20b3668f4484(eventobject) {
        var self = this;
        var PushNotification = kony.store.getItem("PushNotification");
        if (PushNotification == "0") {
            this.view.SwitchPushNotification.selectedIndex = 0;
        } else {
            this.view.SwitchPushNotification.selectedIndex = 1;
        }
    }
});
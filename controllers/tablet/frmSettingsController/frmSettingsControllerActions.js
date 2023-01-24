define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Label_i34df7312ae44b8186d923c3f4dd777b: function AS_Label_i34df7312ae44b8186d923c3f4dd777b(eventobject, x, y) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmMain");
        ntf.navigate();
    },
    AS_Switch_abdfb4e10dcc430183ec4e82159d8b8b: function AS_Switch_abdfb4e10dcc430183ec4e82159d8b8b(eventobject) {
        var self = this;
        //#ifdef tabrcandroid
        SetAndroidPushNotifications(this.view);
        //#endif       
        //#ifdef ipad
        SetiOSPushNotifications(this.view);
        //#endif
    },
    AS_Form_fdb0a5f73a99403d9c06e65f685d8da7: function AS_Form_fdb0a5f73a99403d9c06e65f685d8da7(eventobject) {
        var self = this;
        var PushNotification = kony.store.getItem("PushNotification");
        if (PushNotification == "0") {
            this.view.SwitchPushNotification.selectedIndex = 0;
        } else {
            this.view.SwitchPushNotification.selectedIndex = 1;
        }
    }
});
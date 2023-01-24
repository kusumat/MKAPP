function AS_Switch_c851dbf56a4e4f61b067b28beb71a3d9(eventobject) {
    var self = this;
    //#ifdef android
    SetAndroidPushNotifications(this.view);
    //#endif       
    //#ifdef iphone
    SetiOSPushNotifications(this.view);
    //#endif
}
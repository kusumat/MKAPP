define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d926e213becc45cc837009f0d460dd85: function AS_Button_d926e213becc45cc837009f0d460dd85(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmMain");
        ntf.navigate();
    },
    AS_Button_fc689c6a97f242ca82e0391e8f120e98: function AS_Button_fc689c6a97f242ca82e0391e8f120e98(eventobject) {
        var self = this;
        var previousForm = kony.application.getPreviousForm();
        previousForm.show();
    },
    AS_Segment_e11786427f414dbda561c9efe51d8e6c: function AS_Segment_e11786427f414dbda561c9efe51d8e6c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        loadURLEconomy(eventobject.selectedRowItems);
    }
});
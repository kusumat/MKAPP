define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onScrollStart defined for flexScroll **/
    AS_FlexScrollContainer_c798a82c5e144072b66eb1f0b4d37b5f: function AS_FlexScrollContainer_c798a82c5e144072b66eb1f0b4d37b5f(eventobject) {
        var self = this;
    },
    /** postShow defined for frmMain **/
    AS_Form_i502347af95a49b0bf78f34bc6977c94: function AS_Form_i502347af95a49b0bf78f34bc6977c94(eventobject) {
        var self = this;
        loadHomePage(this.view);
        let env = 'UAT v';
        if (appConfig.isturlbase.toLowerCase().includes('dev')) env = 'DEV v';
        this.view.Foot.FooterHyperLinkButton.btnVersion.text = env + appConfig.appVersion;
    },
    /** onRowClick defined for segFrm **/
    AS_Segment_f969c1e6a1a2403a9d7a046537d751eb: function AS_Segment_f969c1e6a1a2403a9d7a046537d751eb(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return populateSegment.call(this, this.view);
    }
});
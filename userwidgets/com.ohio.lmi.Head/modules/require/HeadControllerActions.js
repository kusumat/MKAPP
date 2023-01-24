define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Label_g35867dd790541b1b773eb0b271db3d4: function AS_Label_g35867dd790541b1b773eb0b271db3d4(eventobject, x, y) {
        var self = this;
        var nav = new voltmx.mvc.Navigation("frmMain");
        nav.navigate();
    },
    AS_Label_g886808426da4c8bbb08d98ea3a0f2bd: function AS_Label_g886808426da4c8bbb08d98ea3a0f2bd(eventobject, x, y) {
        var self = this;
        var nav = new voltmx.mvc.Navigation(kony.application.getPreviousForm().id);
        var formName = this.view.headerTitleLabel.text;
        if ([LaborEnum.LaborForce, LaborEnum.LaborForceParticipationRate, LaborEnum.PayrollJobs, LaborEnum.HouseholdEmployment, LaborEnum.CoveredEmployment].includes(formName)) nav = new voltmx.mvc.Navigation("frmLabor");
        else if ([IndustryJobsEnum.TotalNonfarm, IndustryJobsEnum.TotalPrivate, IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyEarnings, IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyHours, IndustryJobsEnum.MiningAndLogging, IndustryJobsEnum.Construction, IndustryJobsEnum.Manufacturing, IndustryJobsEnum.TradeTransportationAndUtilities, IndustryJobsEnum.Information, IndustryJobsEnum.FinancialActivities, IndustryJobsEnum.ProfessionalAndBusinessServicesofessional, IndustryJobsEnum.EducationalAndHealthServices, IndustryJobsEnum.LeisureAndHospitality, IndustryJobsEnum.OtherServices, IndustryJobsEnum.Government].includes(formName)) nav = new voltmx.mvc.Navigation("frmIndustry");
        else if (formName.includes("MSA", 0)) nav = new voltmx.mvc.Navigation("frmMSA");
        else if (formName.includes("County", 0)) nav = new voltmx.mvc.Navigation("frmUnemployment");
        else nav = new voltmx.mvc.Navigation("frmMain");
        nav.navigate();
    }
});
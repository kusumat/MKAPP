define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Label_ec84c422bb6e46a495f2131dfe7bbf95: function AS_Label_ec84c422bb6e46a495f2131dfe7bbf95(eventobject, x, y) {
        var self = this;
        var nav = new voltmx.mvc.Navigation("frmMain");
        nav.navigate();
    },
    AS_Label_c7deb0577b1b4dc2bb408c7af6247aca: function AS_Label_c7deb0577b1b4dc2bb408c7af6247aca(eventobject, x, y) {
        var self = this;
        var nav;
        var currentForm = kony.application.getCurrentForm().id;
        switch (currentForm) {
            case 'frmUnemployment':
                nav = new voltmx.mvc.Navigation("frmEconomy");
                break;
            case 'frmMSA':
                nav = new voltmx.mvc.Navigation("frmEconomy");
                break;
            case 'frmAbout':
                var formName = this.view.headerTitleLabel.text;
                if ([LaborEnum.LaborForce, LaborEnum.LaborForceParticipationRate, LaborEnum.PayrollJobs, LaborEnum.HouseholdEmployment, LaborEnum.CoveredEmployment].includes(formName)) nav = new voltmx.mvc.Navigation("frmLabor");
                else if ([IndustryJobsEnum.TotalNonfarm, IndustryJobsEnum.TotalPrivate, IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyEarnings, IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyHours, IndustryJobsEnum.MiningAndLogging, IndustryJobsEnum.Construction, IndustryJobsEnum.Manufacturing, IndustryJobsEnum.TradeTransportationAndUtilities, IndustryJobsEnum.Information, IndustryJobsEnum.FinancialActivities, IndustryJobsEnum.ProfessionalAndBusinessServicesofessional, IndustryJobsEnum.EducationalAndHealthServices, IndustryJobsEnum.LeisureAndHospitality, IndustryJobsEnum.OtherServices, IndustryJobsEnum.Government].includes(formName)) nav = new voltmx.mvc.Navigation("frmIndustry");
                else if (formName.includes("MSA", 0)) nav = new voltmx.mvc.Navigation("frmMSA");
                else if (formName.includes("County", 0)) nav = new voltmx.mvc.Navigation("frmUnemployment");
                break;
            default:
                nav = new voltmx.mvc.Navigation("frmMain");
        }
        nav.navigate();
    }
});
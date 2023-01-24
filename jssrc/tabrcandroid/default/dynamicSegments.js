var url = "";
var frmMain = null;
/*****************************************************************
 *	Name    : loadHomePage
 *	Author  : Sophia Nelson 
 *	Purpose : To set the initial data to the segment through row templates.
 ******************************************************************/
function loadHomePage(frmMainView) {
    frmMain = frmMainView;
    frmMain.flexScroll.segFrm.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: MainEnum.LABORFORCE
    }, {
        lblSeg: MainEnum.UNEMPLOYMENT
    }, {
        lblSeg: MainEnum.INDUSTRYJOBS
    }, {
        lblSeg: MainEnum.SUBSTATEECONOMY
    }];
    frmMain.flexScroll.segFrm.setData(data);
}
/*****************************************************************
 *	Name    : backButtonOnPages, backButtonFromBrowser
 *	Author  : Sophia Nelson 
 *	Purpose : Manipulated the back button to work - not ideal 
 ******************************************************************/
function backButtonOnPages() {
    var previousForm = kony.application.getCurrentForm();
    var formName = "";
    headerArr = new Array(previousForm.headers.length);
    headerArr = previousForm.headers;
    if (headerArr[1] !== null) formName = headerArr[1].headerTitleLabel.text;
    if (formName == SubStateEnum.MSAUnemploymentRate) {
        frmEconomy.show();
        headerArr = new Array(frmEconomy.headers.length);
        headerArr = frmEconomy.headers;
        if (headerArr[1] !== null) headerArr[1].headerTitleLabel.text = MainEnum.SUBSTATEECONOMY;
    } else if (formName == SubStateEnum.CountyUnemploymentRate) {
        frmEconomy.show();
        headerArr = frmEconomy.headers;
        if (headerArr[1] !== null) headerArr[1].headerTitleLabel.text = MainEnum.SUBSTATEECONOMY;
    } else {
        frmMain.show();
    }
}

function backButtonFromBrowser() {
    var currentForm = kony.application.getCurrentForm();
    var formName = "";
    headerArr = new Array(currentForm.headers.length);
    headerArr = currentForm.headers;
    if (headerArr[1] !== null) formName = headerArr[1].headerTitleLabel.text;
    if ([LaborEnum.LaborForce, LaborEnum.LaborForceParticipationRate, LaborEnum.PayrollJobs, LaborEnum.HouseholdEmployment, LaborEnum.CoveredEmployment].includes(formName)) frmLabor.show();
    else if ([IndustryJobsEnum.TotalNonfarm, IndustryJobsEnum.TotalPrivate, IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyEarnings, IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyHours, IndustryJobsEnum.MiningAndLogging, IndustryJobsEnum.Construction, IndustryJobsEnum.Manufacturing, IndustryJobsEnum.TradeTransportationAndUtilities, IndustryJobsEnum.Information, IndustryJobsEnum.FinancialActivities, IndustryJobsEnum.ProfessionalAndBusinessServicesofessional, IndustryJobsEnum.EducationalAndHealthServices, IndustryJobsEnum.LeisureAndHospitality, IndustryJobsEnum.OtherServices, IndustryJobsEnum.Government].includes(formName)) frmIndustry.show();
    else if (formName.includes("MSA", 0)) frmMSA.show();
    else if (formName.includes("County", 0)) frmUnemployment.show();
    else frmMain.show();
}

function closePreviousForm() {
    var previousForm = kony.application.getPreviousForm();
    previousForm.show();
}

function goBack() {
    var a = kony.application.getPreviousForm().id;
    a.navigate();
}

function closeAboutForm() {
    var previousForm = kony.application.getPreviousForm();
    previousForm.show();
}
/*****************************************************************
 *	Name    : loadIndustryJobs
 *	Author  : Sophia Nelson 
 *	Purpose : Load the Industry Jobs segment.
 ******************************************************************/
function loadIndustryJobs(frmIndustry) {
    frmIndustry.flexScrollSub.segSubIndustry.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: IndustryJobsEnum.TotalNonfarm
    }, {
        lblSeg: IndustryJobsEnum.TotalPrivate
    }, {
        lblSeg: IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyEarnings
    }, {
        lblSeg: IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyHours
    }, {
        lblSeg: IndustryJobsEnum.MiningAndLogging
    }, {
        lblSeg: IndustryJobsEnum.Construction
    }, {
        lblSeg: IndustryJobsEnum.Manufacturing
    }, {
        lblSeg: IndustryJobsEnum.TradeTransportationAndUtilities
    }, {
        lblSeg: IndustryJobsEnum.Information
    }, {
        lblSeg: IndustryJobsEnum.FinancialActivities
    }, {
        lblSeg: IndustryJobsEnum.ProfessionalAndBusinessServices
    }, {
        lblSeg: IndustryJobsEnum.EducationalAndHealthServices
    }, {
        lblSeg: IndustryJobsEnum.LeisureAndHospitality
    }, {
        lblSeg: IndustryJobsEnum.OtherServices
    }, {
        lblSeg: IndustryJobsEnum.Government
    }, ];
    frmIndustry.flexScrollSub.segSubIndustry.setData(data);
}
/*****************************************************************
 *	Name    : loadLabor
 *	Author  : Sophia Nelson 
 *	Purpose : Load the Labor Force segment.
 ******************************************************************/
function loadLabor(laborView) {
    laborView.flexScrollSub.segSub.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: LaborEnum.LaborForce
    }, {
        lblSeg: LaborEnum.LaborForceParticipationRate
    }, {
        lblSeg: LaborEnum.PayrollJobs
    }, {
        lblSeg: LaborEnum.HouseholdEmployment
    }, {
        lblSeg: LaborEnum.CoveredEmployment
    }, ];
    laborView.flexScrollSub.segSub.setData(data);
}
/*****************************************************************
 *	Name    : Load Main
 *	Author  : Sophia Nelson 
 *	Purpose : Load main segment.
 ******************************************************************/
function loadMain() {
    frmMain.flexScroll.segFrm.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: MainEnum.LABORFORCE
    }, {
        lblSeg: MainEnum.UNEMPLOYMENT
    }, {
        lblSeg: MainEnum.INDUSTRYJOBS
    }, {
        lblSeg: MainEnum.SUBSTATEECONOMY
    }];
    frmEconomy.flexScrollSub.segSubEconomy.setData(data);
}
/*****************************************************************
 *	Name    : loadEconomy
 *	Author  : Sophia Nelson 
 *	Purpose : Load Sub State Economy segment.
 ******************************************************************/
function loadEconomy(frmEconomy) {
    frmEconomy.flexScrollSub.segSubEconomy.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: SubStateEnum.MSAUnemploymentRate
    }, {
        lblSeg: SubStateEnum.CountyUnemploymentRate
    }, ];
    frmEconomy.flexScrollSub.segSubEconomy.setData(data);
}

function reloadBrowserWidgetOnOrientationChange() {
    frmBrowser.brwWidget.reload();
}
/*****************************************************************
 *	Name    : getSearchResult - Unused
 *	Author  : Sophia Nelson
 *	Purpose : Search
 ******************************************************************/
function getSearchResult(mData, searchValue) {
    var i, j;
    var length = mData.length;
    var sData = [];
    for (i = 0; i < length; i++) {
        if (mData[i] !== null || mData[i] !== undefined) {
            var txt1 = "";
            if (mData[i].lblSeg !== null && mData[i].lblSeg !== undefined) {
                txt1 = mData[i].lblSeg;
            }
            var pattern = searchValue;
            if (txt1.search(pattern.trim()) !== -1) {
                sData.push(mData[i]);
                var dataLength = sData.length - 1;
            }
        }
    }
    return sData;
}
/*****************************************************************
 *	Name    : loadURLEconomy
 *	Author  : Sophia Nelson
 *	Purpose : When user clicks on a row template , segment will be refreshed with data
 ******************************************************************/
function loadURLEconomy(val) {
    //var val = frmEconomy.flexScrollSub.segSubEconomy.selectedRowItems; 
    var mystring = val[0].lblSeg;
    if (mystring == SubStateEnum.MSAUnemploymentRate) {
        /*frmMSA.show();
        headerArr = new Array(frmEconomy.headers.length);
        headerArr = frmEconomy.headers;
        if (headerArr[1] !== null)     
          headerArr[1].headerTitleLabel.text = mystring;*/
        var navIndMSA = new voltmx.mvc.Navigation("frmMSA");
        navIndMSA.navigate(mystring);
    } else if (mystring == SubStateEnum.CountyUnemploymentRate) {
        /*frmUnemployment.show();
        headerArr = new Array(frmEconomy.headers.length);
        headerArr = frmEconomy.headers;
        if (headerArr[1] !== null)     
          headerArr[1].headerTitleLabel.text = mystring;*/
        var navInd = new voltmx.mvc.Navigation("frmUnemployment");
        navInd.navigate(mystring);
    } else {}
}
/*****************************************************************
 *	Name    : loadMSA
 *	Author  : Sophia Nelson
 *	Purpose : When user clicks on a row template , segment will be refreshed with data
 ******************************************************************/
function loadMSA(frmMSA) {
    frmMSA.flexScrollSub.segSubMSA.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: MSAEnum.AkronMSA
    }, {
        lblSeg: MSAEnum.CantonMassillonMSA
    }, {
        lblSeg: MSAEnum.CincinnatiMSA
    }, {
        lblSeg: MSAEnum.ClevelandElyriaMSA
    }, {
        lblSeg: MSAEnum.ColumbusMSA
    }, {
        lblSeg: MSAEnum.DaytonMSA
    }, {
        lblSeg: MSAEnum.LimaMSA
    }, {
        lblSeg: MSAEnum.MansfieldMSA
    }, {
        lblSeg: MSAEnum.SpringfieldMSA
    }, {
        lblSeg: MSAEnum.ToledoMSA
    }, {
        lblSeg: MSAEnum.WeirtonSteubenvilleMSA
    }, {
        lblSeg: MSAEnum.YoungstownWarrenBoardmanMSA
    }, ];
    frmMSA.flexScrollSub.segSubMSA.setData(data);
}
/*****************************************************************
 *	Name    : populateSegment
 *	Author  : Sophia Nelson
 *	Purpose : When ever user clicks on a row template , segment will be refreshed with data
 ******************************************************************/
function populateSegment(frmMainView) {
    frmMain = frmMainView;
    var val = frmMain.flexScroll.segFrm.selectedRowItems;
    var mystring = val[0].lblSeg;
    if (mystring == MainEnum.LABORFORCE) {
        var ntf = new voltmx.mvc.Navigation("frmLabor");
        ntf.navigate(mystring);
        /*frmLabor.show();
        headerArr = new Array(frmLabor.headers.length);
        headerArr = frmLabor.headers;
        if (headerArr[1] !== null)     
          headerArr[1].headerTitleLabel.text = mystring;*/
    } else if (mystring == MainEnum.UNEMPLOYMENT) {
        /*frmBrowser.show();
        headerArr = new Array(frmBrowser.headers.length);
        headerArr = frmBrowser.headers;
        if (headerArr[1] !== null)     
          headerArr[1].headerTitleLabel.text = mystring;*/
        url = globalURL + "UnemploymentRate/UnemploymentRate" + globalURLEnd;
        urlConf = {
            URL: url,
            requestMethod: constants.BROWSER_REQUEST_METHOD_GET
        };
        //frmBrowser.brwWidget.requestURLConfig = urlConf;    
        var ntfBrowser = new voltmx.mvc.Navigation("frmBrowser");
        ntfBrowser.navigate({
            urlConf: urlConf,
            title: mystring
        });
    } else if (mystring == MainEnum.INDUSTRYJOBS) {
        var navInd = new voltmx.mvc.Navigation("frmIndustry");
        navInd.navigate(mystring);
        /*frmIndustry.show();
        headerArr = new Array(frmIndustry.headers.length);
        headerArr = frmIndustry.headers;
        if (headerArr[1] !== null)     
          headerArr[1].headerTitleLabel.text = mystring;*/
    } else if (mystring == MainEnum.SUBSTATEECONOMY) {
        var navEco = new voltmx.mvc.Navigation("frmEconomy");
        navEco.navigate(mystring);
        /*frmEconomy.show();
        headerArr = new Array(frmEconomy.headers.length);
        headerArr = frmEconomy.headers;
        if (headerArr[1] !== null)     
          headerArr[1].headerTitleLabel.text = mystring;*/
    } else {}
}

function onFailureCallBck(browser) {
    alert("onFailure event triggered");
}
/*****************************************************************
 *	Name    : LoadURLForIndustryJobs
 *	Author  : Sophia Nelson
 *	Purpose : When user clicks on a row , it loads the URL on the browser widget
 ******************************************************************/
function LoadURLForIndustryJobs(val) {
    //var val = frmIndustry.flexScrollSub.segSubIndustry.selectedRowItems; 
    var mystring = val[0].lblSeg;
    switch (mystring) {
        case IndustryJobsEnum.TotalNonfarm:
            url = globalURL + "TotalNonfarmJobs/TotalNonfarm" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.TotalPrivate:
            url = globalURL + "TotalPrivate/TotalPrivate" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyEarnings:
            url = globalURL + "TotalPrivateEmployeesAverageWeeklyEarnings/Avg_WeeklyEarnings" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyHours:
            url = globalURL + "TotalPrivateEmployeesAverageWeeklyHours/Avg_WeeklyHours" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.MiningAndLogging:
            url = globalURL + "MiningandLogging/MiningandLogging" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.Construction:
            url = globalURL + "Construction/Construction" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.Manufacturing:
            url = globalURL + "Manufacturing/Manufacturing" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.TradeTransportationAndUtilities:
            url = globalURL + "Trade/Trade" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.Information:
            url = globalURL + "Information/Information" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.FinancialActivities:
            url = globalURL + "FinancialActivities/FinancialActivities" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.ProfessionalAndBusinessServices:
            url = globalURL + "ProfessionalandBusinessServices/ProfessionalandBusinessServices" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.EducationalAndHealthServices:
            url = globalURL + "EducationalandHealthServices/EducationalandHealthServices" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.LeisureAndHospitality:
            url = globalURL + "LeisureandHospitality/LeisureandHospitality" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.OtherServices:
            url = globalURL + "OtherServices/OtherServices" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case IndustryJobsEnum.Government:
            url = globalURL + "Government/Government" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        default:
            url = globalURL + "TotalMiningandLoggingJobs/TotalMiningandLogging" + globalURLEnd;
            urlConf = {
                URL: url,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
    }
    // frmBrowser.brwWidget.requestURLConfig = urlConf;
    var ntfBrowser = new voltmx.mvc.Navigation("frmBrowser");
    ntfBrowser.navigate({
        urlConf: urlConf,
        title: mystring
    });
}
/*****************************************************************
 *	Name    : LoadURLForMSA
 *	Author  : Sophia Nelson
 *	Purpose : When user clicks on a row template , browser widget will load data
 ******************************************************************/
function LoadURLForMSA(val) {
    //var val = frmEconomy.flexScrollSub.segSubEconomy.selectedRowItems; 
    var mystring = val[0].lblSeg;
    var urlConf = "";
    var bURL = globalURL + "MSAandCountyUnemploymentRates/UnemploymentRate" + globalURLEnd;
    //var deviceInfo=kony.os.deviceInfo().name;
    switch (mystring) {
        case MSAEnum.AkronMSA:
            bURL = globalURL + "AkronMSAUnemploymentRate/AkronMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.CantonMassillonMSA:
            bURL = globalURL + "CantonMSAUnemploymentRate/CantonMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.CincinnatiMSA:
            bURL = globalURL + "CincinnatiMSAUnemploymentRate/CincinnatiMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.ClevelandElyriaMSA:
            bURL = globalURL + "ClevelandMSAUnemploymentRate/ClevelandMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.ColumbusMSA:
            bURL = globalURL + "ColumbusMSAUnemploymentRate/ColumbusMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.DaytonMSA:
            bURL = globalURL + "DaytonMSAUnemploymentRate/DaytonMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.LimaMSA:
            bURL = globalURL + "LimaMSAUnemploymentRate/LimaMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.MansfieldMSA:
            bURL = globalURL + "MansfieldMSAUnemploymentRate/MansfieldMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.SpringfieldMSA:
            bURL = globalURL + "SpringfieldMSAUnemploymentRate/SpringfieldMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.ToledoMSA:
            bURL = globalURL + "ToledoMSAUnemploymentRate/ToledoMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.YoungstownWarrenBoardmanMSA:
            bURL = globalURL + "YoungstownMSAUnemploymentRate/YoungstownMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case MSAEnum.WeirtonSteubenvilleMSA:
            bURL = globalURL + "Weirton-SteubenvilleMSAUnemploymentRate/WeirtonMSAUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        default:
            bURL = globalURL + "MSAandCountyUnemploymentRates/UnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
    }
    // frmBrowser.brwWidget.requestURLConfig = urlConf;
    var ntfBrowser = new voltmx.mvc.Navigation("frmBrowser");
    ntfBrowser.navigate({
        urlConf: urlConf,
        title: mystring
    });
}
/*****************************************************************
 *	Name    : LoadURLForLabor
 *	Author  : Sophia Nelson
 *	Purpose : When user clicks on a row template , browser widget will load data
 ******************************************************************/
function LoadURLForLabor(val) {
    //var val = frmLabor.flexScrollSub.segSub.selectedRowItems; 
    var mystring = val[0].lblSeg;
    var urlConf = "";
    var bURL = globalURL + "LaborForce/LaborForce" + globalURLEnd;
    switch (mystring) {
        case LaborEnum.LaborForce:
            bURL = globalURL + "LaborForce/LaborForce" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case LaborEnum.PayrollJobs:
            bURL = globalURL + "TotalNonfarmJobs/TotalNonfarm" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case LaborEnum.LaborForceParticipationRate:
            {
                bURL = globalURL + "LaborForceParticipationRate/LaborForceParticipationRate" + globalURLEnd;
                urlConf = {
                    URL: bURL,
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
                break;
            }
        case LaborEnum.HouseholdEmployment:
            {
                bURL = globalURL + "HouseholdEmployment/Employment" + globalURLEnd;
                urlConf = {
                    URL: bURL,
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
                break;
            }
        case LaborEnum.CoveredEmployment:
            {
                bURL = globalURL + "CoveredEmployment/CoveredEmployment" + globalURLEnd;
                urlConf = {
                    URL: bURL,
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
                break;
            }
        default:
            bURL = globalURL + "LaborForce/LaborForce" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
    }
    var ntfBrowser = new voltmx.mvc.Navigation("frmBrowser");
    ntfBrowser.navigate({
        urlConf: urlConf,
        title: mystring
    });
    //frmBrowser.brwWidget.requestURLConfig = urlConf;
}
/*****************************************************************
 *	Name    : initArray (unused)
 *	Author  : Sophia Nelson
 *	Purpose : Array to maintain the state of row templates such that rows are expanded or collapsed.Initially all rows are collapsed.
 ******************************************************************/
function initArray() {
    var length = 3;
    arrForDynRow = new Array(length);
    for (i = 0; i <= length; i++) arrForDynRow[i] = 0;
}
/*****************************************************************
 *	Name    : isSelected
 *	Author  : Sophia Nelson
 *	Purpose : To check whether the row is collapsed or expanded.If it is collapsed then expand the row templates when user clicks on the particular row and viceversa.
 ******************************************************************/
function isSelected() {
    var selIndex = frmMain.flexScroll.segFrm.selectedIndex[1];
    kony.print("selIndex" + selIndex);
    if (arrForDynRow[selIndex] === 0) {
        arrForDynRow[selIndex] = 1;
        expandRowTemp();
    } else {
        arrForDynRow[selIndex] = 0;
        collapseRowTemp();
    }
}
/*****************************************************************
 *	Name    : LoadURLForUnemploymentCounties
 *	Author  : Sophia Nelson
 *	Purpose : When user clicks on a row template, browser widget will URLConf data
 ******************************************************************/
function LoadURLForUnemploymentCounties(val) {
    //var val = frmEconomy.flexScrollSub.segSubEconomy.selectedRowItems; 
    var mystring = val[0].lblSeg;
    var urlConf = "";
    var bURL = globalURL + "MSAandCountyUnemploymentRates/UnemploymentRate" + globalURLEnd;
    var deviceInfo = kony.os.deviceInfo().name;
    switch (mystring) {
        case "Adams County":
            bURL = globalURL + "AdamsCountyUnemploymentRate/AdamsCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Allen County":
            bURL = globalURL + "AllenCountyUnemploymentRate/AllenCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Ashland County":
            bURL = globalURL + "AshlandCountyUnemploymentRate/AshlandCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Ashtabula County":
            bURL = globalURL + "AshtabulaCountyUnemploymentRate/AshtabulaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Athens County":
            bURL = globalURL + "AthensCountyUnemploymentRate/AthensCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Auglaize County":
            bURL = globalURL + "AuglaizeCountyUnemploymentRate/AuglaizeCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Belmont County":
            bURL = globalURL + "BelmontCountyUnemploymentRate/BelmontCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Brown County":
            bURL = globalURL + "BrownCountyUnemploymentRate/BrownCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Butler County":
            bURL = globalURL + "ButlerCountyUnemploymentRate/ButlerCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Carroll County":
            bURL = globalURL + "CarrollCountyUnemploymentRate/CarrollCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Champaign County":
            bURL = globalURL + "ChampaignCountyUnemploymentRate/ChampaignCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Clark County":
            bURL = globalURL + "ClarkCountyUnemploymentRate/ClarkCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Clermont County":
            bURL = globalURL + "ClermontCountyUnemploymentRate/ClermontCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Clinton County":
            bURL = globalURL + "ClintonCountyUnemploymentRate/ClintonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Columbiana County":
            bURL = globalURL + "ColumbianaCountyUnemploymentRate/ColumbianaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Coshocton County":
            bURL = globalURL + "CoshoctonCountyUnemploymentRate/CoshoctonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Crawford County":
            bURL = globalURL + "CrawfordCountyUnemploymentRate/CrawfordCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Cuyahoga County":
            bURL = globalURL + "CuyahogaCountyUnemploymentRate/CuyahogaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Darke County":
            bURL = globalURL + "DarkeCountyUnemploymentRate/DarkeCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Defiance County":
            bURL = globalURL + "DefianceCountyUnemploymentRate/DefianceCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Delaware County":
            bURL = globalURL + "DelawareCountyUnemploymentRate/DelawareCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Erie County":
            bURL = globalURL + "ErieCountyUnemploymentRate/ErieCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Fairfield County":
            bURL = globalURL + "FairfieldCountyUnemploymentRate/FairfieldCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Fayette County":
            bURL = globalURL + "FayetteCountyUnemploymentRate/FayetteCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Franklin County":
            bURL = globalURL + "FranklinCountyUnemploymentRate/FranklinCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Fulton County":
            bURL = globalURL + "FultonCountyUnemploymentRate/FultonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Gallia County":
            bURL = globalURL + "GalliaCountyUnemploymentRate/GalliaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Geauga County":
            bURL = globalURL + "GeaugaCountyUnemploymentRate/GeaugaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Greene County":
            bURL = globalURL + "GreeneCountyUnemploymentRate/GreeneCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Guernsey County":
            bURL = globalURL + "GuernseyCountyUnemploymentRate/GuernseyCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Hamilton County":
            bURL = globalURL + "HamiltonCountyUnemploymentRate/HamiltonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Hancock County":
            bURL = globalURL + "HancockCountyUnemploymentRate/HancockCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Hardin County":
            bURL = globalURL + "HardinCountyUnemploymentRate/HardinCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Harrison County":
            bURL = globalURL + "HarrisonCountyUnemploymentRate/HarrisonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Henry County":
            bURL = globalURL + "HenryCountyUnemploymentRate/HenryCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Highland County":
            bURL = globalURL + "HighlandCountyUnemploymentRate/HighlandCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Hocking County":
            bURL = globalURL + "HockingCountyUnemploymentRate/HockingCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Holmes County":
            bURL = globalURL + "HolmesCountyUnemploymentRate/HolmesCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Huron County":
            bURL = globalURL + "HuronCountyUnemploymentRate/HuronCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Jackson County":
            bURL = globalURL + "JacksonCountyUnemploymentRate/JacksonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Jefferson County":
            bURL = globalURL + "JeffersonCountyUnemploymentRate/JeffersonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Knox County":
            bURL = globalURL + "KnoxCountyUnemploymentRate/KnoxCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Lake County":
            bURL = globalURL + "LakeCountyUnemploymentRate/LakeCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Lawrence County":
            bURL = globalURL + "LawrenceCountyUnemploymentRate/LawrenceCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Licking County":
            bURL = globalURL + "LickingCountyUnemploymentRate/LickingCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Logan County":
            bURL = globalURL + "LoganCountyUnemploymentRate/LoganCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Lorain County":
            bURL = globalURL + "LorainCountyUnemploymentRate/LorainCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Lucas County":
            bURL = globalURL + "LucasCountyUnemploymentRate/LucasCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Madison County":
            bURL = globalURL + "MadisonCountyUnemploymentRate/MadisonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Mahoning County":
            bURL = globalURL + "MahoningCountyUnemploymentRate/MahoningCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Marion County":
            bURL = globalURL + "MarionCountyUnemploymentRate/MarionCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Medina County":
            bURL = globalURL + "MedinaCountyUnemploymentRate/MedinaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Meigs County":
            bURL = globalURL + "MeigsCountyUnemploymentRate/MeigsCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Mercer County":
            bURL = globalURL + "MercerCountyUnemploymentRate/MercerCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Miami County":
            bURL = globalURL + "MiamiCountyUnemploymentRate/MiamiCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Monroe County":
            bURL = globalURL + "MonroeCountyUnemploymentRate/MonroeCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Montgomery County":
            bURL = globalURL + "MontgomeryCountyUnemploymentRate/MontgomeryCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Morgan County":
            bURL = globalURL + "MorganCountyUnemploymentRate/MorganCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Morrow County":
            bURL = globalURL + "MorrowCountyUnemploymentRate/MorrowCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Muskingum County":
            bURL = globalURL + "MuskingumCountyUnemploymentRate/MuskingumCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Noble County":
            bURL = globalURL + "NobleCountyUnemploymentRate/NobleCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Ottawa County":
            bURL = globalURL + "OttawaCountyUnemploymentRate/OttawaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Paulding County":
            bURL = globalURL + "PauldingCountyUnemploymentRate/PauldingCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Perry County":
            bURL = globalURL + "PerryCountyUnemploymentRate/PerryCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Pickaway County":
            bURL = globalURL + "PickawayCountyUnemploymentRate/PickawayCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Pike County":
            bURL = globalURL + "PikeCountyUnemploymentRate/PikeCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Portage County":
            bURL = globalURL + "PortageCountyUnemploymentRate/PortageCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Preble County":
            bURL = globalURL + "PrebleCountyUnemploymentRate/PrebleCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Putnam County":
            bURL = globalURL + "PutnamCountyUnemploymentRate/PutnamCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Richland County":
            bURL = globalURL + "RichlandCountyUnemploymentRate/RichlandCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Ross County":
            bURL = globalURL + "RossCountyUnemploymentRate/RossCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Sandusky County":
            bURL = globalURL + "SanduskyCountyUnemploymentRate/SanduskyCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Scioto County":
            bURL = globalURL + "SciotoCountyUnemploymentRate/SciotoCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Seneca County":
            bURL = globalURL + "SenecaCountyUnemploymentRate/SenecaCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Shelby County":
            bURL = globalURL + "ShelbyCountyUnemploymentRate/ShelbyCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Stark County":
            bURL = globalURL + "StarkCountyUnemploymentRate/StarkCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Summit County":
            bURL = globalURL + "SummitCountyUnemploymentRate/SummitCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Trumbull County":
            bURL = globalURL + "TrumbullCountyUnemploymentRate/TrumbullCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Tuscarawas County":
            bURL = globalURL + "TuscarawasCountyUnemploymentRate/TuscarawasCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Union County":
            bURL = globalURL + "UnionCountyUnemploymentRate/UnionCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Vinton County":
            bURL = globalURL + "VintonCountyUnemploymentRate/VintonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Van Wert County":
            bURL = globalURL + "VanWertCountyUnemploymentRate/VanWertCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Warren County":
            bURL = globalURL + "WarrenCountyUnemploymentRate/WarrenCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Washington County":
            bURL = globalURL + "WashingtonCountyUnemploymentRate/WashingtonCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Wayne County":
            bURL = globalURL + "WayneCountyUnemploymentRate/WayneCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Williams County":
            bURL = globalURL + "WilliamsCountyUnemploymentRate/WilliamsCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Wood County":
            bURL = globalURL + "WoodCountyUnemploymentRate/WoodCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        case "Wyandot County":
            bURL = globalURL + "WyandotCountyUnemploymentRate/WyandotCountyUnemploymentRate" + globalURLEnd;
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            break;
        default:
            urlConf = {
                URL: bURL,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
    }
    //frmBrowser.brwWidget.requestURLConfig = urlConf;
    var ntfBrowser = new voltmx.mvc.Navigation("frmBrowser");
    ntfBrowser.navigate({
        urlConf: urlConf,
        title: mystring
    });
}
/*****************************************************************
 *	Name    : loadCounties
 *	Author  : Sophia Nelson
 *	Purpose : Load County List
 ******************************************************************/
function loadCounties(frmUnemployment) {
    frmUnemployment.flexScrollSub.segCounty.widgetDataMap = {
        lblSeg: "lblSeg"
    };
    var data = [{
        lblSeg: "Adams County"
    }, {
        lblSeg: "Allen County"
    }, {
        lblSeg: "Ashland County"
    }, {
        lblSeg: "Ashtabula County"
    }, {
        lblSeg: "Athens County"
    }, {
        lblSeg: "Auglaize County"
    }, {
        lblSeg: "Belmont County"
    }, {
        lblSeg: "Brown County"
    }, {
        lblSeg: "Butler County"
    }, {
        lblSeg: "Carroll County"
    }, {
        lblSeg: "Champaign County"
    }, {
        lblSeg: "Clark County"
    }, {
        lblSeg: "Clermont County"
    }, {
        lblSeg: "Clinton County"
    }, {
        lblSeg: "Columbiana County"
    }, {
        lblSeg: "Coshocton County"
    }, {
        lblSeg: "Crawford County"
    }, {
        lblSeg: "Cuyahoga County"
    }, {
        lblSeg: "Darke County"
    }, {
        lblSeg: "Defiance County"
    }, {
        lblSeg: "Delaware County"
    }, {
        lblSeg: "Erie County"
    }, {
        lblSeg: "Fairfield County"
    }, {
        lblSeg: "Fayette County"
    }, {
        lblSeg: "Franklin County"
    }, {
        lblSeg: "Fulton County"
    }, {
        lblSeg: "Gallia County"
    }, {
        lblSeg: "Geauga County"
    }, {
        lblSeg: "Greene County"
    }, {
        lblSeg: "Guernsey County"
    }, {
        lblSeg: "Hamilton County"
    }, {
        lblSeg: "Hancock County"
    }, {
        lblSeg: "Hardin County"
    }, {
        lblSeg: "Harrison County"
    }, {
        lblSeg: "Henry County"
    }, {
        lblSeg: "Highland County"
    }, {
        lblSeg: "Hocking County"
    }, {
        lblSeg: "Holmes County"
    }, {
        lblSeg: "Huron County"
    }, {
        lblSeg: "Jackson County"
    }, {
        lblSeg: "Jefferson County"
    }, {
        lblSeg: "Knox County"
    }, {
        lblSeg: "Lake County"
    }, {
        lblSeg: "Lawrence County"
    }, {
        lblSeg: "Licking County"
    }, {
        lblSeg: "Logan County"
    }, {
        lblSeg: "Lorain County"
    }, {
        lblSeg: "Lucas County"
    }, {
        lblSeg: "Madison County"
    }, {
        lblSeg: "Mahoning County"
    }, {
        lblSeg: "Medina County"
    }, {
        lblSeg: "Meigs County"
    }, {
        lblSeg: "Mercer County"
    }, {
        lblSeg: "Miami County"
    }, {
        lblSeg: "Monroe County"
    }, {
        lblSeg: "Montgomery County"
    }, {
        lblSeg: "Morgan County"
    }, {
        lblSeg: "Morrow County"
    }, {
        lblSeg: "Muskingum County"
    }, {
        lblSeg: "Noble County"
    }, {
        lblSeg: "Ottawa County"
    }, {
        lblSeg: "Paulding County"
    }, {
        lblSeg: "Perry County"
    }, {
        lblSeg: "Pickaway County"
    }, {
        lblSeg: "Pike County"
    }, {
        lblSeg: "Portage County"
    }, {
        lblSeg: "Preble County"
    }, {
        lblSeg: "Putnam County"
    }, {
        lblSeg: "Richland County"
    }, {
        lblSeg: "Ross County"
    }, {
        lblSeg: "Sandusky County"
    }, {
        lblSeg: "Scioto County"
    }, {
        lblSeg: "Seneca County"
    }, {
        lblSeg: "Shelby County"
    }, {
        lblSeg: "Stark County"
    }, {
        lblSeg: "Summit County"
    }, {
        lblSeg: "Trumbull County"
    }, {
        lblSeg: "Tuscarawas County"
    }, {
        lblSeg: "Union County"
    }, {
        lblSeg: "Van Wert County"
    }, {
        lblSeg: "Vinton County"
    }, {
        lblSeg: "Warren County"
    }, {
        lblSeg: "Washington County"
    }, {
        lblSeg: "Wayne County"
    }, {
        lblSeg: "Williams County"
    }, {
        lblSeg: "Wood County"
    }, {
        lblSeg: "Wyandot County"
    }];
    frmUnemployment.flexScrollSub.segCounty.setData(data);
}
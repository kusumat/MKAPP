/*****************************************************************
*	Name    : populateAbout
*	Author  : Sophia Nelson
*	Purpose : About Page
******************************************************************/

var theUrl = "";
function populateAbout(frmAbout,txtTitle){

  /*var txtTitle = "";   

  headerArr = new Array(frmBrowser.headers.length);
  headerArr = frmBrowser.headers;
  if (headerArr[1] !== null)     
    txtTitle = headerArr[1].headerTitleLabel.text;*/
  frmAbout.lblText.text = txtTitle;

  var theSelector = txtTitle;

  switch(theSelector) {
      // Labor

    case LaborEnum.LaborForce:

      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LaborForce/LaborForce.csv";
      break;      

    case LaborEnum.PayrollJobs:
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "TotalNonfarmJobs/TotalNonfarm.csv" ;
      break;
    case LaborEnum.LaborForceParticipationRate :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Population Survey (CPS)";
      theUrl =  globalURL +  "LaborForceParticipationRate/LaborForceParticipationRate.csv" ;
      break;   
    case LaborEnum.HouseholdEmployment :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemplyment Statistics (LAUS)";
      theUrl =  globalURL +  "HouseholdEmployment/Employment.csv" ;
      break;    
    case LaborEnum.CoveredEmployment : 
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Quarterly Census of Employment & Wages (QCEW)";
      theUrl =  globalURL +  "CoveredEmployment/CoveredEmployment.csv" ; 
      break;

      // INDUSTRY JOBS     
    case IndustryJobsEnum.TotalNonfarm:
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "TotalNonfarmJobs/TotalNonfarm.csv";
      break;      

    case IndustryJobsEnum.TotalPrivate:
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "TotalPrivate/TotalPrivate.csv" ;
      break;
    case IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyEarnings : 
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "TotalPrivateEmployeesAverageWeeklyEarnings/Avg_WeeklyEarnings.csv" ;
      break;   
    case IndustryJobsEnum.TotalPrivateAllEmployeesAverageWeeklyHours :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "TotalPrivateEmployeesAverageWeeklyHours/Avg_WeeklyHours.csv" ;
      break;    
    case IndustryJobsEnum.MiningAndLogging : 
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "MiningandLogging/MiningandLogging.csv" ; 
      break;
    case IndustryJobsEnum.Construction:
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "Construction/Construction.csv";
      break;      

    case IndustryJobsEnum.Manufacturing:
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "Manufacturing/Manufacturing.csv" ;
      break;
    case IndustryJobsEnum.TradeTransportationAndUtilities :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "Trade/Trade.csv" ;
      break;   
    case IndustryJobsEnum.Information :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "Information/Information.csv" ;
      break;    
    case IndustryJobsEnum.FinancialActivities : 
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "FinancialActivities/FinancialActivities.csv" ; 
      break;
    case IndustryJobsEnum.ProfessionalAndBusinessServices:
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "ProfessionalandBusinessServices/ProfessionalandBusinessServices.csv" ;
      break;
    case IndustryJobsEnum.EducationalAndHealthServices :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "EducationalandHealthServices/EducationalandHealthServices.csv" ;
      break;   
    case IndustryJobsEnum.LeisureAndHospitality :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "LeisureandHospitality/LeisureandHospitality.csv" ;
      break;    
    case IndustryJobsEnum.OtherServices : 
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "OtherServices/OtherServices.csv" ; 
      break;
    case IndustryJobsEnum.Government :  
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Current Employment Statistics (CES)";
      theUrl =  globalURL +  "Government/Government.csv" ; 
      break;
      //Unemployment
    case MainEnum.UNEMPLOYMENT :

      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "UnemploymentRate/UnemploymentRate.csv" ; 
      break;
      //MSA      
    case MSAEnum.AkronMSA :  
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AkronMSAUnemploymentRate/AkronMSAUnemploymentRate.csv"; 
      break;
    case MSAEnum.CantonMassillonMSA :             
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "CantonMSAUnemploymentRate/CantonMSAUnemploymentRate.csv" ; 
      break;
    case MSAEnum.CincinnatiMSA :             
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "CincinnatiMSAUnemploymentRate/CincinnatiMSAUnemploymentRate.csv" ; 
      break;
    case MSAEnum.ClevelandElyriaMSA :             
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ClevelandMSAUnemploymentRate/ClevelandMSAUnemploymentRate.csv" ; 
      break;
    case MSAEnum.ColumbusMSA :     
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ColumbusMSAUnemploymentRate/ColumbusMSAUnemploymentRate.csv" ; 
      break;
    case MSAEnum.DaytonMSA :             
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "DaytonMSAUnemploymentRate/DaytonMSAUnemploymentRate.csv" ; 
      break;
    case MSAEnum.LimaMSA :             
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AllenCountyUnemploymentRate/AllenCountyUnemploymentRate.csv" ; 
      break;
    case MSAEnum.MansfieldMSA :             
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "RichlandCountyUnemploymentRate/RichlandCountyUnemploymentRate.csv" ; 
      break;
    case MSAEnum.SpringfieldMSA :   
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ClarkCountyUnemploymentRate/ClarkCountyUnemploymentRate.csv" ; 
      break;          
    case MSAEnum.ToledoMSA :     
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ToledoMSAUnemploymentRate/ToledoMSAUnemploymentRate.csv" ; 
      break;
    case MSAEnum.WeirtonSteubenvilleMSA :        
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "Weirton-SteubenvilleMSAUnemploymentRate/WeirtonMSAUnemploymentRate.csv" ;       
      break;
    case MSAEnum.YoungstownWarrenBoardmanMSA :  
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "YoungstownMSAUnemploymentRate/YoungstownMSAUnemploymentRate.csv" ; 
      break;

      // Counties
      
    case "Adams County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AdamsCountyUnemploymentRate/AdamsCountyUnemploymentRate.csv" ;
      break;	
    case "Allen County":
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AllenCountyUnemploymentRate/AllenCountyUnemploymentRate.csv" ;
      break;
    case "Ashland County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AshlandCountyUnemploymentRate/AshlandCountyUnemploymentRate.csv" ;
      break;
    case "Ashtabula County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AshtabulaCountyUnemploymentRate/AshtabulaCountyUnemploymentRate.csv" ;
      break;
    case "Athens County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AthensCountyUnemploymentRate/AthensCountyUnemploymentRate.csv" ;
      break;
    case "Auglaize County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "AuglaizeCountyUnemploymentRate/AuglaizeCountyUnemploymentRate.csv" ;  
      break;
    case "Belmont County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "BelmontCountyUnemploymentRate/BelmontCountyUnemploymentRate.csv" ; 
      break;
    case "Brown County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "BrownCountyUnemploymentRate/BrownCountyUnemploymentRate.csv" ; 
      break;
    case "Butler County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ButlerCountyUnemploymentRate/ButlerCountyUnemploymentRate.csv" ;  
      break;
    case "Carroll County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "CarrollCountyUnemploymentRate/CarrollCountyUnemploymentRate.csv" ;  
      break;
    case "Champaign County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ChampaignCountyUnemploymentRate/ChampaignCountyUnemploymentRate.csv" ; 
      break;
    case "Clark County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ClarkCountyUnemploymentRate/ClarkCountyUnemploymentRate.csv" ;
      break;
    case "Clermont County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ClermontCountyUnemploymentRate/ClermontCountyUnemploymentRate.csv" ; 
      break;
    case "Clinton County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ClintonCountyUnemploymentRate/ClintonCountyUnemploymentRate.csv" ;
      break;
    case "Columbiana County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ColumbianaCountyUnemploymentRate/ColumbianaCountyUnemploymentRate.csv" ;
      break;
    case "Coshocton County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "CoshoctonCountyUnemploymentRate/CoshoctonCountyUnemploymentRate.csv" ;
      break;
    case "Crawford County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "CrawfordCountyUnemploymentRate/CrawfordCountyUnemploymentRate.csv" ; 
      break;
    case "Cuyahoga County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "CuyahogaCountyUnemploymentRate/CuyahogaCountyUnemploymentRate.csv" ;
      break;
    case "Darke County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "DarkeCountyUnemploymentRate/DarkeCountyUnemploymentRate.csv" ;
      break;
    case "Defiance County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "DefianceCountyUnemploymentRate/DefianceCountyUnemploymentRate.csv" ;
      break;
    case "Delaware County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "DelawareCountyUnemploymentRate/DelawareCountyUnemploymentRate.csv" ;  
      break;
    case "Erie County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ErieCountyUnemploymentRate/ErieCountyUnemploymentRate.csv" ;
      break;
    case "Fairfield County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "FairfieldCountyUnemploymentRate/FairfieldCountyUnemploymentRate.csv" ; 
      break;
    case "Fayette County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "FayetteCountyUnemploymentRate/FayetteCountyUnemploymentRate.csv" ; 
      break;
    case "Franklin County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "FranklinCountyUnemploymentRate/FranklinCountyUnemploymentRate.csv" ; 
      break;
    case "Fulton County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "FultonCountyUnemploymentRate/FultonCountyUnemploymentRate.csv" ;
      break;
    case "Gallia County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "GalliaCountyUnemploymentRate/GalliaCountyUnemploymentRate.csv" ; 
      break;
    case "Geauga County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "GeaugaCountyUnemploymentRate/GeaugaCountyUnemploymentRate.csv" ; 
      break;
    case "Greene County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "GreeneCountyUnemploymentRate/GreeneCountyUnemploymentRate.csv" ; 
      break;
    case "Guernsey County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "GuernseyCountyUnemploymentRate/GuernseyCountyUnemploymentRate.csv" ; 
      break;
    case "Hamilton County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HamiltonCountyUnemploymentRate/HamiltonCountyUnemploymentRate.csv" ;
      break;
    case "Hancock County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HancockCountyUnemploymentRate/HancockCountyUnemploymentRate.csv" ;  
      break;
    case "Hardin County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HardinCountyUnemploymentRate/HardinCountyUnemploymentRate.csv" ;  
      break;
    case "Harrison County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HarrisonCountyUnemploymentRate/HarrisonCountyUnemploymentRate.csv" ;  
      break;
    case "Henry County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HenryCountyUnemploymentRate/HenryCountyUnemploymentRate.csv" ; 
      break;
    case "Highland County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HighlandCountyUnemploymentRate/HighlandCountyUnemploymentRate.csv" ; 
      break;
    case "Hocking County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HockingCountyUnemploymentRate/HockingCountyUnemploymentRate.csv" ; 
      break;
    case "Holmes County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HolmesCountyUnemploymentRate/HolmesCountyUnemploymentRate.csv" ;  
      break;
    case "Huron County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "HuronCountyUnemploymentRate/HuronCountyUnemploymentRate.csv" ;  
      break;
    case "Jackson County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "JacksonCountyUnemploymentRate/JacksonCountyUnemploymentRate.csv" ; 
      break;
    case "Jefferson County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "JeffersonCountyUnemploymentRate/JeffersonCountyUnemploymentRate.csv" ; 
      break;
    case "Knox County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "KnoxCountyUnemploymentRate/KnoxCountyUnemploymentRate.csv" ;  
      break;
    case "Lake County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LakeCountyUnemploymentRate/LakeCountyUnemploymentRate.csv" ;  
      break;
    case "Lawrence County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LawrenceCountyUnemploymentRate/LawrenceCountyUnemploymentRate.csv" ;  
      break;
    case "Licking County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LickingCountyUnemploymentRate/LickingCountyUnemploymentRate.csv" ; 
      break;
    case "Logan County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LoganCountyUnemploymentRate/LoganCountyUnemploymentRate.csv" ;  
      break;
    case "Lorain County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LorainCountyUnemploymentRate/LorainCountyUnemploymentRate.csv" ;  
      break;
    case "Lucas County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "LucasCountyUnemploymentRate/LucasCountyUnemploymentRate.csv" ;  	
      break;
    case "Madison County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MadisonCountyUnemploymentRate/MadisonCountyUnemploymentRate.csv" ;  
      break;
    case "Mahoning County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MahoningCountyUnemploymentRate/MahoningCountyUnemploymentRate.csv" ;
      break;
    case "Marion County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MarionCountyUnemploymentRate/MarionCountyUnemploymentRate.csv" ;  
      break;
    case "Medina County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MedinaCountyUnemploymentRate/MedinaCountyUnemploymentRate.csv" ; 
      break;
    case "Meigs County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MeigsCountyUnemploymentRate/MeigsCountyUnemploymentRate.csv" ;  	
      break;
    case "Mercer County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MercerCountyUnemploymentRate/MercerCountyUnemploymentRate.csv" ;  
      break;
    case "Miami County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MiamiCountyUnemploymentRate/MiamiCountyUnemploymentRate.csv" ;  
      break;
    case "Monroe County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MonroeCountyUnemploymentRate/MonroeCountyUnemploymentRate.csv" ;  
      break;
    case "Montgomery County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MontgomeryCountyUnemploymentRate/MontgomeryCountyUnemploymentRate.csv" ; 
      break;
    case "Morgan County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MorganCountyUnemploymentRate/MorganCountyUnemploymentRate.csv" ;  
      break;
    case "Morrow County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MorrowCountyUnemploymentRate/MorrowCountyUnemploymentRate.csv" ;  	
      break;
    case "Muskingum County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "MuskingumCountyUnemploymentRate/MuskingumCountyUnemploymentRate.csv" ;  
      break;
    case "Noble County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "NobleCountyUnemploymentRate/NobleCountyUnemploymentRate.csv" ;  
      break;
    case "Ottawa County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "OttawaCountyUnemploymentRate/OttawaCountyUnemploymentRate.csv" ;  
      break;
    case "Paulding County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PauldingCountyUnemploymentRate/PauldingCountyUnemploymentRate.csv" ;  
      break;
    case "Perry County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PerryCountyUnemploymentRate/PerryCountyUnemploymentRate.csv" ;  
      break;
    case "Pickaway County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PickawayCountyUnemploymentRate/PickawayCountyUnemploymentRate.csv" ;  	
      break;
    case "Pike County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PikeCountyUnemploymentRate/PikeCountyUnemploymentRate.csv" ;  	
      break;
    case "Portage County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PortageCountyUnemploymentRate/PortageCountyUnemploymentRate.csv" ;  
      break;
    case "Preble County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PrebleCountyUnemploymentRate/PrebleCountyUnemploymentRate.csv" ;  
      break;
    case "Putnam County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "PutnamCountyUnemploymentRate/PutnamCountyUnemploymentRate.csv" ;  
      break;
    case "Richland County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "RichlandCountyUnemploymentRate/RichlandCountyUnemploymentRate.csv" ;  
      break;
    case "Ross County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "RossCountyUnemploymentRate/RossCountyUnemploymentRate.csv" ;
      break;
    case "Sandusky County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "SanduskyCountyUnemploymentRate/SanduskyCountyUnemploymentRate.csv" ;  
      break;
    case "Scioto County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "SciotoCountyUnemploymentRate/SciotoCountyUnemploymentRate.csv" ;
      break;
    case "Seneca County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "SenecaCountyUnemploymentRate/SenecaCountyUnemploymentRate.csv" ; 
      break;
    case "Shelby County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "ShelbyCountyUnemploymentRate/ShelbyCountyUnemploymentRate.csv" ;  
      break;
    case "Stark County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "StarkCountyUnemploymentRate/StarkCountyUnemploymentRate.csv" ;  
      break;
    case "Summit County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "SummitCountyUnemploymentRate/SummitCountyUnemploymentRate.csv" ;  
      break;
    case "Trumbull County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "TrumbullCountyUnemploymentRate/TrumbullCountyUnemploymentRate.csv" ;
      break;
    case "Tuscarawas County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "TuscarawasCountyUnemploymentRate/TuscarawasCountyUnemploymentRate.csv" ;
      break;
    case "Union County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "UnionCountyUnemploymentRate/UnionCountyUnemploymentRate.csv" ;  
      break;
    case "VanWert County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "VanWertCountyUnemploymentRate/VanWertCountyUnemploymentRate.csv" ;  
      break;
    case "Vinton County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "VintonCountyUnemploymentRate/VintonCountyUnemploymentRate.csv" ;  
      break;
    case "Warren County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "WarrenCountyUnemploymentRate/WarrenCountyUnemploymentRate.csv" ;  
      break;
    case "Washington County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "WashingtonCountyUnemploymentRate/WashingtonCountyUnemploymentRate.csv" ; 
      break;
    case "Wayne County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "WayneCountyUnemploymentRate/WayneCountyUnemploymentRate.csv" ;  	
      break;
    case "Williams County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "WilliamsCountyUnemploymentRate/WilliamsCountyUnemploymentRate.csv" ; 
      break;      
    case "Wood County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "WoodCountyUnemploymentRate/WoodCountyUnemploymentRate.csv" ;  
      break;
    case "Wyandot County" :
      frmAbout.lblSource.text = "Bureau of Labor Market Information, Local Area Unemployment Statistics (LAUS)";
      theUrl =  globalURL +  "WyandotCountyUnemploymentRate/WyandotCountyUnemploymentRate.csv" ;  
      break;   

  }

  frmAbout.AboutButtonLink.toolTip = theUrl;
  frmAbout.AboutButtonLink.text = "Download";  

  //frmAbout.show();
}


function loadAbout(){

  var myUrl = theUrl; 
  kony.application.openURL(myUrl);
}


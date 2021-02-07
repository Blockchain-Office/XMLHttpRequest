/* =================================##==================================
#-----------------------------------#
# ULTRA CODEX MODELING
# AJAX SYS-LAYER LOADER
# AUTOR: 	Z
# EMAIL: 	hacks@blockchain-office.com
# VERSION: 	0.5.1.2021
# ULTRA CODEX CMS Version 4.0 (FALLOUT)
# AJAX SYS-LAYER LOADER BUILD: 051.2021 (AJAX/PHP EVAL HACK)
# Blockchain "Zero Ops Object Model" Version 0.1"
# BLockchain Polymorphism Version 0.1
# Crypt-Key: ED25519
# Developers: Eric Green, Ioannis Balasis, Z0OM
# FIPS PUB 202:
# 74e9b28223a67dda2e4c554280e7c4a51e7b95259310f882616774769653736b
# e75d05f6b9991cd04d810b2bea0d6443fdf202aa6b2ef8671220e90cecc2c264
#-----------------------------------#
#==================================================================== */
console.log("NT UCM");
/* INIT */
var xmlHttpObject = false;
if (typeof XMLHttpRequest != 'undefined') { xmlHttpObject = new XMLHttpRequest();}
if (!xmlHttpObject) {
    try { xmlHttpObject = new ActiveXObject("Msxml2.XMLHTTP");}
    catch(e) {
        try { xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");}
        catch(e) { xmlHttpObject = null; }
    }
}
/* LAYER */
function LDL(){
  console.log("LD LYR");
  if (xmlHttpObject.readyState == 4){
	var GetXON = xmlHttpObject.GetXIN;
	document.getElementById(GetXON).innerHTML = xmlHttpObject.responseText;
    }
}
/* MODUL */
function LM(ID_MOD,ID_LOD,ID_SLC,ID_EXE,LL,P_FORM){
  console.log("LD MDL");
  var ID_MOD 		= ID_MOD;
  var ID_LOD 		= ID_LOD;
  var ID_SLC		= ID_SLC;
  var ID_EXE 		= ID_EXE;
  var LL 		= LL;
  var P_FORM		= P_FORM;

  if(typeof ID_MOD	== 'undefined'){
 	    ID_MOD 	 = '0';	}
  if(typeof ID_LOD 	== 'undefined'){
	    ID_LOD 	 = '0';	}
  if(typeof ID_EXE 	== 'undefined'){	
	    ID_EXE 	 = '0';	}
  if(typeof ID_SLC 	== 'undefined'){
	    ID_SLC 	 = '0';	}
  if(typeof LL 	        == 'undefined'){
	    LL 		 = 'html'; }

  if(typeof P_FORM  	== 'undefined'){
	    P_FORM    	 = '0';	}
       else{P_FORM	 = '2'; }
	
  var sndX='ID_MOD='+ID_MOD+'&ID_LOD='+ID_LOD+'&ID_SLC='+ID_SLC+'&ID_EXE='+ID_EXE+'&P_FORM='+P_FORM;


  xmlHttpObject.open('post','',true);
  xmlHttpObject.GetXIN = LL;
  xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttpObject.onreadystatechange = LDL;
  xmlHttpObject.send(sndX);
}

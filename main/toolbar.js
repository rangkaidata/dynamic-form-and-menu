/*
 * auth: budiono
 * date: sep 16, 16:12, fri 2022;
 */
  
Toolbar.hide=function(indek){
  document.getElementById("frm_toolbar_hide_"+indek).style.display="inline";
  document.getElementById("frm_toolbar_hide_"+indek).onclick=function(){
    ui.hideMe(indek);
  }
}

Toolbar.more=function(indek,func){
  document.getElementById("frm_toolbar_more_"+indek).style.display="inline";
  document.getElementById("frm_toolbar_more_"+indek).onclick=func;
}

Toolbar.none=function(indek){
  document.getElementById("frm_toolbar_hide_"+indek).style.display="none";
  document.getElementById("frm_toolbar_more_"+indek).style.display="none";
}

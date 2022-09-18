/*
 * auth: budiono
 * date: sep 16, 15:24, fri 2022;
 */ 
 
Statusbar.html=function(indek,tulisan){
  document.getElementById('frm_statusbar_'+indek).innerHTML=tulisan;
}

Statusbar.message=function(indek,paket){
  this.html(indek,rangkai.replaceHTML(paket.msg)+' Task completed in '+paket.timer+'s');
}

Statusbar.ready=function(indek){
  this.html(indek,"Page ready");
}
Statusbar.proses=function(indek,txt){
  this.html(indek,'Start processing, please wait...'+txt);
}

Statusbar.wait=function(indek){
  this.html(indek,'Sending, please wait ...');
}

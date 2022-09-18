/*
 * auth: budiono
 * date: sep 13, 16:38, tue 2022;
 * edit: sep 15, 12:49, thu 2022;
 * edit: sep 16, 11:17, fri 2022;
 */ 
 
'use strict';

rangkai.content={};

const content=rangkai.content;

rangkai.tglSekarangUpdate=function(){
  var n99=new Date();
  var bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nop", "Des"];
  var hari99 = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return hari99[n99.getDay()]+', '+bulan[parseInt(n99.getMonth())]+' '+n99.getDate()+' '+ n99.getHours()+':'+('0'+n99.getMinutes()).slice(-2);
}

rangkai.exist=function(tiket){
  var adaBerapa=0;
  var baru=-1;
  
  for(var x=1;x<bingkai.length;x++){
    if(bingkai[x].menu.id==tiket.menu.id){
      if(bingkai[x].company.id==tiket.company.id){
        if(bingkai[x].closed==0){
          if(tiket.baru==true){
            adaBerapa++;
            bingkai[x].berapa=adaBerapa;
          }
          if(tiket.baru==false){
            baru=x;
            return x;
          }
        }
      }
    }
  }
  return -1;
}

rangkai.hitungKembar=function(tiket){// bingkai_double
  var total=0;
  for(var x=0;x<bingkai.length;x++){
    if(bingkai[x].menu.id==tiket.menu.id){
      if(bingkai[x].closed==0){
        total++;
      }
    }
  }
  if(total==0){return ''}
  return '-['+total+']';  
}

rangkai.hapus_px=function(px){
  return String(px).replace("px","");
}

rangkai.remPx=function(rem){    
  return (rem * parseFloat(getComputedStyle(document.documentElement).fontSize))+'px';
}

rangkai.remPxn=function(rem) {    
  return (rem * parseFloat(getComputedStyle(document.documentElement).fontSize));
}


//-----------------------------CONTENT------------------------------//
// content
rangkai.content.wait=function(indek){
  document.getElementById("frm_konten_"+indek).innerHTML=
    '<span style="background-color:gold;'
    +'padding:0.5rem;margin:0.1rem;border-radius:0rem 1rem 1rem;">'
    +'Sending, please wait ...</span>';
};
rangkai.content.html=function(indek,isi){
  document.getElementById("frm_konten_"+indek).innerHTML=isi;
}
rangkai.content.search=function(indek,func){
  this.html(indek,'<div style="padding:0.5rem;">'
    +bingkai.title(indek)
    +'<input type="text" id="text_search_'+indek+'"'
    +' placeholder="Type text to search ..."'
    +' value="'+jendela[indek].text_search+'"'
    +' onfocus="this.select()">'
    +'<button type="button"'
    +' id="btn_search_'+indek+'"'
    +' class="btn_search"></button></div>');

  document.getElementById('text_search_'+indek).focus();
  document.getElementById('btn_search_'+indek).onclick=func;
  statusbar.ready(indek);
}

rangkai.remToPixel=function(rem){// convertRemToPixel
  rem=String(rem).replace("px","");
  return Number(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

rangkai.pixelToRem=function(px) {// convertPixelToRem
  px=String(px).replace("px","");
  return Number(px) / parseFloat(getComputedStyle(document.documentElement).fontSize);
}

rangkai.show=function(indek){
  global.klik=false;
  if(bingkai[indek].closed==1){
    alert('This menu is dead');
  }
  else{
    ui.zindek++;
    ui.disabledAllTab();
    document.getElementById('app_recent_'+indek).disabled=true;
    ui.gantiJudul(indek);
    ui.bingkai_aktif(indek);
    document.getElementById('frm_'+indek).style.left=bingkai[indek].letak.kiri+'px';
    document.getElementById('frm_'+indek).style.display='inline';
    document.getElementById("frm_"+indek).style.zIndex=ui.zindek;
  }
}

rangkai.replaceHTML=function(str){
  if (typeof(str) == "string") {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
  }
  return str;
}

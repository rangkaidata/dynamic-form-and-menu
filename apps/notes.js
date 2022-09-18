/*
 * auth: budiono
 * date: sep 17, 10:53, sat 2022;
 */ 
 
 
'use strict';

var Notes={
  modul_name:'Notes',
  url:null
}

Notes.show=(tiket)=>{
  tiket.bisa.tambah=1;
  const baru=rangkai.exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiUtama(tiket);
    const indek=newReg.show();
    Notes.formCreate(indek);
  }else{
    rangkai.show(baru);
  }  
}

Notes.formCreate=(indek)=>{
  Toolbar.hide(indek);
  Notes.form(indek);
}

Notes.form=(indek)=>{
  const tinggi=document.getElementById('frm_konten_'+indek).offsetWidth+'px';
  const html='<div align="center">'
    +'<form autocomplete="off">'
      +'<textarea id="konten_'+indek+'"'
      +' spellcheck="false"'
      +' style="width:99%;height:'+tinggi+';top:0;border:0px;font-size:16px;">'
      +'</textarea>'
    +'</form>'
  +'</div>';
  content.html(indek,html);
  Statusbar.ready(indek);
  document.getElementById('konten_'+indek).focus();
}

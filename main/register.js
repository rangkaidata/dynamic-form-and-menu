/*
 * auth: budiono
 * date: sep 12, 09:06, mon 2022;
 * edit: sep 14, 07:54, tue 2022;
 */ 

'use strict';

var Register={
  modul_name:'Register',
  url:null
}

Register.show=(tiket)=>{
  tiket.bisa.tambah=0;
  const baru=rangkai.exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiUtama(tiket);
    const indek=newReg.show();
    Register.formCreate(indek);
  }else{
    rangkai.show(baru);
  }  
}

Register.formCreate=(indek)=>{
  Toolbar.hide(indek);
  Register.formEntry(indek);
}

Register.formEntry=(indek)=>{
  const html='<div align="center">'
    +'<form autocomplete="off" class="tetap-tengah">'
      +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
      +'<h1>REGISTER</h1>'
      +'<p><b>Dynamic Form</b></p>'
      +'<p><i>Javascript, HTML, and CSS</i></p>'
      
      +'<h1 style="color:gold">&#9733 &#9733 &#9733 &#9733 &#9733</h1>'
      +'<p>'
      +'<i>'
      +'#Javascript #AccountingComplete #Blockchain'
      +'</i>'
      +'</p>'
      
    +'</form>'
  +'</div>';
  content.html(indek,html);
  Statusbar.ready(indek);
}

/*
 * auth: budiono
 * date: sep 14, 17:00, mon 2022;
 */ 
 
'use strict';

var Forgot={
  modul_name:'Forgot Password',
  url:null
}

Forgot.show=(tiket)=>{
  tiket.bisa.tambah=0;
  const baru=rangkai.exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiUtama(tiket);
    const indek=newReg.show();
    Forgot.formCreate(indek);
  }else{
    rangkai.show(baru);
  }  
}

Forgot.formCreate=(indek)=>{
  Toolbar.hide(indek);
  Forgot.form(indek);
}

Forgot.form=(indek)=>{
  const html='<div align="center">'
    +'<form autocomplete="off">'
      +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
      +'<h1>FORGOT PASSWORD</h1>'
      +'<p><b>Dynamic Form</b></p>'
      +'<p><i>Javascript, HTML, and CSS</i></p>'
      
      +'<h1 style="color:gold">&#9733 &#9733 &#9733 &#9734 &#9734</h1>'
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

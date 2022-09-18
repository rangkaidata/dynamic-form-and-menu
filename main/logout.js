/*
 * auth: budiono
 * date: sep 14, 17:10, wed 2022;
 */ 
 
 
'use strict';

var Logout={
  modul_name:'Logout',
  url:null
}

Logout.show=(tiket)=>{
  tiket.ukuran.lebar=600;
  tiket.ukuran.tinggi=270;
  tiket.toolbar.ada=0;
  tiket.bisa.besar=0;
  tiket.bisa.kecil=0;
  tiket.statusbar.ada=0;

  const baru=rangkai.exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiSpesial(tiket);
    const indek=newReg.show();
    Logout.form(indek);
  }else{
    rangkai.show(baru);
  }  
}

Logout.form=(indek)=>{
  const html='<div align="center">'
    +'<form autocomplete="off">'
      +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
      +'<h1>LOGOUT</h1>'
      +'<p><b>Dynamic Form</b></p>'
      +'<p><i>Javascript, HTML, and CSS</i></p>'
      
      +'<h1 style="color:gold">&#9733 &#9733 &#9734 &#9734 &#9734</h1>'
      +'<p>'
      +'<i>'
      +'#Javascript #AccountingComplete #Blockchain'
      +'</i>'
      +'</p>'

      
    +'</form>'
  +'</div>';
  content.html(indek,html);
}

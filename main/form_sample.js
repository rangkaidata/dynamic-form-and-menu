/*
 * auth: budiono
 * date: sep 12, 19:35, mon 2022;
 * edit: sep 13, 13:15, tue 2022;
 */ 
 
 
'use strict';

var FormSample={
  modul_name:'Contoh',
  url:null
}

FormSample.show=(k)=>{
  food={
    indek:k,
    modul_name:FormSample.modul_name,
    menu_code:'kode',
    folder:'user@sample:',
    path:'',
  }
  ojek.push(food);
  
  const kode=ojek.length-1;
  const baru=rangkai.exist(kode);
  if(baru==-1){
    const newReg=new BingkaiUtama(kode,500,400);
    const indek=newReg.show();
    newReg.hapusTombolTutup(indek);
    FormSample.form(indek);
  }else{
    rangkai.show(baru);
  }
}

FormSample.form=(indek)=>{
  const html='<div id="myDiv">'
    +'<div autocomplete="off" class="tetap-tengah" id="myform">'
      +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
      
      +'<h1>DYNAMIC FORM</h1>'
      +'<h2>Indek: '+indek+'</h2>'
      +'<h2>zIndek: '+document.getElementById('frm_'+indek).style.zIndex +'</h2>'
      +'<ul>'
      +'<li><input type="button" '
        +' value="Create New Form" '
        +' onclick="NewSample.show(\''+indek+'\')">'
        +' </li>'
      +'<li><input type="button" '
        +' value="Create New Form Modal"'
        +' onclick="NewSampleModal.show(\''+indek+'\')">'
        +' </li>'
      +'<li><input type="button"'
        +' value="Create New Form With Sub Form"'
        +' onclick="NewSampleSub.show(\''+indek+'\')">'
        +' </li>'
      +'</ul>'
    +'</div>'
  +'</div>';
  content.html(indek,html);
}

var NewSample={
  modul_name:'New Form',
  url:null
}

NewSample.show=(k)=>{
  food={
    indek:k,
    modul_name:NewSample.modul_name,
    menu_code:NewSample.menu_code,
    folder:'user@new_sample:',
    path:'',
  }
  ojek.push(food);
  
  const kode=ojek.length-1;
  const baru=rangkai.exist(kode);
  if(baru==-1){
    const newReg=new BingkaiUtama(kode,400,400);
    const indek=newReg.show();
    NewSample.form(indek);
  }else{
    rangkai.show(baru);
  }
}

NewSample.form=(indek)=>{
  const html='<div id="doc_'+indek+'">'
    +'<form autocomplete="off" class="tetap-tengah" id="f_'+indek+'">'
      +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
      
      +'<h1>NEW FORM:</h1>'
      +'<h2>Indek: '+indek+'</h2>'
      +'<h2>zIndek: '+document.getElementById('frm_'+indek).style.zIndex +'</h2>'
    +'</form>'
  +'</div>';
  content.html(indek,html);
}


var NewSampleModal={}

NewSampleModal.show=(parent_)=>{
  food={
    indek:parent_,
    modul_name:"Form Modal",
    menu_code:"modal",
    folder:'user@form_modal:',
    path:'',
  }
  ojek.push(food);
  const kode=ojek.length-1;
  
  const modal=new BingkaiSpesial(kode,100,100);
  const indek=modal.show();
  
  const html='<h1>FORM MODAL</h1>';
  content.html(indek,html);
}


var NewSampleSub={
  modul_name:'New Form Sub',
  url:null
}

NewSampleSub.show=(k)=>{
  food={
    indek:k,
    modul_name:NewSampleSub.modul_name,
    menu_code:NewSampleSub.menu_code,
    folder:'user@new_sample_sub:',
    path:'',
  }
  ojek.push(food);
  
  const kode=ojek.length-1;
  const baru=rangkai.exist(kode);
   
  if(baru==-1){
    const newReg=new BingkaiUtama(kode,500,400);
    const indek=newReg.show();
    NewSampleSub.form(indek);
  }else{
    rangkai.show(baru);
  }
}

NewSampleSub.form=(indek)=>{
  const html='<div>'
    +'<form autocomplete="off" class="tetap-tengah">'
      +'<div id="msg_'+indek+'" style="margin-bottom:1rem;"></div>'
      
      +'<h1>NEW FORM:</h1>'
      +'<h2>Indek: '+indek+'</h2>'
      +'<h2>zIndek: '+document.getElementById('frm_'+indek).style.zIndex +'</h2>'
      
      +'<input type="button"'
      +' value="show sub form"'
      +' onclick="NewSampleSub.show(\''+indek+'\')">'
    +'</form>'
  +'</div>';
  content.html(indek,html);
}

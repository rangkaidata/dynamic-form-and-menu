/*
 * auth: budiono
 * date: sep 16, 16:25, fri 2022;
*/

var More={
  modul_name:'Login',
  url:null
}

More.show=(tiket)=>{
  tiket.ukuran.lebar=rangkai.remPxn(35); //500;
  tiket.ukuran.tinggi=rangkai.remPxn(15); //200;
  tiket.bisa.tutup=0;
  tiket.bisa.kecil=0;
  tiket.bisa.besar=0;
  tiket.statusbar.ada=0;
  
  const baru=rangkai.exist(tiket);
  if(baru==-1){
    const newReg=new BingkaiSpesial(tiket);
    const indek=newReg.show();
    More.formUpdate(indek);
  }else{
    rangkai.show(baru);
  }  
}

More.formUpdate=(indek)=>{
  Toolbar.none(indek);  
  More.form(indek)
  More.readID(indek)
}

More.form=(indek)=>{
  var kode="xyz";
  var ada=0;
  
  html='<div style="padding-left:2.5rem;padding-right:2.5rem;padding-top:1rem;">'
    +'<form autocomplete="off">'
    +'<ul>'
    +'<li>Menu ID: '+String(kode).slice(-5)+'</li>'
    +'<li>Menu Name: '+bingkai[indek].menu.name+'</li>'
    +'<li><label>';
    if(ada==1){
      html+='<input type="checkbox" id="add_to_home_'+indek+'" checked>Add to Home';
    }else{
      html+='<input type="checkbox" id="add_to_home_'+indek+'" >Add to Home';
    }
    html+='</label></li>'
    +'</ul>'
    +'<input type="button" onclick="ui.CLOSE(\''+indek+'\')" value="Close">'
    +'</form>'
    +'</div>';
  content.html(indek,html); 
}

More.readID=(indek)=>{
  
}

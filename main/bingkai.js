
/*
 * auth: budiono
 * name: studio
 * date: sep 12, 09:17, mon 2022
 * edit: sep 13, 13:15, tue 2022;
 * edit: sep 15, 12:23, thu 2022;
 * edit: sep 16, 11:17, fri 2022;
 * 
 * 
 * desc: tempat untuk membuat karya seni berbagai bentuk bingkai
 * raja, ratu, gajah, kuda, benteng, bidak
 * king, queen, bishop, knight, rook, pawn
 */ 

'use strict'

// camelCase: function
// PascalCase: Class
// snake_case: local const, variabel, name_file,
// UPPERCASE: global const, global variabel

'use strict';

document.onkeydown=function (t) {
  if(global.tabPasif==1){
    if(t.which == 9){// no tab 
      console.log('no-tab');
      return false;
    }
  }
}

class PapanB{
  constructor(indek){
    this.indek=indek;
    this.nama=bingkai[indek].nama;
    
    this.tengah=bingkai[indek].letak.tengah;
    this.atas=bingkai[indek].letak.atas;
    this.kiri=bingkai[indek].letak.kiri;
    this.lebar=bingkai[indek].ukuran.lebar;
    this.tinggi=bingkai[indek].ukuran.tinggi;
    
    this.bisa_tutup=bingkai[indek].bisa.tutup;
    this.bisa_kecil=bingkai[indek].bisa.kecil;
    this.bisa_sedang=bingkai[indek].bisa.sedang;
    this.bisa_besar=bingkai[indek].bisa.besar;
    this.bisa_tambah=bingkai[indek].bisa.tambah;
    this.bisa_diatur=bingkai[indek].bisa.ubah;
    
    this.modal=bingkai[indek].modal;
    
    this.warna=bingkai[indek].warna;
    
    this.path=bingkai[indek].path;
    this.zindek=bingkai[indek].zindek;

    this.ada_statusbar=bingkai[indek].statusbar.ada;
    this.statusbar_tinggi=bingkai[indek].statusbar.tinggi;

    this.titlebar_tinggi=bingkai[indek].titlebar.tinggi;

    this.ada_toolbar=bingkai[indek].toolbar.ada;
    this.tinggi_toolbar=bingkai[indek].toolbar.tinggi;
    this.warna_toolbar=bingkai[indek].toolbar.warna;
    
    this.unit=bingkai[indek].unit;
  }
  rangkaiBackground(){
    const newBack=document.createElement("div");
    newBack.setAttribute("id","back_"+this.indek);
    newBack.style.left="0px";
    newBack.style.top="0px";
    newBack.style.height=screen.height+'px';
    newBack.style.width=screen.width+'px';
    newBack.style.backgroundColor="lightgray";
    newBack.style.opacity=0.7;
    newBack.style.zIndex=parseInt(this.zindek)+1;
    newBack.style.position="fixed";
    document.body.appendChild(newBack);
  }
  rangkaiBingkai(){
    const newDiv = document.createElement("div");
    newDiv.className="jendela";
    newDiv.setAttribute("id","frm_"+this.indek);
    newDiv.style.position="fixed";
    newDiv.style.textAlign="center";
    newDiv.style.background=this.warna;
    newDiv.style.overflow="auto";
    newDiv.style.top=this.atas+rangkai.unit;
    newDiv.style.left=rangkai.hapus_px(this.kiri)+rangkai.unit;
    newDiv.style.width=this.lebar+rangkai.unit;
    newDiv.style.height=this.tinggi+rangkai.unit;
    newDiv.onclick=(event)=>ui_klik(event);
    newDiv.style.zIndex=parseInt(this.zindek)+1;
    newDiv.style.paddingTop=this.batas_atas;
    newDiv.style.border="1px solid #C0C0C0";
    newDiv.style.borderRadius="0.7rem";
    newDiv.style.boxShadow="0 5px 5px 0 rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.19)";
    newDiv.style.transition= "0.6s";
    newDiv.innerHTML=this.nama;
    newDiv.addEventListener('mousedown',Drag.init, false);//listener
    document.body.appendChild(newDiv);
  }
  rangkaiTombol(){//merah
    const backTombol=document.createElement("div");
    backTombol.style.top="0.1rem"
    backTombol.style.left=rangkai.remPx(0.1);
    backTombol.style.width="6rem";
    backTombol.style.height="1.2rem";
    backTombol.style.position="absolute";
    backTombol.style.borderRadius="1rem";
    backTombol.style.border="1px solid "+ui.warna.form;
    backTombol.style.display="block";
    backTombol.style.margin="1px";
    backTombol.style.backgroundColor=ui.warna.form;
    backTombol.style.textAlign="center";
    backTombol.style.float="left";
    backTombol.style.padding="0rem";
    backTombol.style.lineHeight="0";
    document.getElementById('frm_'+this.indek).appendChild(backTombol);
  }
  rangkaiTutup(){//merah
    const btnTutup=document.createElement("button");
    btnTutup.className='tombol';
    btnTutup.setAttribute("id","frm_btn_tutup_"+this.indek);
    btnTutup.style.top="0.3rem"
    btnTutup.style.left=rangkai.remPx(0.5);
    btnTutup.style.width="0.835rem";
    btnTutup.style.height="0.835rem";
    btnTutup.style.position="absolute";
    btnTutup.style.borderRadius="1rem";
    btnTutup.style.border="1px solid #ff4233";
    btnTutup.style.display="block";
    btnTutup.style.margin="1px";
    btnTutup.style.backgroundColor="#FF5050";
    btnTutup.style.textAlign="center";
    btnTutup.style.float="left";
    btnTutup.style.padding="0rem";
    btnTutup.style.lineHeight="0";
    btnTutup.style.color="white";
    const show_icon_indek=this.indek;
    btnTutup.onmouseover=function(){ui.ikonOn(show_icon_indek);};
    btnTutup.onmouseout=function(){ui.ikonOff(show_icon_indek);};
    document.getElementById('frm_'+this.indek).appendChild(btnTutup);
  }
  rangkaiTutupPOP(){//merah
    const btnTutup=document.createElement("button");
    btnTutup.className='tombol';
    btnTutup.setAttribute("id","frm_btn_pop_tutup_"+this.indek);
    btnTutup.style.top="0.3rem"
    btnTutup.style.left=rangkai.remPx(0.5);
    btnTutup.style.width="0.835rem";
    btnTutup.style.height="0.835rem";
    btnTutup.style.position="absolute";
    btnTutup.style.borderRadius="1rem";
    btnTutup.style.border="1px solid brown";
    btnTutup.style.display="block";
    btnTutup.style.margin="1px";
    btnTutup.style.backgroundColor="brown";
    btnTutup.style.textAlign="center";
    btnTutup.style.float="left";
    btnTutup.style.padding="0rem";
    btnTutup.style.lineHeight="0";
    btnTutup.style.color="white";
    const show_icon_indek=this.indek;
    btnTutup.onmouseover=function(){ui.ikonOn(show_icon_indek);};
    btnTutup.onmouseout=function(){ui.ikonOff(show_icon_indek);};
    document.getElementById('frm_'+this.indek).appendChild(btnTutup);
  }
  rangkaiKecil(){//kuning
    const buttonMin=document.createElement("button");
    buttonMin.className='tombol';
    buttonMin.setAttribute("id","frm_btn_mini_"+this.indek);
    buttonMin.style.top="0.3rem";
    buttonMin.style.left="2rem";
    buttonMin.style.width="0.835rem";
    buttonMin.style.height="0.835rem";
    buttonMin.style.position="absolute";
    buttonMin.style.borderRadius="1rem";
    buttonMin.style.border="1px solid gold";
    buttonMin.style.display="block";
    buttonMin.style.margin="1px";
    buttonMin.style.backgroundColor="#FFFF50";
    buttonMin.style.color="blue";
    buttonMin.style.padding="0rem";
    buttonMin.style.lineHeight="0";
    const show_icon_kecil=this.indek;
    buttonMin.onmouseover=function(){ui.ikonOn(show_icon_kecil);};
    buttonMin.onmouseout=function(){ui.ikonOff(show_icon_kecil);};
    document.getElementById('frm_'+this.indek).appendChild(buttonMin);
  }
  rangkaiBesar(){//hijau
    const btnMax=document.createElement("button");
    btnMax.setAttribute("id","frm_btn_maxi_"+this.indek);
    btnMax.className='tombol';
    btnMax.style.top="0.3rem";
    btnMax.style.left="3.5rem";
    btnMax.style.width="0.835rem";
    btnMax.style.height="0.835rem";
    btnMax.style.position="absolute";
    btnMax.style.borderRadius="1rem";
    btnMax.style.border="1px solid #50C878"; //#50C878
    btnMax.style.display="block";
    btnMax.style.margin="1px";
    btnMax.style.backgroundColor='#50D050';
    btnMax.style.color="#000";
    btnMax.style.padding="0";
    btnMax.style.lineHeight="0";
    const show_icon_besar=this.indek;
    btnMax.onmouseover=function(){ui.ikonOn(show_icon_besar);};
    btnMax.onmouseout=function(){ui.ikonOff(show_icon_besar);};
    document.getElementById('frm_'+this.indek).appendChild(btnMax);
  }
  rangkaiTambah(){// biru
    const btnTambah=document.createElement("button");
    btnTambah.className='tombol';
    btnTambah.setAttribute("id","frm_btn_add_"+this.indek);
    btnTambah.style.top="0.3rem";
    btnTambah.style.left='5rem';
    btnTambah.style.width="0.835rem";
    btnTambah.style.height="0.835rem";
    btnTambah.style.position="absolute";
    btnTambah.style.borderRadius="1rem";
    btnTambah.style.border="1px solid #00BFFF";
    btnTambah.style.display="block";
    btnTambah.style.margin="1px";
    btnTambah.style.backgroundColor='#85c1e9';
    btnTambah.style.color="#fff";
    btnTambah.style.padding="0";
    btnTambah.style.lineHeight="0";
    const show_icon_tambah=this.indek;
    btnTambah.onmouseover=function(){ui.ikonOn(show_icon_tambah);};
    btnTambah.onmouseout=function(){ui.ikonOff(show_icon_tambah);};
    document.getElementById('frm_'+this.indek).appendChild(btnTambah);
  }
  rangkaiSedang(){//abu-abu
    const btnRes=document.createElement("button");
    btnRes.setAttribute("id","frm_btn_rest_"+this.indek);
    btnRes.className='tombol';
    btnRes.style.top="0.3rem";
    btnRes.style.left="2rem";//rempx(3.5);
    btnRes.style.width="0.835rem";
    btnRes.style.height="0.835rem";
    btnRes.style.position="absolute";
    btnRes.style.borderRadius="1rem";
    btnRes.style.border="1px solid #C0C0C0"; //#00BFFF
    btnRes.style.display="block";
    btnRes.style.margin="1px";
    btnRes.style.backgroundColor="lightgrey";//#85c1e9
    btnRes.style.display="none";
    btnRes.style.color="green";
    btnRes.style.padding="0";
    btnRes.innerHTML="&#10064";
    const show_icon_sedang=this.indek;
    btnRes.onmouseover=function(){ui.ikonOn(show_icon_sedang);};
    btnRes.onmouseout=function(){ui.ikonOff(show_icon_sedang);};
    document.getElementById('frm_'+this.indek).appendChild(btnRes);
  }
  rangkaiDiatur(){
    const btnResize=document.createElement("div");
    btnResize.className='tombol';
    btnResize.setAttribute("id","frm_btn_size_"+this.indek);
    btnResize.style.width=rangkai.remPx(1);
    btnResize.style.height=rangkai.remPx(1);
    btnResize.style.cursor="se-resize";
    btnResize.style.position="absolute";
    btnResize.style.right=rangkai.remPx(0.2);
    btnResize.style.bottom=rangkai.remPx(0.2);
    btnResize.style.border="1px solid grey";
    btnResize.style.borderRadius="10px";
    btnResize.style.backgroundColor="lightGray";
    btnResize.addEventListener('mousedown',Resize.init, false);
    document.getElementById('frm_'+this.indek).appendChild(btnResize);
  }
  rangkaiKonten(){
    const divkonten=document.createElement("div");
    divkonten.setAttribute("id","frm_konten_"+this.indek);
    divkonten.className="konten";
    divkonten.style.left=0;
    divkonten.style.top=rangkai.remPx(4.3);
    divkonten.style.height=(this.tinggi-rangkai.remPxn(6))+'px';
    divkonten.style.width=parseInt(this.lebar)-rangkai.remPxn(0.5)+'px';
    if (this.ada_toolbar==0){
      divkonten.style.top=rangkai.remPx(1.55)
      divkonten.style.height=(this.tinggi-rangkai.remPxn(3.5))+'px';
    }
    divkonten.style.cursor="default";
    divkonten.style.position="absolute";
    divkonten.style.border="1px solid #ffff";
    divkonten.style.overflow="auto";
    divkonten.style.whiteSpace="nowrap";
    divkonten.style.textAlign="left";//this.isi_pinggir;
    divkonten.style.backgroundColor="white";
    document.getElementById('frm_'+this.indek).appendChild(divkonten);
  }
  rangkaiToolbar(){
    const toolBar=document.createElement("div");
    toolBar.setAttribute("id","frm_toolbar_"+this.indek);
    toolBar.style.position="absolute";
    toolBar.style.marginTop="0px";
    toolBar.style.top=this.titlebar_tinggi;
    toolBar.style.height=this.tinggi_toolbar+this.unit;
    toolBar.style.width=(this.lebar-rangkai.remPxn(1))+'px';
    toolBar.style.borderRadius="1%";
    toolBar.style.border="1px solid red";
    toolBar.style.backgroundColor=this.warna_toolbar;
    toolBar.style.cursor="default";
    toolBar.style.textAlign="left";
    toolBar.style.border="0";
    toolBar.style.padding="0.45rem 0.5rem";
    toolBar.addEventListener('mousedown',Drag.init, false);//listener
    toolBar.className="toolbar";
    document.getElementById('frm_'+this.indek).appendChild(toolBar);
  }
  rangkaiStatusbar(){
    const divstatusbar=document.createElement("div");
    divstatusbar.setAttribute("id","frm_statusbar_"+this.indek);
    divstatusbar.style.cursor="default";
    divstatusbar.style.position="absolute";
    divstatusbar.style.left=rangkai.remPx(0.5);
    divstatusbar.style.bottom="0.2rem";
    divstatusbar.style.border="0px";
    divstatusbar.style.backgroundColor="transparent";
    divstatusbar.innerHTML='Status: '+this.path;
    divstatusbar.style.textAlign="left";
    document.getElementById('frm_'+this.indek).appendChild(divstatusbar);
  }
  rangkaiToolbarHide(tiket){
    const toolbar_hide=document.createElement("button");
    toolbar_hide.setAttribute("id","frm_toolbar_hide_"+this.indek);
    toolbar_hide.classList.add('btn_hide');
    toolbar_hide.style.height=tiket.toolbar.button.tinggi+tiket.unit;//rempx(1.5);
    toolbar_hide.style.top=tiket.toolbar.button.atas+tiket.unit;//rangkai.remPx(0.1);
    toolbar_hide.style.marginLeft=tiket.toolbar.button.kiri+tiket.unit;//rempx(0.25);
    toolbar_hide.style.position="relative";
    toolbar_hide.style.display="none";
    toolbar_hide.style.cursor="pointer";
    document.getElementById('frm_toolbar_'+this.indek).appendChild(toolbar_hide);
  }

  rangkaiToolbarMore(tiket){
    const toolbar_more=document.createElement("button");
    toolbar_more.setAttribute("id","frm_toolbar_more_"+this.indek);
    toolbar_more.classList.add('btn_more');
    toolbar_more.style.height=tiket.toolbar.button.tinggi+tiket.unit;
    toolbar_more.style.top=tiket.toolbar.button.atas+tiket.unit;
    toolbar_more.style.marginLeft=tiket.toolbar.button.kiri+tiket.unit;
    toolbar_more.style.position="relative";
    toolbar_more.style.display="none";
    toolbar_more.style.cursor="pointer";
    document.getElementById('frm_toolbar_'+this.indek).appendChild(toolbar_more);
  }
  
  show(tiket){
    if(this.modal==1)this.rangkaiBackground();
    if(this.tengah==1){
      ui.cekUkuran();
      this.kiri=(parseInt(layar.lebar)/2)-(parseInt(this.lebar)/2);
      this.atas=(parseInt(layar.tinggi)/2)-(parseInt(this.tinggi)/2);
    }
    
    this.rangkaiBingkai();
    this.rangkaiKonten();
    if (this.ada_toolbar==1) {
      this.rangkaiToolbar();
      this.rangkaiToolbarHide(tiket);
      this.rangkaiToolbarMore(tiket);
    }
    
    
    if(this.ada_statusbar==1)this.rangkaiStatusbar();

    this.rangkaiTombol();
    if(this.bisa_tutup==1){
      if(this.modal==1){
        this.rangkaiTutupPOP();
      }else{
        this.rangkaiTutup();
      }
    }
    if(this.bisa_kecil==1)this.rangkaiKecil();
    if(this.bisa_besar==1)this.rangkaiBesar();
    if(this.bisa_sedang==1)this.rangkaiSedang();
    if(this.modal==0){
      if(this.bisa_tambah==1)this.rangkaiTambah();
    }
    if(this.bisa_diatur==1)this.rangkaiDiatur();    
  }
}

class BingkaiUtama{
  constructor(tiket){
    this.tiket=tiket;
  }
  show(){
    ui.zindek++;
    var indek=0;
    const berapa=rangkai.hitungKembar(this.tiket);
    bingkai.push(JSON.parse(JSON.stringify(this.tiket)));
    indek=bingkai.length-1;    
          
    // set properti disini
    bingkai[indek].id=indek;
    bingkai[indek].parent=this.tiket.parent
    bingkai[indek].menu.id=this.tiket.menu.id;
    bingkai[indek].menu.name=this.tiket.menu.name;
    bingkai[indek].menu.type=this.tiket.menu.type;
    
    bingkai[indek].berapa=berapa;
    bingkai[indek].folder=this.tiket.folder;
    bingkai[indek].path=this.tiket.folder
      +'/'+bingkai[indek].menu.name
      +' '+berapa;
    bingkai[indek].nama=bingkai[indek].path;
    

    bingkai[indek].ukuran.lebar=this.tiket.ukuran.lebar;
    bingkai[indek].ukuran.tinggi=this.tiket.ukuran.tinggi;
    
    bingkai[indek].letak.kiri=this.tiket.letak.kiri;
    bingkai[indek].letak.atas=this.tiket.letak.atas;

    if(this.tiket.baru==true){
      bingkai[indek].letak.kiri+=20;
      bingkai[indek].letak.atas+=20;
      bingkai[indek].baru=false;
    }
        
    bingkai[indek].zindek=ui.zindek;
    bingkai[indek].closed=0;//open
    bingkai[indek].status=0;//open

    // create bingkai
    global.klik=false;
    const k=new PapanB(indek);
    k.show(this.tiket);
    
    ui.gantiJudul(indek);
    ui.tambahWindow(indek,bingkai[indek].path);
    
    return indek;
  }
}    


class BingkaiSpesial{
  constructor(tiket){
    this.tiket=tiket;
  }
  show(){
    ui.zindek++;

    bingkai.push(JSON.parse(JSON.stringify(this.tiket)));
    const indek=bingkai.length-1;    
    
    // set properti disini
    bingkai[indek].id=indek;
    bingkai[indek].parent=this.tiket.parent;
    bingkai[indek].nama=this.tiket.menu.name;
    bingkai[indek].menu.id=this.tiket.menu.id;
    bingkai[indek].menu.name=this.tiket.menu.name;
    bingkai[indek].menu.type=this.tiket.menu.type;
    
    bingkai[indek].ukuran.lebar=this.tiket.ukuran.lebar;
    bingkai[indek].ukuran.tinggi=this.tiket.ukuran.tinggi;
    bingkai[indek].letak.tengah=1;
        
    bingkai[indek].zindek=ui.zindek;
    bingkai[indek].closed=0;//open
    bingkai[indek].status=0;//open
    
    bingkai[indek].modal=1;

    // create bingkai
    const k=new PapanB(indek);
    k.show(this.tiket);
    
    global.tabPasif=1;
    ui.modal=true;
    
    return indek;
  }
}

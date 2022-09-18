/*
 * auth: budiono
 * edit: sep 12, 09:00, mon 2022;
 * edit: sep 15, 11:59, thu 2022;
 * edit: sep 16, 10:29, fri 2022;
 */ 
 
'use strict';

var datanya=[
  {"id":"home","name":"&#9776","submenu":[],"status":"1","display":"inline-block"},
  {"id":"window","name":"Recent","submenu":[],"status":"1","display":"none"}
];
var ui={
  zindek:0,
  global_url:'',
  menu_bar_show:false,
  modal:false,
  warna:{
    form:'#F5F5F5',
    toolbar:'#F5F5F5',
  },
  titlebar:{
    tinggi:1.7,
    warna:"#d0d3d4",
  },
  unit:'rem',
};
var layar={
  lebar:0,
  tinggi:0,
}
var rangkai={
  unit:"px",
}
var global={
  login_blok:null,
  tabPasif:0,
  klik:true,
}
var Drag={};
var Resize={};
var nBebas={
  gimana:false,
  indek:-1
}
var bingkai_posisi=[{
  indek:0,
  dead:0,
  name:''
}];
var recent_count=0;
var bingkai=[{
  parent:0,
  nama:'',
  login:{
    id:null,
    name:'JS',
    full_name:'JavaScript',
  },
  company:{
    id:null,
    name:null,
  },
  invite:{
    id:null,
    name:null,
  },
  menu:{
    id:null,
    name:null,
    type:null,
    data:[],
  },
  group:{
    id:'net',
  },
  closed:1,
  status:1,
  letak:{
    tengah:0,
    atas:50,
    kiri:50,
  },
  ukuran:{
    lebar:500,
    tinggi:300,
  },
  bisa:{
    hilang:1,
    tutup:1,
    kecil:1,
    besar:1,
    sedang:1,
    tambah:1,
    gerak:1,
    ubah:1,
  },
  modal:0,
  child_free:true,
  path:'',
  folder:'',
  
  statusbar:{
    ada:1,
    tinggi:3.00,
  },
  titlebar:{
    ada:1,
    tinggi:1.50,
    warna:""
  },
  toolbar:{
    ada:1,
    tinggi:1.90,
    warna:'#F5F5F5',
    button:{
      atas:0.1,
      kiri:0.25,
      tinggi:1.50,
    }
  },
  warna:'#F5F5F5',
  unit:"rem",
  baru:false,
}];

var Menu=[];
var Toolbar={};
var Statusbar={};
var antrian=[];



function main(){  
  var paket={
    err:-1
  };
  if (bingkai[0].login.id==null){
    belumLogin(paket);
  }else{
    sudahLogin(paket);
  }

  ui.recentlyApp();
}

function sudahLogin(paket){
  Menu.server();
}

function belumLogin(paket){
  if (paket.err===24){
    // login expired
  }
  else{
    bingkai[0].login.id=null;
    sessionStorage.removeItem('login_id');
  }
  Menu.lokal();
}


function updateJam(){
  if(document.getElementById('menu_bar_r'))
  document.getElementById('menu_bar_r').innerHTML=rangkai.tglSekarangUpdate();
}

window.setInterval(updateJam,1000);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if(event.target.className!=='dropbtn'){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.style.display="none";
      ui.menu_bar_show=false;
    }
  }
} 

window.addEventListener('resize',()=>{
  ui.cekUkuran();
});

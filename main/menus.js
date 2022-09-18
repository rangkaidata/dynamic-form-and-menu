
/*
 * auth: budiono
 * date: sep 13, 08:50, mon 2022
 * edit: sep 14, 08:08, wed 2022;
 * edit: sep 16, 11:16, fri 2022;
 */ 

'use strict'

Menu.active={
  id:null,
  name:null,
}

Menu.server=function(){}

Menu.lokal=function(){
  Menu.login=[];
  
  const tree=[
    {parent:'root',id:'home',name:'Home',type:1},
    {parent:'root',id:'register',name:'Register',type:2},
    {parent:'root',id:'login',name:'Login',type:2},
    {parent:'root',id:'forgot',name:'Forgot Password','type':2},
    {parent:'root',id:'logout',name:'Logout','type':2},
    
    {parent:'home',id:'app',name:'Apps','type':1},
    {parent:'home',id:'company',name:'Company','type':1},
    {parent:'home',id:'setting',name:'Setting','type':3},
    
    {parent:'app',id:'notes',name:'Notes','type':2},
    {parent:'app',id:'tasktodo',name:'Task to do','type':2},
    {parent:'app',id:'message',name:'Message','type':2},
    {parent:'app',id:'calendar',name:'Calendar','type':2},
    
    {parent:'company',id:'sales',name:'Sales','type':1},
    {parent:'company',id:'purchases',name:'Purchases','type':1},
    {parent:'company',id:'general_ledger',name:'General Ledger','type':1},
    {parent:'company',id:'payroll',name:'Payroll','type':1},
    {parent:'company',id:'inventory',name:'Inventory','type':1},
    {parent:'company',id:'time_billing',name:'Time &amp; Billing','type':1},
    {parent:'company',id:'job',name:'Job Costing','type':1},
    {parent:'company',id:'company_setting',name:'Setting','type':3},
  ]

  var arr={
    id:bingkai[0].login.id,
    data:tree,
  }

  Menu.login.push(arr);
  
  for (var x in tree){
    if (tree[x].parent=='root'){
      arr={
        'id':tree[x].id,
        'name':tree[x].name,
        'type':tree[x].type,
      };
      datanya[0].submenu.push(arr);
    }
  }
  
  ui.setMenuBar();
  
  ui.changeMenuBarTitle(bingkai[0].login.full_name)
  
  bingkai[0].folder=bingkai[0].login.full_name
    +'@'+bingkai[0].group.id+':'

  document.getElementById('window').style.visibility='visible';
}

Menu.klik=function(nomer){
  const tiket=antrian[nomer];

  console.log('menu.klik: '+tiket.menu.id);

  Menu.type(tiket);
  switch(tiket.menu.type){
    case 0:
    case 1:
      Menu.showFolder(tiket);// bentuk folder
      break;
    case 2:
    case 3:
      Menu.showForm(tiket);// bentuk form
      break;
    default:
      console.log('Menu.modulKlik: '+tiket.menu.type);
  }
}

Menu.type=function(tiket){// ambil tipe
  Menu.access(tiket);
  for(var x=0;x<tiket.menu.data.length;x++){
    if (tiket.menu.data[x].id==tiket.menu.id){
      tiket.menu.name=tiket.menu.data[x].name
      tiket.menu.type=tiket.menu.data[x].type
    }
  }
}

Menu.access=function(tiket){// ambil access menu
  for(var i=0;i<Menu.login.length;i++){
    if(Menu.login[i].id==tiket.login.id){
      tiket.menu.data=Menu.login[i].data;
    }
  }
  if(tiket.menu.data==undefined){
    tiket.menu.data=[];
  }
}

Menu.showForm=function(tiket){  
  Menu.active.id=tiket.menu.id;
  Menu.active.name=tiket.menu.name;
  
  switch(tiket.menu.id){
    // non-login
    case 'home':Homes.show(tiket);break;
    case 'register':Register.show(tiket);break;
    case 'login':Login.show(tiket);break;
    case 'logout':Logout.show(tiket);break;
    case 'forgot':Forgot.show(tiket);break;
    // apps
    case 'notes':Notes.show(tiket);break;

    default:alert('Form "'+tiket.menu.id+'" belum ada.');
  }
}

Menu.showFolder=function(tiket){
  tiket.bisa.tambah=0;
  var baru=rangkai.exist(tiket);
  if(baru==-1){
    const tampil=new BingkaiUtama(tiket);
    const indek=tampil.show();
    Menu.dataFolder(indek);
  }else{
    rangkai.show(baru);
  }
}

Menu.dataFolder=function(indek){
  var html='';
  var jml=0;
  const paket=bingkai[indek].menu.data;

  for (var x in paket){
    if (paket[x].parent==bingkai[indek].menu.id){
      // obstraction of justice;
      const tiket=JSON.parse(JSON.stringify(bingkai[indek]));
      tiket.menu.id=paket[x].id;
      tiket.menu.folder=paket[x].folder;
      tiket.parent=indek;
      antrian.push(tiket);
      
      html+='<div style="width:6.5rem;'
        +'height:6.5rem;'
        +'word-wrap:inherit;'
        +'text-overflow:ellipsis;'
        +'overflow:hidden;'
        +'margin:0.1rem;'
        +'float:left;'
        +'border:0px;'
        +'border-radius:5%;'
        +'white-space:normal;text-align:center;'
        +'"'
        +'id="'+paket[x].id+'"'
        +'onclick="Menu.klik(\''+(antrian.length-1)+'\');"'
        +'onMouseOver="this.style.backgroundColor=\'lightgrey\'" onMouseOut="this.style.backgroundColor=\'white\'"'
        +'>'
        
        +'<div style="font-size:2.1rem;">'+Menu.ikon2(paket[x].type)+'</div>'
        +paket[x].name
      +'</div>'      
      jml++;
    }
  }
  if(jml==0){
    html='<div align="center">'
      +'<h1>Folder is Empty</h1>'
      +'<p>Menu ID: <b>['+bingkai[indek].menu.id+']</b></p>'
      +'</div>';
  }
  content.html(indek,html);
    
  Toolbar.hide(indek);
  Toolbar.more(indek,()=>{
    const x=JSON.parse(JSON.stringify(bingkai[indek]));
    x.menu.id="more";
    x.menu.name="More"
    More.show(x);
  });

  Statusbar.html(indek,jml+" items.");
}

Menu.ikon2=function(a){
  switch(a){
    case 0:
    return '&#127974;'; // home
    break;

    case 1:
    return '&#128193;'; // folder
    break;
    
    case 2:
    return '&#128221;';// paper with pencil
    break;
    
    case 3:
    return '&#128195;';// paper roll
    break;
  }
}




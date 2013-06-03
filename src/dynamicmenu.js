// <!--
var numofitems = 0;

//menu constructor
function menu(allitems,thisitem,startstate){ 
	callname= "gl"+thisitem;
	divname="subglobal"+thisitem;
	this.numberofmenuitems = allitems;
	this.caller = document.getElementById(callname);
	this.container = document.getElementById(divname);
	this.container.style.visibility = startstate;
	if(numofitems < thisitem) {
		numofitems = thisitem;
	}
}

//menu methods
function ehandler(event,theobj){
	for (var i=1; i<= numofitems; i++){
		var thediv =eval( "menuitem"+i+".container");
		thediv.style.visibility="hidden";
	}
	if (!(typeof theobj === 'undefined')) {
		theobj.container.style.visibility = "visible";
	}
}
				
function closesubnav(event){
	if ((event.clientY <48)||(event.clientY > 107)){
		for (var i=1; i<= numofitems; i++){
			var shutdiv =eval('menuitem'+i+'.container');
			shutdiv.style.visibility='hidden';
		}
	}
}
// -->
﻿/*basic*/
var agent=navigator.userAgent;
var isGecko= /Gecko/.test(agent);
var isOpera= /Opera/.test(agent);
var isIE= /MSIE/.test(agent);
function _id(_s){
	return document.getElementById(_s);
}
function isDef(val){
	try{var tmp=eval(val);if(typeof(eval(val))!="undefined") return true;}catch(e){} //return typeof(val)!="undefined";
	return false;
}
var loaded={basic:true}; var tmpjs={i:0,_g:{}};
function loadjs(_g,_cb,_u1,_u2,_t){
	loaded._g=tmpjs._g=_g=_g.split(/[\s\,]+/);var _u1=_u1||(_u1==''?'':'js/');var _u2=_u2||(_u2==''?'':'.js');tmpjs._cb=_cb;
	for( var i =0; i < _g.length ; i++){
	    if(!loaded[_g[i]]){
			var x = document.createElement(_t||'script');x.src = _u1 + _g[i] + _u2;x.xid=_g[i];x.id="$"+_g[i]+"$";x.onload=function(){loaded[this.xid]=true;};
			document.getElementsByTagName("head")[0].appendChild(x);
		}
	}
	if(_cb) tmpjs.timeout=setTimeout(checkloaded,50);
}
function checkloaded(){
	var flag=true;
	for( var i =0; i < tmpjs._g.length ; i++){
		if(!loaded[tmpjs._g[i]]) flag=false;
	}
	//self.status=_id("$"+tmpjs._g[0]+"$").src+","+tmpjs.i;
	tmpjs.i++;clearTimeout(tmpjs.timeout);
	if(flag){tmpjs._cb();}else{tmpjs.timeout=setTimeout(checkloaded,100);};
}
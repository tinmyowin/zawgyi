function _activate(_s,flag){
	_id(_s).style.display=flag!=false?"":"none";
	_id(_s).visible=flag!=false?false:true;
}
function _deactivate(_s){
	_id(_s).style.display="none";
	_id(_s).visible=false;
}
function _show(_s,flag){
	_id(_s).style.visibility=flag!=false?"visible":"hidden";
	_id(_s).visible=flag!=false?false:true;
}
function _hide(_s){
	_id(_s).style.visibility="hidden";
	_id(_s).visible=false;
}
function rnd(){
	return Math.random();
}
function fillZero(str,len){
	var ret=String(str);
	while(ret.length < len){
		ret="0"+ret;
	}
	return ret;
}
function isEmail(str){
	return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(str);
}
function CInt(str){
	try{var i1=parseInt(str);
		return i1;
	}catch(exp){
		return false;
	}
}
function setZorder(_s,order){
	if(document.getElementById)document.getElementById(_s).style.zIndex=order;
	else if(document.all)document.all(_s).style.zIndex=order;else if(document.layers)document.layers[_s].zIndex=order;
}
function getZorder(_s,order){
	if(document.getElementById)return document.getElementById(_s).style.zIndex;
	else if(document.all)return document.all(_s).style.zIndex;else if(document.layers)return document.layers[_s].zIndex;
}
function openDialog(_s,w,h,strName){
	window.open(_s,strName?strName:'_blank','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width='+(!w?420:w)+',height='+(!h?300:h));
}
function FlashObject(id,width,height,path,flashvars,transparent,scale){
	var html='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+width+'" height="'+height+'" id="'+id+'" >'+'<param name=movie value="'+path+'" />'+ '<param name=quality value="high" />'+ '<param name=play value="true" />'+ '<param name=bgcolor value="#ffffff" />'+(transparent?'<param name="wmode" value="transparent" />':'')+(!scale?'<param name="scale" value="noscale" />':'')+'<param name="FlashVars" value="'+flashvars +'" />'+ '<embed src="'+path+'" FlashVars="'+flashvars+'" menu="false" '+(scale?'scale="noscale" ':'')+(transparent?'wmode="transparent"':'')+' quality=high bgcolor=#ffffff width="'+width+'" height="'+height+'" name="'+id+'" align="" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" />'+'</object>';
	return html;
}
function cutStr(str,l){
	var ret=str;
	if(str){
		ret=(str.length >l? str.substr(0,l)+"..." : str);
	}
	return ret;
}
/* written by chris wetherell */
function _mozWrap(txtarea, lft, rgt, _offset, _offset2) {
	rgt=rgt||'';_offset=_offset||0;_offset2=_offset2?(_offset2-1):0;var _sctop=txtarea.scrollTop;
    var selLength = txtarea.textLength;
    var selStart = txtarea.selectionStart - _offset2;
    var selEnd = txtarea.selectionEnd - _offset2;
    if (selEnd==1 || selEnd==2) selEnd=selLength;
    var s1 = (txtarea.value).substring(0,selStart-_offset);
    var s2 = (txtarea.value).substring(selStart, selEnd);
    var s3 = (txtarea.value).substring(selEnd, selLength);
    txtarea.value = s1 + lft + s2 + rgt + s3;
    txtarea.selectionStart = txtarea.selectionEnd = selStart+(lft.length-_offset)+_offset2;
    txtarea.scrollTop=_sctop;
    return false;
}
function _IEWrap(txtarea, lft, rgt, _offset,_offset2) {
	rgt=rgt||'';_offset=_offset||0;_offset2=_offset2?(_offset2-1):0;
	txtarea.focus();
	var dummy="\u200B\u200C\u200B";
	var _range = document.selection.createRange();
	_range.moveStart("character", -_offset2); //move -_offset2 char back
	var s2= _range.text;
	document.selection.createRange().text = _range.text + dummy;
	var selStart= txtarea.value.indexOf(dummy)-_offset2;
	var s1= txtarea.value.substring(0,selStart-_offset-s2.length);
	var s3 = txtarea.value.substring(selStart+dummy.length, txtarea.value.length);
	
	txtarea.value = s1 +  lft + s2 + rgt +s3;
	
	_range = txtarea.createTextRange(); //clear the selections
	_range.collapse(true);
	
	var _r_n = s1.split("\r\n").length-1; //f**kin windows and IE
	_range.moveStart("character", selStart+(lft.length-_offset)-_r_n);
	_range.select();

	return false;
}
function _Wrap(txtarea, lft, rgt, _offset,_offset2){
	isIE?_IEWrap(txtarea, lft, rgt, _offset,_offset2):_mozWrap(txtarea, lft, rgt, _offset,_offset2);
}
function isNaNB(str){
	if(typeof(str)=='number' || typeof(str)=='boolean'){
		return false;
	}else if(typeof(str)=='string'){
		try{if(str==null)return false;
			if(str=="")return true;
			if(str=="false" || str=="true")return false;
			if(isNaN(str))return true;
			if(str)return true;
		}catch(e){
			return true;
		}
	}else{
		return true;
	}
	return true;
}
function getOS(){
	if(navigator.userAgent.indexOf("Windows")!=-1){
		return "Windows";
	}else if(navigator.userAgent.indexOf("Macintosh")!=-1){
		return "Mac";
	}
	return;
};
function nSort(a,b){
	return a - b;
}
function getTab(tab,tchar){
	var ret="\n";
	for(var i=0;i < tab;i++){
		ret +=tchar;
	}
	return ret;
}
function _loadQueryString(){
	for(var item in query=location.search.substr(1).split('&'))eval(query[item].replace('=','="')+'"');
};
String.prototype.inc=function(_s){
	var ret = -1;
	if(arguments.length!=1) return ret;
	if(typeof(_s)!="array" && typeof(_s)!="object") return ret;
	for(var i1=0;i1<_s.length;i1++){
		if(this==_s[i1]) ret = i1;
	};
	//alert(typeof(_s));
	return ret;
};
//alert("test".in(["test2","test1","test","test3"]));
String.prototype.reverse=function(){
	var ret="";
	for(var i=0;i <this.length;i++){
		ret=this.charAt(i)+ret;
	};
	return ret;
};
String.prototype.htmlSpecialChars=function(){
	try{var iStringLength=this.length;
		var sModifiedString='';
		for(var i=0;i < iStringLength;i++){
			switch(this.charCodeAt(i)){
				case 34 : sModifiedString +='&quot;';break;
				case 38 : sModifiedString +='&amp;';break;
				case 39 : sModifiedString +='&#39;';break;
				case 60 : sModifiedString +='&lt;';break;
				case 62 : sModifiedString +='&gt;';break;default : sModifiedString +=this.charAt(i);
			}
		}
	}catch(vError){
	
	}finally{
		return sModifiedString;
	}
};
String.prototype.normalChars=function(){
	var ret=this;
	var htmlChars={html : ['&quot;','&amp;','&#39;','&lt;','&gt;' ],normal : ['"','&','`','<','>']};
	for(var i=0;i < htmlChars.html.length;i++){
		while(ret.indexOf(htmlChars.html[i])!=-1){
			ret=ret.replace(htmlChars.html[i],htmlChars.normal[i]);
		}
	}
	return ret;
};
function addSlash(str){
	return str.replace(/([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])/g,'\\$1');
}
;String.prototype.addSlash=function(){
	return addSlash(this);
};
function trim(str){
	return str.replace(/^[\s\u200B]+|[\s\u200B]+$/gm,'');
};
function ctrim(str){
	return trim(str).replace(/^\,+|\,+$/gm,'')
};
String.prototype.trim=function(){
	return trim(this);
};
String.prototype.ctrim=function(){
	return ctrim(this);
};
String.prototype.zfill = function(len){
	return fillZero(this,len);
};
function _xy(x) {
	obj = _id(x);
	var _left =obj.offsetLeft; var _top = obj.offsetTop;
	while (obj=obj.offsetParent) {
		_left += obj.offsetLeft;
	}
	obj = _id(x);
	while (obj=obj.offsetParent) {
		_top += obj.offsetTop;
	}
	return [_left,_top];
}
function unichr(x){
	return String.fromCharCode(x);
}
function len(x){
	return x.length;
}
function str(x){
	return String(x);
};
function escapeu(str){
	return escape(str).replace(/\%/g,'\\');
}
function unescapeu(str){
	return unescape(str.replace(/\\/g,'%'));
}
function unescapeuc(str){
	return unescape(str.replace(/\\([0-7][0-9A-F])/g,'%$1'));
}
// loading tricks
var loadingstr='<div id="loading" style="visibility:visible;z-index:1000;color:#ffffff;background-color:#ff0000;position:absolute;top:0;left:90%;width:10%;text-align: center;vertical-align:middle;">Loading...</div>';
function loadingbar(flag,callback){
	if(flag){
		if(_id('loading')){
			_show("loading");
		}else{
			var txtdiv = document.createElement("div");
			txtdiv.innerHTML = loadingstr;
			document.body.appendChild(txtdiv);
		}
		setTimeout(eval(callback),100);
	}else{
		_hide("loading");
	}
}
//date time functions
function getDate( inStr ) {
	var ret;
	if(inStr.length == 8 ) {
		ret = new Date( inStr.substr(0,4), inStr.substr(4,2) - 1, inStr.substr(6,2) );
	}else if(inStr.length == 14 ) {
		ret = new Date( inStr.substr(0,4), inStr.substr(4,2) - 1, inStr.substr(6,2) , inStr.substr(8,2) , inStr.substr(10,2), inStr.substr(12,2));
	}
	return ret;
}
function GetCurDateStr(){
	var d=new Date();
	return d.getFullYear()+d.getMonth()+d.getDate()+"T"+d.getHours()+d.getMinutes()+d.getSeconds();
}
function getDay(inDate){
	var dayArry=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	return dayArry[inDate.getDay()];
}
function addDate( inDate, val ){
	var tmp = inDate.getTime();
      tmp = tmp + 86400000 * val;
      return(new Date(tmp));
}
function addMS( inDate, val){
	var tmp = inDate.getTime();
      tmp = tmp + val;
      return(new Date(tmp));
}
;loaded.lib=true;
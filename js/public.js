window.onload = function(){
var logo = document.getElementById('logo');
logo.onmouseover = function(){
	this.className = 'Ilogo marS';
}
logo.onmouseout = function(){
	this.className = 'Ilogo';
}



//返回顶部
var oBtn = document.getElementById('btn');

oBtn.onclick = function(){
	window.scroll(0,0);
};

function returnTop(){
	if( scrollY() > 0 ){
		
		oBtn.style.display = 'block';
		
	}else{
	
		oBtn.style.display = 'none';	
		
	}
	

	if( isIe6() ){
	
		oBtn.style.top = view().h - oBtn.offsetHeight	- 10 + scrollY() + 'px';
		
		window.onresize = function(){
			
			oBtn.style.top = view().h - oBtn.offsetHeight	- 10 + scrollY() + 'px';
			
		};
		
}	
	
	}



window.onscroll = function(){
	divFix && divFix();
	returnTop();
}


}
//封装函数兼容性
function scrollY(){
	return document.body.scrollTop || document.documentElement.scrollTop;
}


function offsetH(){
	return document.body.offsetHeight;	
}

function scrollH(){
	return document.body.scrollHeight;	
}

function view(){
	return {
		w : document.documentElement.clientWidth,
		h :	document.documentElement.clientHeight
	}	
}



function isIe6(){

	var str = window.navigator.userAgent.toLowerCase();
	if( str.indexOf('msie 6') !=-1 )return true;
	return false;
	
}
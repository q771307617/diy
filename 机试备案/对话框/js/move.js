function starmove(obj,json){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
	var flag=true;
	for(var attr in json){
		if(attr=="opacity"){
			var iCur=Math.round(parseFloat(getStyle(obj,attr)*100));
		}else{
			var iCur=parseInt(getStyle(obj,attr));
		}
		var itaget=json[attr];
		var speed=(itaget-iCur)/8;
		var ospeed=speed>0 ? Math.ceil(speed) :Math.floor(speed);
		if(attr=="opacity"){
			obj.style.opacity=(ospeed+iCur)/100;
			obj.style.filter="alpha(opacity="+ospeed+iCur+")";
		}else{
			obj.style[attr]=ospeed+iCur+"px"
		}
		if(iCur!=itaget){
			flag=false;
		}
	}
	if(flag){
		clearInterval(obj.timer)
	}
	},30)
	
}
function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		}
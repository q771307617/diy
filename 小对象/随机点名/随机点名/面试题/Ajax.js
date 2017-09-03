function ajax(data){
	var oAjax = null;
	if(window.XMLHttpRequest){
		oAjax = new XMLHttpRequest();
	} else {
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	oAjax.open(data.type?data.type:"GET",data.url,true);
	
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState == 4){
			if(oAjax.status == 200){
				data.callback(oAjax.responseText);
			}
		}
	}
	oAjax.send();
}




 function getDate(oDate, str) {
		var yy = oDate.getFullYear();
		var mm = oDate.getMonth() + 1;
		var dd = oDate.getDate();
		var hh= oDate.getHours();
		var ff=oDate.getMinutes();
		var ss=oDate.getSeconds();
		mm = mm < 10 ? "0" + mm : mm;
		dd = dd < 10 ? "0" + dd : dd;
     	hh = hh < 10 ? "0" + hh :hh;
		ff = ff < 10 ? "0" + ff : ff;
		ss = ss < 10 ? "0" + ss : ss;
		var dateStr = yy + str + mm + str + dd+"　"+ hh + ":" + ff+":"+ss;
		return dateStr;

	}
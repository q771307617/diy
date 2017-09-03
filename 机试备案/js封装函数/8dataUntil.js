/**
 * Created by jameswatt on 2017/2/7.
 */
//根据getDay()来得到星期几？
function getDay(N){
    switch(N) {
        case 0 : return "星期日";
        case 1 : return "星期一";
        case 2 : return "星期二";
        case 3 : return "星期三";
        case 4 : return "星期四";
        case 5 : return "星期五";
        case 6 : return "星期六";
    }
}

//给个位数补零
function toDouble(num){
    var str = num.toString();
    return str.length<2 ? "0"+str : str;
}

//把一个日期对象变成字符串并返回
function date2String(d){
    return d.getFullYear()+""+toDouble(d.getMonth()+1)+"月"
        +toDouble(d.getDate())+"日 "+toDouble(d.getHours())+":"+toDouble(d.getMinutes())+":" +
        toDouble(d.getSeconds()) +' '+getDay(d.getDay());
    //布尔表达式 ? 语句1 : 语句2   三目运算符  三元运算符
    //如果表达式为true，则执行语句1，否则执行语句2
}

//根据指定的年份，判断是否为闰年，并返回结果
function isLeapYear(year){
    if( (year%100!=0 && year%4==0) || (year%100==0 && year%400==0) ) {
        return true;
    } else {
        return false;
    }
}

//根据指定的月份，获得该月有多少天
function getDayCountByMonth(month){
    switch(month) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 : return 31;
        case 2 : return 28;
        case 4 :
        case 6 :
        case 9 :
        case 11 : return 30;
    }
}

//将字符串转换为日期

function str2Date(str){
    var mills = Date.parse(str);//毫秒数
    var now = new Date();
    now.setTime(mills);
    console.log( date2String(now) );
}

// 计算两个日期之间相差的天数
function between(start , end){
    var time1 = start.getTime();
    var time2 = end.getTime();
    return Math.abs(time2-time1)/(1000*60*60*24);
}

//获取N天以后的日期
function getDateAfter(N){
    var now = new Date();
    now.setDate( now.getDate()+N );
    return now;
}



















	
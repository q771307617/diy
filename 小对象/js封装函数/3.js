/**
 * Created by jameswatt2008 on 2017/5/17.
 */
console.log(1)

var a = 1;
var b = 2

for(var i=100;i<=999;i++){

    i; //获取i 十位 个位  百位

    // 204  4,   204/10 = 20.4 ->20 20%10=0     20/10=2 ->2
    var ge = i%10;
    var shi = parseInt(i/10)%10;
    var bai = parseInt(i/100)%10;

//            document.write(i+' '+bai+shi+ge +'<br/>');
    if( i == ge*ge*ge+shi*shi*shi+bai*bai*bai ){
        document.write(i+'<br/>')
    }


}
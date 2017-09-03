/**
 * Created by jameswatt2008 on 2017/5/23.
 */

"use strict";

//禁止函数内部this关键字指向全局对象，this指向undefined。
f1();
function f1() {
    console.log(this,'aaaa');
}
f1();


//严格模式只允许在全局作用域或函数作用域的顶层声明函数
if(1){
    // function f2() {
    //
    // }
}



//立即执行的匿名函数

var box =1;

//立即执行函数 之前 加 分号，防止别人不分号报错
;(function() {
    "use strict";

    var age = 19;
    console.log(age)

    function box() {
        
    }
    

    //形参不能重复
    // function box(a,a) {
    //
    // }

    //不能用with 语句
//     var obj ={name:'张三',age:18};
//
// // obj.name = 'aa';
// // console.log(obj.name);
//
//
//     with (obj){
//         console.log(name);// obj.name
//     }











})();










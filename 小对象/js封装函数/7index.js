/**
 * Created by jameswatt2008 on 2017/5/23.
 */

function show(a,a) {

}

//全局变量，全局函数 都是属于window
var box  = 10000000;
console.log(box);
console.log(window.box);



if(1){
    function app1() {
        console.log(22222222)
    }
    app1();

}


//函数调用可以在定义之前
app();


function app() {
    //普通函数当中 this 指向 window
    //谁调用的函数，this就指向谁
    console.log(this)

}

app();

window.app();



//with 语句
var obj ={name:'张三',age:18};

// obj.name = 'aa';
// console.log(obj.name);


with (obj){
    console.log(name);// obj.name
}

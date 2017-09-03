/**
 * Created by jameswatt2008 on 2017/6/5.
 */

function animate(div,targetX) {
    var target = targetX;
    div.timer =  setInterval(function () {
        //
        //
        var speed = Math.floor((target - div.offsetLeft)/8);
        div.style.left = div.offsetLeft + speed +'px';
        console.log(div.offsetLeft,speed )
        // if(div.offsetLeft <= target){
        //     clearInterval(div.timer);
        // }
    },30);
}
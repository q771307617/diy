/**
 * Created by jameswatt2008 on 2017/6/8.
 */
function lunbo(obj) {
    //{className:'box',isAutoPlay:true,autoPlayTime:2000}
    this.box = document.getElementsByClassName(obj.className)[0];
    this.ul = this.box.getElementsByClassName('item')[0];
    this.lis = this.ul.getElementsByTagName('li');
    this.current = 0;//控制当前的页码
    this.rightBtn = this.box.getElementsByClassName('rightBtn')[0];
    this.leftBtn = this.box.getElementsByClassName('leftBtn')[0];
    this.atuoPlaytimer = null;
    this.page = this.box.getElementsByClassName('page')[0];
    this.pageLis = this.page.getElementsByTagName('li');
    this.isAutoPlay = obj.isAutoPlay;
    this.autoPlayTime = obj.autoPlayTime;//自动播放的事件

    var that = this;

    this.picNum = this.lis.length;
    this.boxWidth = this.box.offsetWidth;


    // 无缝轮播，必须 在尾部要添加一个图片（第一张图）;
    this.addPic = function () {
        // var img1 = document.getElementsByClassName( 'img1')[0];
        var cloneFirstLi = document.createElement('li');
        var img = document.createElement('img');
            // img.src = 'images/1.jpg'
        img.src = this.lis[0].firstElementChild.src;
        //         img.src = img1.src;
        cloneFirstLi.appendChild(img);
        this.ul.appendChild(cloneFirstLi);
    };
    //添加左右按钮的点击事件
    this.addBtnEvent = function () {
        console.log(this);//lunbo对象
        this.rightBtn.onclick = function () {
            console.log(this)//按钮
            that.current++;
            if(that.current == that.picNum+1){
                that.ul.style.left = 0+'px';
                that.current=1;
                console.log(that.ul.style.left)
            }
            //1
            animate(that.ul,{left:-that.boxWidth*that.current});

            if(that.current == that.picNum){
                that.showCurrentPagePoint(0)
            }else{
                that.showCurrentPagePoint(that.current)

            }
        };

        this.leftBtn.onclick = function () {
            that.current--;
            if(that.current == -1){
                that.ul.style.left = -that.picNum*that.boxWidth+'px';
                that.current=that.picNum-1;
            }
            //1
            animate(that.ul,{left:-that.boxWidth*that.current});
            that.showCurrentPagePoint(that.current);
        }
    }
    //添加 自动播放 功能
    this.addAutoPlay = function () {
        this.atuoPlaytimer = setInterval(function () {
            that.rightBtn.onclick();
        },that.autoPlayTime);

        this.ul.onmouseenter = function () {
            clearInterval(that.atuoPlaytimer)
        }
            that.rightBtn.onmouseenter = function () {
                    clearInterval(that.atuoPlaytimer)
                }
            that.leftBtn.onmouseenter = function () {
                clearInterval(that.atuoPlaytimer)
            }
        this.ul.onmouseleave = function () {
            clearInterval(that.atuoPlaytimer)
            that.atuoPlaytimer = setInterval(function () {
                that.rightBtn.onclick();
            },that.autoPlayTime);
        };
        //点击小圆点
        this.page.onmouseenter = function () {
            clearInterval(that.atuoPlaytimer)
        }
        this.page.onmouseleave = function () {
            clearInterval(that.atuoPlaytimer)
            that.atuoPlaytimer = setInterval(function () {
                that.rightBtn.onclick();
            },that.autoPlayTime);
        }


    }
    //控制小圆点的显示
    this.showCurrentPagePoint =  function (current) {

        for(var i=0;i<this.pageLis.length;i++){
            this.pageLis[i].style.background = 'yellowgreen';
        }
        this.pageLis[current].style.background = 'white';

    }
    //
    //添加小圆点的事件
    this.addPageEvent = function () {
        for(let i=0;i<that.picNum;i++){
            (function (index) {
                that.pageLis[i].onclick =function () {
                    console.log(index,i);
                    that.showCurrentPagePoint(index)
                    animate(that.ul,{left:-that.boxWidth*index});
                    that.current = index;
                }
            })(i);
        }
    }

    //初始化函数
    this.init = function () {
        this.addPic();
        this.addBtnEvent();
        this.showCurrentPagePoint(0);
        if(this.isAutoPlay){
            this.addAutoPlay();
        }
        this.addPageEvent();
    }
    //初始化
    this.init();

}
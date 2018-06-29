function $(id){
    return document.getElementById(id);
}
var js_box=$("js_box");
var slider_main=$("slider_main_box");
var imgs=slider_main.children;
var slider_ctrl=$("slider_ctrl");

for(var i in imgs){
    var span=document.createElement("span");
    span.className='slider_ctrl_con';
    span.innerHTML=imgs.length-i;
    slider_ctrl.insertBefore(span,slider_ctrl.children[1]);

}

var spans=slider_ctrl.children;
var iNow=0;
var scrollWidth=500;
for(var k in spans){
    spans[k].onclick=function(){
        if(this.className=='slider_ctrl_prev'){
            animate(imgs[iNow],{left:scrollWidth});
            --iNow<0?iNow=imgs.length-1:iNow;
            imgs[iNow].style.left=-scrollWidth+'px';
            animate(imgs[iNow],{left:0})
            setSquare();
        }else if(this.className=='slider_ctrl_next'){
            autoplay();
        }else{
            var that=this.innerHTML-1;
            if(that>iNow){
                animate(imgs[iNow],{left:-scrollWidth});
                imgs[that].style.left=scrollWidth+'px';


            }else if(that<iNow){
                animate(imgs[iNow],{left:scrollWidth});
                imgs[that].style.left=-scrollWidth+'px';
            }
            iNow=that;
            animate(imgs[iNow],{left:0})
            setSquare();

        }
    }
}
// 4、设置setSquare函数：
function setSquare(){
    for(var i =1;i<spans.length-1;i++){
        spans[i].className='slider_ctrl_con';
    }
    spans[iNow+1].className='slider_ctrl_con current';
}
// 5、设置定时器
var timer=null;
timer=setInterval(autoplay,2000);
function autoplay(){
    animate(imgs[iNow],{left:-scrollWidth});
    ++iNow>imgs.length-1?iNow=0:iNow;
    imgs[iNow].style.left=scrollWidth+'px';
    animate(imgs[iNow],{left:0})
    setSquare();
}
// 6、鼠标经过的时候的效果：
js_box.onmouseover=function(){
    clearInterval(timer);
}
js_box.onmouseout=function(){
    clearInterval(timer);
    timer=setInterval(autoplay,2000);
}

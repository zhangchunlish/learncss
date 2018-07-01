function $(id){
    return document.getElementById(id);
}
// 4、设置setSquare函数：
function setSquare(){
    for(var i =1;i<spans.length-1;i++){
        spans[i].className='slider_ctrl_con';
    }
    spans[iNow+1].className='slider_ctrl_con current';
}
// 5、设置定时器
function autoplay(){
    animate(imgs[iNow],{left:-scrollWidth});
    ++iNow>imgs.length-1?iNow=0:iNow;
    imgs[iNow].style.left=scrollWidth+'px';
    animate(imgs[iNow],{left:0})
    setSquare();
}


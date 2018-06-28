
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
for(var k in spans){
    spans[k].onclick=function(){
        if(this.className=='slider_ctrl_prev'){

        }else if(this.className=='slider_ctrl_next'){

        }else{
            
        }
    }
}
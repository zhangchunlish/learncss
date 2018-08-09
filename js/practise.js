//深拷贝
function copy(obj1,obj2){
    obj2=obj2||{};
    for(var i in obj1){
        if(typeof obj1[i]==="object"){
            obj2[i]=(obj1[i].constructor===Array?[]:{})
            copy(obj1[i],obj2[i]);
        }else{
            obj2[i]=obj1[i];
        }
    }
    return obj2;
}
//实现数组的去重
Array.prototype.unique=function(fn){
    var rst=[],temp=[];
    this.forEach(function(item){
      var key='uniq'+(typeof fn==='function'?fn.call(window,item):item);
      if(!temp.hasOwnProperty(key)){
          rst.push(item);
          temp[key]=null;
      }
    },this);
    return rst;
}
// 对象数组去重
var arr = [
        { id: 2 }, { id: 4 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 6 }
];
arr.unique(function(v) {
    console.log(this);// 使用bind传递了Array,则this一定是Array,而不会是window
    return v.id;
}.bind(Array));
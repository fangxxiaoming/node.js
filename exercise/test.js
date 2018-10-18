var name = "小明",age='18';
var obj = {
    name:'安妮',
    objAge:this.age,
    fun:function(){
        console.log(this.name+'今年'+this.age);
    }
}
console.log(obj.objAge);
obj.fun()
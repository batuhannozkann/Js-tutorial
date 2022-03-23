var arr=['Ahmet','Mehmet','Burak','Gokhan'];
Array.prototype.ekle=function(name){
    this.push(name);
}
Array.prototype.sil=function(name){
    var index=this.indexOf(name);

    if(index>-1)
    {
        this.splice(index,1);
    }
    else
    {
        return this;
    }
}
arr.ekle('Can');
console.log(arr);
arr.sil('Can');
console.log(arr);
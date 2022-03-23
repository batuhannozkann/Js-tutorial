const Person={
    Name:'',
    Surname:'',
    getfullname: function(){
        return `${this.Name} ${this.Surname} `
    },
    setfullname: function(ad,soyad){
        this.Name=ad;
        this.Surname=soyad;
    },
}
 Person.setfullname('Batuhan','Özkan')
 console.log(Person.getfullname());
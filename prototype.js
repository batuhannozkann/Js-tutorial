function Employee(name,salary){

    if(!(this instanceof Employee))
    {
       return new Employee(name,salary);
    }

    this.name=name;
    this.salary=salary;
    /*this.alinanmaas=function(){ ********constructor içi func********
        var toplammaas=salary*12;
        var vergi;
        if(toplammaas<=20000)
        {
            vergi=toplammaas*0.2;
            toplammaas=toplammaas-toplammaas*0.2;
        }
        else if(toplammaas>20000 && toplammaas<=30000){
            vergi=toplammaas*0.25;
            toplammaas=toplammaas-toplammaas*0.25;
        }
        else if(toplammaas>30000)
        {
            vergi=toplammaas*0.27;
            toplammaas=toplammaas-toplammaas*0.27;
        }

        console.log(`${name}`+" "+"Alinan Maas:"+`${toplammaas}`+" "+"Kesilen vergi:"+`${vergi}`);

    }*/
}
Employee.prototype.alinanmaas=function(){
    var toplammaas=this.salary*12;
    var vergi;
    if(toplammaas<=20000)
    {
        vergi=toplammaas*0.2;
        toplammaas=toplammaas-toplammaas*0.2;
    }
    else if(toplammaas>20000 && toplammaas<=30000){
        vergi=toplammaas*0.25;
        toplammaas=toplammaas-toplammaas*0.25;
    }
    else if(toplammaas>30000)
    {
        vergi=toplammaas*0.27;
        toplammaas=toplammaas-toplammaas*0.27;
    }
  
    console.log(`${name}`+" "+"Alinan Maas:"+`${toplammaas}`+" "+"Kesilen vergi:"+`${vergi}`);
    return {
        vergi:vergi,
        toplammaas:toplammaas,
    }

}

var ahmet=new Employee('Ahmet',3000);
var mehmet=new Employee('Mehmet',1500);
var ahmetmaas=ahmet.alinanmaas();
console.log(ahmetmaas.vergi);
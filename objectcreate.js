let Person=function(name,surname,yearofbd)
{
    this.name=name;
    this.surname=surname;
    this.yearofbd=yearofbd;
}
Person.prototype.CalculateAge=function(){
 return 2022-this.yearofbd;
}

let Batuhan=new Person('Batunan','Özkan',1999);
let Teacher=function(name,surname,yearofbd,subject)
{
    Person.call(this,name,surname,yearofbd);
    this.subject=subject;
}
Teacher.prototype=Object.create(Person.prototype);
console.log(Teacher.prototype);
Teacher.prototype.constructor=Teacher;
let sevval=new Teacher('Sevval','Dağden',1998,'Turkce');
console.log(sevval.CalculateAge());






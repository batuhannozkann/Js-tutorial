let Person=function(name)
{
    this.name=name;
}
Person.prototype.Introduce=function(){
    return 'Abc'
}
let Student=function(name,number)
{
    Person.call(this,name);
    this.number=number;
}
let Teacher=function(name,branch)
{
    Person.call(this,name);
    this.branch=branch;
}
Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.study=function(){
    return 'Abcd';
}
Teacher.prototype.teach=function(){
    return 'Teaching';
}
let Headmaster=function(name,branch)
{
    Person.call(this,name);
    Teacher.call(this,branch)
}
Headmaster.prototype=Object.create(Person.prototype);
Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;
Headmaster.prototype.shareTask=function()
{
    return 'Sharing Task';
}
let ahmet=new Student('Ahmet',1500);
let can=new Headmaster('can','Math');
console.log(can.Introduce());
let caner=new Teacher('caner','Turkce');
console.log(caner.teach());
console.log(can.teach());
console.log(can.shareTask());


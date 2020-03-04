class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Hada buzzaman"
    }
}
const student1 = new Student(12, "Shuvo");
const student2 = new Student(23,"Mahia");
const student3 = new Student(33,"Sonia");

console.log(student1.name,student2.name, student3);


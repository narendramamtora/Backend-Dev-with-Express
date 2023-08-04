// 1. Write an arrow function which returns the product of two numbers
let a=(b,v)=> b*v;
console.log(a(2,3));


//  second question = to create the student object
let student={
 name: "ram",
 age: 25,
details () {
    console.log('this is '+this.name+' i am '+this.age+' years old')
 }
};
student.details();
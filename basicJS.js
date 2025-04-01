const person= {  // object and follow the syntax
    name:"Prasanna",
    age:19,
    greet(){
        console.log("hello ", this.name);
    }
}
person.greet();                

const sum= (a,b)=>a+b;   // arrow functions: simplifies syntax of function().
console.log(sum(1,2));

const hobbies = ['cycling','sports'];
console.log(hobbies.map(hobby=>'hobby: '+ hobby)); // array, and using map()



/*const person = {name:'Prasanna'};
const stud= {...person, age:19};
console.log(person,stud);

const toarray = (...args)=>{
    return args;
}
console.log(toarray(1,2,3,4,5,6)); */




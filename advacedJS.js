 const person = {name:'Prasanna',age:'19'}; // destructuring 
const {name,age} = person; // this format is the syntax of destructuring 
console.log(name,age);
const hobbies = ['sports','cycling'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

const det1 = ['Prasanna']; // spread operator (...)
const det2 = [...det1];
det2.push(19);
console.log(det1);
console.log(det2);

const skill = ['cycling','entertainment'];
const hobby = [...skill];
hobby.push('cardio');
console.log(skill);
console.log(hobby); 


setTimeout(()=>{  // setTimeout() -> calls a function after no. of miliseconds. 
    console.log('timer is done'); // an asynchronous code, means executes after the other code execution, which doesn't have any millisecond.
},5); 


// promise syntax:
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    if (/* operation successful */) {
      resolve('Success');
    } else {
      reject('Error');
    }
  }); 
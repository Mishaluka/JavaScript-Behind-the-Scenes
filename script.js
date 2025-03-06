'use strict';

//
//Scoping in practice
//
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);
        }


    }
    printAge();
    return age;
}

const firstName = "Mikhail";
calcAge(1990);





//
// Hoisting 
//


// Hosting variables 
console.log(me);
//console.log(job);  it is in temporred dead zone  because they are defind not with "var"
//console.log(year);

var me = "Mikhail";
let job = "SDET";
const year = 1991;


//Hosting functions

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3)); The same here 
//console.log(addArrow(2, 3)); 


function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;



//
//The "this" keyword
// 

// Mthod => this = < Object that is calling the method>   
// this - point to the object that is calling the method takealook
// this - does NOT point to the function itself, and also NOT the its variable environment ! takealook

//console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1990);

console.log(this);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1980);


const jonas = {
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.Year);
    }
};
jonas.calcAge()

const mikhail = {
    year: 2017,
};

mikhail.calcAge = jonas.calcAge; // method barrowing 
mikhail.calcAge();


const f = jonas.calcAge;
f();




//
//Regular functions vs Arrow Functions
//

// var firstName = "Matilda";

const jonas = {
    firstName: "Jonas",
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
console.log(this.firstName); // Never use arrow function as a method!



// function incide the method 
const jonas2 = {
    firstName: "Jonas",
    year: 1990,
    calcAge: function() {
        //console.log(this);
        console.log(2037 - this.year);

        const self = this;
        const isMillenial = function() {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};
jonas2.greet();
jonas2.calcAge();

*/


//
//Memory Mangament: Primitives vs Objects 
//

//Memory Allocation
//Object references

const jessica1 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis")

//const marriedJessica = jessica;
//marriedJessica.lastName = "Davis";

console.log("Before:", jessica1);
console.log("Aftre:", marriedJessica);


const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
};

const jessicaCopy = {...jessica }; // ... spred operator (creating a new object)
jessicaCopy.lastName = "Davis";

console.log(jessica, jessicaCopy);
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before:", jessica);
console.log("Aftre", jessicaCopy);

//Deep copy/clone 

const jessicaClone = stucturedClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log("Before clone:", jessica);
console.log("Clone:", jessicaClone);
// Testing JS 2015 (ES6) features

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);


console.log(materials.map(material => material.length));
console.log(myCar1, myCar2);


// JS 2016

let x = 5;
let z = x ** 2; 

let y = 5;
y **= 2;

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(z);
console.log(y);
console.log(fruits.includes("Mango"));

// JS 2017

let str = "5";
str = str.padStart(4,0);

console.log(str);


// JS 2015 (ES6)

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
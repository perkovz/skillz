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


// Nav Component

const Nav = () => {
  const template = `
    <nav class="nav">
      <ul class="nav_ul">
        <li class="nav_li"><a href="/" class="nav_a">One</a></li>
        <li class="nav_li"><a href="/" class="nav_a">Two</a></li>
        <li class="nav_li"><a href="/" class="nav_a">Three</a></li>
      </ul>
    </nav>
  `;

  return template;
};

export default Nav;
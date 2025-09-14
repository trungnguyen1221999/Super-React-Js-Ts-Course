let car = "mercedes";

let cat: string;
cat = "tom";

let house: { address: string; color?: string } = { address: "123 Main St" };

//object array

let people: {
  name: string;
  age: number;
}[] = [];
people.push({ name: "John", age: 30 });
people.push({ name: "Jane", age: 25 });

// function

const sum1 = (a: number, b: number) => {
  return a + b;
};

console.log(sum1(2, 3));

const sub = (a: number, b: number) => a - b;

console.log(sub(5, 2));

let price: number | string | boolean;
price = 100;
price = "100 USD";
price = true;

let body: { name: string | number } | { firstname: string } = {
  name: 1001,
};

interface Person {
  name: string;
  age: number;
  address?: string;
}

let trung: Person = { name: "Trung", age: 30 };

let student: Person = { name: "Alice", age: 20, address: "456 Elm St" };

type dog = {
  name: string;
  age: number;
};
type fish = {
  name: string;
  color: string;
};

let bull: dog = { name: "bull", age: 3 };
let goldfish: fish = { name: "goldfish", color: "gold" };
let pet: dog & fish = {
  name: "pet",
  age: 2,
  color: "brown",
};
console.log(pet);

const handleClick = <Type>(value: Type) => value;

class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let ta = new person("ta", 20);
console.log(ta);

let ta2 = new person("ta2", 25);
console.log(ta2);

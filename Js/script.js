const user = {
  name: "trung",
  age: 26,
  address: "Hanoi",
};

const { name: username, age, address } = user;
console.log(username, age, address);

const list = [
  1,
  function sum(a, b) {
    return a + b;
  },
];
const [value, sum] = list;
console.log(value, sum(1, 2));

const use = {
  name: "trung",
  age: 26,
  address: "Hanoi",
  abilities: ["coding"],
};

// shallow clone (copy nong)
const cloneUser = { ...use };
console.log(cloneUser);

const handle = (a, b, ...c) => {
  return c;
};

console.log(handle(1, 2, 3, 4, 5, 6));

const handle2 = ({ a, b, ...c }) => {
  return c;
};

const value1 = handle2({ a: 1, b: 2, c: 3, d: 4, e: 5 });
console.log(value1);

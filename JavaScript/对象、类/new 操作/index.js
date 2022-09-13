function MyNew(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw new Error("Constructor must be a function");
  }
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);

  return res instanceof Object ? res : obj;
}

function Person(name) {
  this.name = name;
}

const person_1 = MyNew(Person, "ning");
const person_2 = new Person("ning");

console.log(person_1, person_2);

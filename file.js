//Create Function
function add(a, b) {
  console.log(a, b);

  return a + b;
}
// puch function
add();

const sub = function name(a, b) {
  console.log("this 2te");

  return a - b;
};
sub();

const multiply = (a, b) => console.log(3 * 5);
multiply();

const person = {
  alter: 21,
  myold() {
    console.log(this.alter);
  },
};

person.myold();

const run = function cb(c, b) {
  console.log(c * b);
};

run();



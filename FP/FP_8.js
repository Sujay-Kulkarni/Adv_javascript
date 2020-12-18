const add = (a, b) => a + b;
const mult = (a, b) => a * b;
add(2, mult(3, 5))


const users = [
    { name: "Jeff", age: 14 },
    { name: "Jack", age: 18 },
    { name: "Milady", age: 22 },
]
const filter = (cb, arr) => arr.filter(cb);
const map = (cb, arr) => arr.map(cb);

map(u => u.name, filter(u => u.age >= 18, users));



// fn1(fn2(fn3(50)));

// compose(fn1, fn2, fn3)(50) //Right to left
// pipe(fn3, fn2, fn1)(50)//left to right

// const compose = (f, g) => (a) => f(g(a))
// const pipe = (f, g) => (a) => g(f(a))
// const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
// console.log(multiplyBy3AndAbsolute(-50))
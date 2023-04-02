function fibonacci(n) {
    let fib = [0, 1];
    return (a, b) => {
            fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];
            return fib;
    }
}
function repeat_Fibonacci (n) {
    let a = fibonacci()
    for (let i = 0; i < n -3; i++) {
        a()
    }
    return a()
}

console.log(repeat_Fibonacci (20))
// [
//     0,   1,    1,    2,    3,
//     5,   8,   13,   21,   34,
//    55,  89,  144,  233,  377,
//   610, 987, 1597, 2584, 4181
// ]
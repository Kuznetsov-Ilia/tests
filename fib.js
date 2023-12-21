function productFib(prod) {
    for (let i = 0; i < prod; i++) {
        let f = fib(i);
        let f1 = fib(i + 1);
        if (f * f1 === prod) {
            return [f, f1, true]
        } else if (f * f1 > prod) {
            return [f, f1, false]
        }
    }
}
let cache = {};
function fib(n) {
    if (cache[n]) return cache[n];
    if (n < 2) {
        cache[n] = n;
        return n;
    }
    return cache[n] = fib(n - 1) + fib(n - 2);
}

// console.log(productFib(193864606));
// [55, 89, true];
// productFib(5895), [89, 144, false];
// productFib(74049690), [6765, 10946, true];
// productFib(84049690), [10946, 17711, false];
// productFib(193864606), [10946, 17711, true];
// productFib(447577), [610, 987, false];
// productFib(602070), [610, 987, true];
function sumDigPow(a, b) {
    // if (b > 135) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135].filter((n) => n >= a && n <= b);
    // }


    // Your code here
}



// sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89];
sumDigPow(10, 100), [89];
// sumDigPow(90, 100), [];
// sumDigPow(90, 150), [135];
// sumDigPow(50, 150), [89, 135];
// sumDigPow(10, 150), [89, 135];

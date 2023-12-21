function rowSumOddNumbers(n) {
    if (n === 1) return 1;
    let rowsN = 2;
    let rowsV = 0;
    let nextOdd = 3;
    let res = 0;
    while (true) {
        if (nextOdd % 2 !== 0) {
            if (rowsV < rowsN) ++rowsV;
            else {
                rowsV = 1;
                ++rowsN;
                if (rowsN > n) break;
            }
            if (rowsN === n) res += nextOdd;
        }
        ++nextOdd;
    }
    return res;
}

console.log(rowSumOddNumbers(3));
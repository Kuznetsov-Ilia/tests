function digitalRoot(n) {
    let res = n.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
    if (res > 9) return digitalRoot(res);
    return res;
}

console.log(digitalRoot(456));
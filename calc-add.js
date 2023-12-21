function add(a, b) {
    let al = a.length;
    let bl = b.length;
    let l = Math.max(al, bl);
    let res = [];
    let carry = 0;
    for (let i = 1; i <= l; i++) {
        let ai = a[al - i] ? Number(a[al - i]) : 0;
        let bi = b[bl - i] ? Number(b[bl - i]) : 0;
        let r = ai + bi + carry;
        if (r > 9) {
            carry = 1;
            r = r - 10;
        } else {
            carry = 0;
        }
        res.unshift(String(r));
    }
    if (carry) {
        res.unshift('1');
    }
    return res.join('');
}

// console.log(add("63829983432984289347293874", "90938498237058927340892374089")); //, "2"
// add("123", "456"), "579")
// console.log(add("888", "222"));
// , "1110")
console.log(add("1372", "69"))
// , "1441")
// add("12", "456"), "468")
// add("101", "100"), "201")
// add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963"

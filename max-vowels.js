const vowels = ['a', 'e', 'i', 'o', 'u'];
function maxVowels(s, k) {
    let cur = 0;
    let max = 0;
    let l = s.length;
    for (let i = 0; i < l; i++) {
        if (i === 0) cur = max = countVowels(s.slice(i, k + i));
        else {
            if (isVowel(s[i - 1])) --cur;
            if (isVowel(s[i + k - 1])) ++cur;
            max = Math.max(cur, max);
        }
    }
    return max;
};

function countVowels(str) {
    var matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

function isVowel(c) {
    return vowels.includes(c);
}

console.log(maxVowels("abciiidef", 3));

// AEIOU
// let temp = s.slice(i, k + i).split('').filter(l => vowels.includes(l))
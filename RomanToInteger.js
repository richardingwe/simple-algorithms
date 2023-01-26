/**
* @param {string} s
* @return {number}
*/;

var romanToInt = function (s) {
    let result = 0;
    let prev = 0;
    let curr = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        console.log(i, s[i]);
        switch (s[i]) {
            case 'I':
                curr = 1;
                break;
            case 'V':
                curr = 5;
                break;
            case 'X':
                curr = 10;
                break;
            case 'L':
                curr = 50;
                break;
            case 'C':
                curr = 100;
                break;
            case 'D':
                curr = 500;
                break;
            case 'M':
                curr = 1000;
                break;
        }
        if (curr < prev) {
            result -= curr;
        } else {
            result += curr;
        }
        prev = curr;
    }
    return result;
};

const four = "IV";

const first = "III";

const second = "LVIII";

const third = "MCMXCIV";

console.log('four', romanToInt(four), romanToInt(four) === 4);
console.log('first', romanToInt(first), romanToInt(first) === 3);
console.log('second', romanToInt(second), romanToInt(second) === 58);
console.log('third', romanToInt(third), romanToInt(third) === 1994);
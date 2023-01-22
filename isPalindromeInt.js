var isPalindrome = function (n) {
    let original = n;
    let reversed_n = 0;

    // reverse the digits of the integer
    while (n > 0) {
        reversed_n = reversed_n * 10 + n % 10;
        n = Math.floor(n / 10);
    }

    // check if the reversed integer is equal to the original
    return original === reversed_n;
};

const num = 1221;

console.log(isPalindrome(num)); // true
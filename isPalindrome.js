function isPalindromme(text) {
    let reversedtext = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversedtext += text[i];
    }

    if (text === reversedtext) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindromme('racecar'));
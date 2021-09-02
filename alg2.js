function myString(string) {
    const counter = {};
    let max = { character: null, frequency: 0 };
    for (let letter of string) {
        counter[letter] = counter[letter] ? counter[letter] + 1 : 1;
    }
    for (val in counter) {
        if (counter[val] > max.frequency) {
            max.frequency = counter[val];
            max.character = val;
        }
    }
    console.log(max);
}

myString('ababccb');
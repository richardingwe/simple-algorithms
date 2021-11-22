
function reverse(str) {
    let revString = "";
    return str.split("").reduce((revString, text) => text + revString, "");
}

console.log(reverse("hello"));
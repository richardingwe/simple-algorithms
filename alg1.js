function strrArr(myArr) {
    const arr1 = JSON.parse(myArr[0]);
    const arr2 = JSON.parse(myArr[1]);
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        if (i < arr1.length) {
            result.push(arr1[i] + arr2[i]);
        } else {
            result.push(arr2[i]);
        }
    }
    console.log(result.join('-'));
}

strrArr(['[1,2,3,9,2]', '[2,4,5,10,7,55,0]']);
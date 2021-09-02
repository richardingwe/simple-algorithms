/** write a function that takes two string arrays and adds the numbers with the same index from both arrays together
    example: ['[1,2,3,9,2]', '[2,4,5,10,7,55,0]'] would return ['(1 + 2)', '(2 + 4)', '(3 + 5)'],
    if the second array is has more numbers than the first one, then return the remaining numbers as they were.
    the function should return its result as 3-6-8-19-9-55-0
 **/



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
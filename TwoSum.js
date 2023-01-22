function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
}

// let nums = [2, 7, 11, 15];
let nums = [1, 3, 2, 3];
let target = 6;
console.log(twoSum(nums, target)); // Output: [0, 1]

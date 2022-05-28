const largestNum = (...nums) => {
    return nums.sort((a, b) => b - a)[0];
}

console.log(largestNum(100,2,3,4,5,6,7,8,9));
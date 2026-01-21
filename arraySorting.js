
//you can use this to pass interviews where you are asked to sort an array without using built in sort method

const array = [1, 0, 12, 0, 7, 3, 0, -1];

/**
 * 
 * @param {number} arr 
 * @returns Array
 */
const sort=(arr)=>{
    if(arr.length < 2) return arr;
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(sort(left), sort(right));
}

const merge=(left, right)=>{
    const result = [];
    let leftIndex=0, rightIndex=0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(sort(array))
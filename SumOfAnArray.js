"use strict"

//creating arrays and sub-arrays
var arr=[1,2,3,4,5,6]
const arr1=arr.slice(2,4)
console.log(arr1)
console.log(arr[3])
console.log(arr[9])
console.log(arr1[1])
console.log(arr.length)
console.log(arr1.length)

//adding a value at the last
arr1.push(12)
arr1.push(12,89,78)
console.log(arr1)
console.log(arr1.length)

// removing aa element from the last
arr1.pop()
console.log(arr1)

//adding a value as the first index
arr1.unshift(45)
console.log(arr1)

console.log(arr1.indexOf(100))//returns -1 if 100 is not in the array
console.log(arr1.indexOf(12))//returns 3 which is the index of 12
console.log(arr1.includes(12))//checks if the array contains 12

//to find the sum of the array values
var sum=0
for(let i=0;i<=arr1.length-1;i++)
    {
        sum=sum+arr1[i];

    } 
    console.log(sum)


//reduce filter map
 
//alternate method to find the sum of the array
let total=arr1.reduce((sum,arr1)=>sum+arr1,0)
console.log(total)
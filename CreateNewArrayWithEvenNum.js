var num=[12,13,14,15,16,18,20,23,24,35,78]
console.log("Original numbers in the array are :" ,num)
//create new array with even numbers of scores and multiply each value
// with 3 and sum themarray [12,14,16]
var j=0
var num1=[]
for(var i=0;i<=num.length-1;i++)
{
    if(num[i]%2==0)
    {
        num1[j]=num[i]
        j++
    }
}
console.log("Even numbers in the new array are :" ,num1)

//using push method to add value in the new array
var evenarr=[]
for(var i=0;i<=num.length-1;i++)
{
    if(num[i]%2==0)
    {
        evenarr.push(num[i])
    }
}
console.log("Even numbers in the new array(using Push function) are :" ,evenarr)

//using filter method
let evenarray=num.filter(num=>num%2==0)
console.log("Even numbers in the new array using filter method :" ,evenarray)

//using map method
let newarray=num1.map(num1=>num1*3)
console.log("Each array element is multiplied by 3: ", newarray)

//sum of the new array using reduce method
let sum=0
let sumnewarr=newarray.reduce((sum,newarray)=>(sum+newarray),0)
console.log("Sum of the new array: ", sumnewarr)

//Combining filter, map, reduce methods to get the result in single line
let value=[12,13,14,15,16,17,18]
let result=value.filter(value=>value%2==0).map(value=>value*3).reduce((sum,value)=>(sum+value),0)
console.log("Total value is : ", result)
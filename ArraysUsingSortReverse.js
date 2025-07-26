

let fruits=["apple","banana","orange","Pears","Gauva"]
//All uppercase-first words (G, P) come before lowercase.
console.log(fruits.sort())
//Sorts the array in-place using Unicode code point order
console.log(fruits.reverse())
//This simply reverses the current order of the fruits array after sorting.

let num=[12,0,23,4,90,45,3,43]
console.log(num.sort((a,b)=>b-a))
//a and b are function parameters, not variables that we declare with let, const, or var
//it's not necessary to declare a and b
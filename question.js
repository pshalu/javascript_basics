/*
//q1
//You have an array of integers representing temperatures in degrees Celsius for a week. Write a function to convert these temperatures to Fahrenheit and return the new array.

let temperatures = [0, 12, 18, 22, 25, 28, 31];
let Fahrenheit = [];
for (let i =0; i < temperatures.length;i++){
    Fahrenheit[i] = temperatures[i]*9/5+32;

}
console.log(Fahrenheit);
*/
//q2 
// Given an array of strings, return a new array containing only the strings that have a length greater than 5.
/*
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

newfruit = []
for (let i =0; i <fruits.length;i++){
   
    if (fruits[i].length >5){
       newfruit.push(fruits[i])

    } 
}
 console.log(newfruit)
*/

//q3
// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function evenNumbersum(numbers){
    sum = 0;
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]%2 == 0){
            sum += numbers[i]
        }
    }
    return sum;

}
let result = evenNumbersum(numbers);
console.log(result)
*/
//q4
// You have an array of objects representing people with their names and ages. Write a function that returns the name of the first person who is older than 18.
/*
let people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 16 }
  ];

function person_name(people){
    for(let i =0;i<people.length;i++){
        if(people[i].age > 18){
            return people[i].name;            
        }
    }
}
let personName = person_name(people);
console.log(personName)
*/

//q5
//Check if all elements in an array are strings. Return true if they are, otherwise return false.

/*
function Type_check(items){
    for (let i=0;i <items.length; i++ ){
        if(typeof (items[i]) !== 'string'){
            return false;
        }
        
    }
    return true;
}
let items = ["apple", "banana", "cherry"];
result = Type_check(items)
console.log(result)
*/
// q6
// Given an array of integers, write a function that returns true if at least one of the elements is a prime number, and false otherwise.
/*
let numbers = [4, 6, 8, 9, 10];
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function havePrime(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            return true;
        }
    }
    return false;
}
let result = containsPrime(numbers);
console.log(result);
*/
//q7
// Write a function that checks if a given array contains the number 42. Return true if it does, otherwise return false.
/*
let numbers = [1, 2, 3, 4, 5];

function ckeck_number(numbers){
    for (let i = 0; i < numbers.length;i++ ){
        if(numbers[i] == 42){
            return true;
        }
        return false;
    }
    
}

result = ckeck_number(numbers)
console.log(result)

*/

//q8
// Given an array of fruits, remove the fruit at index 2 and insert "kiwi" and "mango" at that position. Return the modified array.
/*
let fruits = ["apple", "banana", "cherry", "date"];


//The splice() method can be used to add new items to an array:
//The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.
fruits.splice(2,1,"kiwi","mango") 
console.log(fruits)
*/
//q9
//Sort an array of integers in descending order and then remove the first element of the sorted array. Return the modified array.
/*
let numbers = [3, 1, 4, 1, 5, 9, 2];
numbers.sort();
numbers.reverse();
console.log(numbers)*/

//q10
//// Flatten a nested array of arbitrary depth into a single array and remove any duplicate values from the resulting array.

let nestedArray = [1, [2, [3, [4, 4], 5], 6], 7, [8, 9, [10, 11, 12]]];

let flatten_array = nestedArray.flat(Infinity)

console.log(flatten_array)

let uniarray = []
for (let i = 0; i < flatten_array.length;i++){
    if (!uniarray.includes(flatten_array[i])){
        uniarray.push(flatten_array[i]);
    }
}
console.log(uniarray)

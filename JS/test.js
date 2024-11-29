/*const array = [10,20,30];

array[2] = 99;

console.log(array)

const array2 = ['hi','hello','good'];

function getLastValue(){
  return array2[array2.length-1]
}

console.log(getLastValue())

const array3 = [1,20,22,24,5];

console.log(array3)

function arraySwap(){
  [array3[0], array3[array3.length - 1]] = [array3[array3.length - 1], array3[0]]
  return array3
}

console.log(arraySwap())
*/

//11f
/*
var i = 0;

while (i<=10) {
  console.log(i);
  i+= 2;
}
*/

//11g
/*
const array = [1,2,3,4,5]

for (let i = 0; i < array.length; i++) {
  const element = array[i]+1;
  console.log(element)
} 
  */
//11h
/*
let array = [6,7,8,9]

function plusOne(array){

  for (let i = 0; i < array.length; i++) {
    const element = array[i]+1;
    console.log(element)
  } 
}

plusOne(array)
*/

//11i
/*
let array = [1,2,3,4,5];
let num = [4];

function addNum(array,num) {
  for (let i = 0; i < array.length; i++) {
    const element = +array[i]+ +num;
    console.log(element)
  } 
}

addNum(array,num)

*/

//11k
/*
let nums=[-2,-1,0,1,2];

function countPositive(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]>0) {
      return console.log(nums[i])
    }
  } 
  
}

countPositive(nums)*/

//11o & 11p
/*function test(){
let array =['hello', 'world','search','good','search'];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (array[i] === 'search') {
    console.log(i);
    break
    }
    
}
}
test()*/

//11q
/*
let array = ['green','red','blue'];
let word = ['red'];

function findIndex(array,word){
  for(i = 0; i<array.length; i++){
    if (array[i] === word){
      return console.log(i)
    } else console.log(-1)
  }
}

findIndex(array,word)*/

//11r
/*
function removeEgg() {
  let foods = ['egg','apple','egg','egg','ham'];
  let newFoods = [];

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg'){
      continue
    }
      else newFoods.push(foods[i])
  }

  return console.log(newFoods)
}

removeEgg()*/

function removeEgg() {
  let foods = ['egg','apple','egg','egg','ham'];
  let newFoods = [];
  let count = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg'){
      count++;
      foods.splice(i,1);
      i--;
      if(count === 2){
        break
      }
    }
      else newFoods.push(foods[i])
  }

  return console.log(newFoods)
}

removeEgg()

function removeFirstTwo(array, value) {
  let count = 0; // Track how many times we've removed the value
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          count++;
          array.splice(i, 1); // Remove the element at index i
          i--; // Adjust index after removal
          if (count === 2) break; // Stop after removing two occurrences
      }
  }
  return array;
}



const arr = [ 1, ,2 ] //Missing element is treated as 'undefined'
console.log(arr[1]); //undefined
console.log(arr.length); //3

//splice
let arr1 = [1,2,3,4,5,6,7]
console.log("ORIGINAL ARRAY:-", arr1);
console.log(arr1.splice(2,3));  //returns a new array of removed elements after removing the elements from the mentioned 1st index to the mentioned 2nd index (inclusive)
console.log("AFTER SPLICE(2,3):-", arr1);

//unshift
console.log(arr1.unshift(1)); //returns length of an array after adding the entered element to the beginning of the array
console.log("AFTER UNSHIFT(1):- ", arr1);
//array.copywithin

console.log('MutatorMethodsArray');

let a = [1, 2, 3, 4];
let months = ['January', 'February', 'March'];

// copywithin - copies within an array
// copyWithin(copyPos, startCopyIndex, endCopyIndex);
console.log(a.copyWithin(0,1));   //[2,3,4,4]

//fill(value, startIndex, endIndex)
console.log(a.fill(5,0,2));     // [5,5,4,4,]

//push(value)
console.log(a.push(6));  // Return new length of array i.e. 5
console.log(a);    //[5,5,4,4,6]
console.log(a.push([7,8,9]));
console.log(a);  //[5,5,4,4,6,[7,8,9]]

//pop()
console.log(a.pop());   // removes and returns the last element of the array
console.log(a);

//shift()  -- removes and return first element of array (opposite of pop)
console.log(a.shift());
console.log(a);

//unshift(value1, value2,....) -- adds elements to the front of the array
a.unshift(2,3);
console.log(a);

a.sort();
console.log(a);
a.sort((first,second) => first < second ? 1 : -1);
console.log(a);
console.log(months.sort());

//reverse - Reverse elements in array
console.log(a.reverse());

//splice(insertIndex, numElementsToDeleteatIndex, insertvalue1, insertvalue2, ...)
months.splice(1,0,'June', 'July');
console.log(months);

const array = [1,2,3]

function removeLastItem(arr) {
    //const newArr = arr; // do not use, it will copy the array value, however refrence remains same.
    const newArr = [].concat(arr);
    newArr.pop();
    return newArr
}

function multiplyBYTwo(arr){
    return arr.map(item => item *2);
}
console.log(removeLastItem(array))
console.log(multiplyBYTwo(array))
console.log(array)

// function a(num1,num2){
//   return num1 + num2
// }
// a(2, 4);
// function b(num){
//     return num *2
// }

// b(a(2,4))


const array = [1,2,3]

function a(arr) {
    return arr.pop()
}

function b(arr){
    arr.forEach(element => {
        arr.push(1)
    });
}
a(array)
b(array)
console.log(array)
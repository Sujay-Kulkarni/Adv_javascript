const obj = {name: 'Sujay'}
function clone(obj) {
  return {...obj}; // this is pure
}

//console.log(obj.name= 'abc');

function updateName(obj) {
  const obj2 = clone
  (obj);
  obj2.name = 'abc'
  return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)
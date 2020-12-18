const giveAccessTo = (name) =>
  'Access granted to ' + name;

function authenicate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i)
  }
  return true;
}

function letPerson(person, fn){
  if(person.level == 'admin'){
    fn(50000);
  } else if(person.level == 'user')
  {
    fn(10000);
  }
return giveAccessTo(person.name);
}

letPerson({level: 'admin', name:'Tim'}, authenicate)
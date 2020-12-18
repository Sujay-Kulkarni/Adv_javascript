/*function counter() {
  const counterObj ={
    result : 0, 
    add : function(args) {
      this.result = this.result + args;
    } ,
    print : function(){
      return this.result;
    }
  }

  return counterObj;
}*/

 /*const counter ={
    result : 0, 
    add : (args) => {
      console.log(this)
      return result = result + args;
    } ,
    print : () => {
      return this.result;
    }
  }


let c = counter;
//////console.log(c);
c.add(5);
//c.add(9);
//c.add(9);
//c.add(9);
//c.add(9);
//c.print(); */

/*function fact(num) { 
  if(num > 1) 
  { 
    return num * fact(num -1) 
  } 
    return 1;
}*/

/*function fact(n) {
  return (n!= 1) ? n * fact(n - 1) : 1
}

fact(5);*/

/* 
Date.prototype.yesterday = function() { yDay = this.getDate() -1;
return (this.getFullYear() + '-' + this.getMonth() + '-' + yDay).toString()
*/

/*function loop() {
  for(let i=0;i<5;i++)
  {
    console.log(i);
  }
  console.log(i);
}

loop();*/

/*function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

fib(77)*/

/*function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

fib(3) */

/*let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if(a == 2) resolve('success'); 
  else reject('fail');
})

p.then((msg) => {
  console.log('Resolved : ' + msg );
}).catch((msg) => {
  console.log('Rejected : '+ msg);
})*/

/*let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 2000);
    //resolve(1);
});

promise.then(alert); */

/*function delay(ms) {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve(), ms)
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));*/

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

letPerson({level: 'user', name:'abc'}, authenicate)
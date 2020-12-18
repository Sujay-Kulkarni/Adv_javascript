function a() {
    console.log(this);
  }
  
  a();
  
  // function b() {
  //   'user strict '
  //   console.log(this);
  // }
  
  // b();
  
  // const obj = {
  //   name : "Kumar",
  //   Sing : function() {
  //     console.log('a', this);
  //     var anotherFunction = function() {
  //       console.log('b', this);
  //     }
  //     anotherFunction();
  //     }
  //   }
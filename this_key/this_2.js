const obj= {
    name : "Kumar",
    sing : function() {
      return this.name + ' is  Singing ';
    },
  }
  
  obj.sing();
  
  // const obj1= {
  //   firstName : "Kumar",
  //   lastName : "Sanu",
  //   sing : function() {
  //     return this.firstName + ' is  Singing ';
  //   },
  //   displayFullName(){
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
  
  // obj1.displayFullName()
  
  
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
  
  // const obj = {
  //   name : "Kumar",
  //   Sing : function() {
  //     console.log('a', this);
  //     var anotherFunction = () => {
  //       console.log('b', this);
  //     }
  //     anotherFunction();
  //     }
  //   }
const obj = {
    name : 'Person1',
    disPlayName : function(){
      console.log('a', this);
      anotherFunc = function(){
        console.log('b', this)
      }
      anotherFunc()
    }
  }
  
  obj.disPlayName()
  
  //ES6
  // const obj = {
  //   name : 'Person1',
  //   disPlayName : function(){
  //     console.log('a', this);
  //     anotherFunc = () => {
  //       console.log('b', this)
  //     }
  //     anotherFunc()
  //   }
  // }
  
  // obj.disPlayName()()
  
  
  //befoer ES6
  // const obj = {
  //   name : 'Person1',
  //   disPlayName : function(){
  //     console.log('a', this);
  //     anotherFunc = function()  {
  //       console.log('b', this)
  //     }
  //   return anotherFunc.bind(this)
  //   }
  // }
  
  // obj.disPlayName()()
  
  //befoer ES6
  // const obj = {
  //   name : 'Person1',
  //   disPlayName : function(){
  //     console.log('a', this);
  //     var that = this;   
  //     var anotherFunc = function()  {
  //       console.log('b', that)
  //     }
  //   return anotherFunc()
  //   }
  // }
  
  // obj.disPlayName()()
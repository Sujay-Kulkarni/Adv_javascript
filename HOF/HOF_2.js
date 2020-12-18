function letUserLogin(user) {
    let array = [];
    for(let i =0; i <10000;i++)
    {
      array.push(i)
    }
  
    return 'Access granted to ' + user;
  }
  
  letUserLogin('adam');
  letUserLogin('abc');
  
  
  // const giveAccessTo = (name) => 
  //  'Access granted to ' + name;
  
  // function letUserLogin(user) {
  //   let array = [];
  //   for(let i =0; i <10000;i++)
  //   {
  //     array.push(i)
  //   }
  //   return giveAccessTo(user);
  // }
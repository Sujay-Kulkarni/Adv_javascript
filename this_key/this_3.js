function importantPerson() {
    console.log(this.name);
  }
  
  var name = 'Sachin Tendulkar'; 
  
  const obj1 = {
    name : 'Rahul Dravid ',
    importantPerson : importantPerson
  }
  
  const obj2 = {
    name : 'Anil Kumble', 
    importantPerson : importantPerson
  }
  
  importantPerson();
  //obj1.importantPerson()
  //obj2.importantPerson()
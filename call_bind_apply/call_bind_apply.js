const wizard = {
    name : "",
    health : 0,
    setName(name){
      this.name = name;
      console.log("Player Name : " + this.name);
    },
    setHealth(val) {
      this.health = val; 
      console.log("Health :" + this.health);
    },
    hit(num1) {
      this.health -= num1;
      console.log("I got hit : " + this.health);
    },
    heal(num2)
    {
      this.health += num2;
      console.log("Level up : " + this.health);
    }
  }
  
  const archer = {
    
  }
  wizard.setName.call(archer,['Parth','']);
  // wizard.setHealth.call(archer, 100);
  // wizard.hit.call(archer, 30);
  // wizard.heal.call(archer,20);
  
  
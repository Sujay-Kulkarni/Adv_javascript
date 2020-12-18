let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
      return 5
    },
    sing() {
      //if (this.fire) {
        return `I am ${this.name}, the breather of fire`
      //}
    }
  }
  
  let lizard = {
    name: 'Kiki',
    fight() {
      return 1
    }
  }
  
  // const lizardFire =dragon.sing.bind(lizard)
  // console.log(lizardFire())
  
  lizard.__proto__ = dragon;
  //dragon.isPrototypeOf(lizard);
  for(let prop in lizard) {
    if(lizard.hasOwnProperty(prop))
    console.log(prop);
  }
  // console.log(lizard.fire)
  // console.log(lizard.sing())
  
  
  
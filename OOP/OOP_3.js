const playerFunctions = {
    attack: function() {
      return 'atack with ' + weapon
    },
    build () {
      return this.name + ' build house'
    }
  }
  function createPlayer(name, weapon) {
       return {
           name,
           weapon
       }
  }
  
  
  const sam = createPlayer('Sam', 'bow');
  sam.attack = playerFunctions.attack
  console.log(sam.attack())
  
  const peter = createPlayer('Peter', 'bow');
  peter.build = playerFunctions.build

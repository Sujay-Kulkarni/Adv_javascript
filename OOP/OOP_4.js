const playerFunctions = {
    attack: function() {
      return 'atack with ' + this.weapon
    }
  }
  function createPlayer(name, weapon) {
    //Object.create creates __proto__ link
    newPlayer = Object.create(playerFunctions)
    newPlayer.name = name;
    newPlayer.weapon = weapon
    return newPlayer
  }
  
  
  const sam = createPlayer('Sam', 'bow');
  const peter = createPlayer('Peter', 'bow');
  sam.attack()
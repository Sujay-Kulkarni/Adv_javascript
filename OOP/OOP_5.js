//Constructor Functions
function Player(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  
  Player.prototype.attack = function() { 
    return 'atack with ' + this.weapon
  }
  const sam = new Player('Sam', 'bow');
  const peter = new Player('Peter', 'bow');
  sam.attack()
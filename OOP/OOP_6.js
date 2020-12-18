class Player {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }
  
  const fiona = new Player('Fiona', 'ninja stars');
  console.log(fiona instanceof Player) // 
  const sam = new Player('Sam', 'bow');
  fiona.attack()
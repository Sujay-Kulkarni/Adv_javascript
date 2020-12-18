// factory function make/create
function createPlayer(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name: name,
    weapon: weapon,
    atack() {
      return 'atack with ' + weapon
    }, 
    build () {
      return this.name + ' build house'
    }
  }
}
const sam = createPlayer('Sam', 'bow');
const peter = createPlayer('Peter', 'bow');

console.log(sam.atack())
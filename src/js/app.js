import goblinImg from '../img/goblin.png';

export default class Randomize {
  constructor(field, cell) {
    this.field = document.querySelector('.game-board');
    this.cells = [...this.field.querySelectorAll('.cell')];
    this.activeCell = null;
  }

  getRandom() {
    const random = Math.floor(Math.random() * this.cells.length);
    if (random === this.activeCell) {
      this.getRandom();
    } else {
      this.activeCell = random;
    }
  }

  showGoblin() {
    if (document.getElementById('character')) {
      document.getElementById('character').remove();
    }

    this.getRandom();
    const char = new Image();
    char.src = goblinImg;
    char.id = 'character';
    this.cells[this.activeCell].appendChild(char);
  }

  showGoblinInterval(speed) {
    setInterval(() => {
      this.showGoblin();
    }, speed);
  }
}
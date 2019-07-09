const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  constructor(arr) {
    super();
    this.arr = arr;
  }

  read(str) {
    str.split('').forEach((letter, i) => {
      this.emit('letter', { letter, offset: i });
      if(this.arr && this.arr.includes(letter)) this.emit(letter.toString);
    });

    this.emit('end');
  }
}

module.exports = LetterEmitter;

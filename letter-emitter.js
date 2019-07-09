const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  read(str) {
    str.split('').forEach((letter, i) => {
      this.emit('letter', { letter, offset: i });
    });

    this.emit('end');
  }
}

module.exports = LetterEmitter;

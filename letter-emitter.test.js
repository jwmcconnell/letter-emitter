const LetterEmitter = require('./letter-emitter');

describe('Letter Emitter', () => {
  it('emits a letter even for each letter/space in a string', done => {
    const str = 'Hello my name is Jack';
    const letterEmitter = new LetterEmitter();

    letterEmitter.on('letter', data => {
      expect(data.letter).toEqual(str[data.offset]);
    });

    letterEmitter.on('end', () => {
      done();
    });

    letterEmitter.read(str);
  });
});

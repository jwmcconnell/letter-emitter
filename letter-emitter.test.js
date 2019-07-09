const LetterEmitter = require('./letter-emitter');

describe('Letter Emitter', () => {
  it('emits a letter even for each letter/space in a string', done => {
    const str = 'Hello my name is Jack';
    const letterEmitter = new LetterEmitter();

    const mockFunction = jest.fn();

    letterEmitter.on('letter', data => {
      mockFunction();
      expect(data.letter).toEqual(str[data.offset]);
    });

    letterEmitter.once('end', () => {
      expect(mockFunction.mock.calls.length).toBe(21);
      done();
    });

    letterEmitter.read(str);
  });
});

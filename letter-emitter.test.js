const LetterEmitter = require('./letter-emitter');

describe('Letter Emitter constructor', () => {

  let le;
  beforeEach(() => {
    le = new LetterEmitter(['a', 'b']);
  });

  it('emits an event for each letter in an array passed to the constructor', done => {
    const mockFunction = jest.fn();

    le.on('a', () => mockFunction());
    le.on('b', () => mockFunction());
    le.on('end', () => {
      expect(mockFunction.mock.calls.length).toBe(7);
      done();
    });

    le.read('abracadabra');
  });
});

describe('Letter Emitter read method', () => {

  let letterEmitter;
  beforeEach(() => {
    letterEmitter = new LetterEmitter();
  });

  it('emits a letter event for each letter/space in a string', done => {
    const str = 'Hello my name is Jack';

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

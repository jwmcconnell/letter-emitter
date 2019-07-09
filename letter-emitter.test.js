const LetterEmitter = require('./letter-emitter');

describe('Letter Emitter constructor', () => {

  let le;
  beforeEach(() => {
    le = new LetterEmitter(['a', 'b']);
  });

  it('emits an event for each letter in an array passed to the constructor', done => {
    le.on('a', () => console.log('a found'));
    le.on('b', () => console.log('b found'));
    le.on('end', () => {
      console.log('done');
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

    letterEmitter.on('test', () => {
      console.log('constructor is working');
    });

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

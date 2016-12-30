import 'babel-polyfill';
import { expect } from 'chai';
import rainbow, {rainbowArray} from '../';

describe('1: rainbow generator function', () => {
  let r = null;
  beforeEach(() => {
    r = rainbow();
  });

  it('will return the first number in the sequence', () => {
    const {value} = r.next();
    const expected = 0xFF0000;
    expect(value).to.equal(expected.toString(16));
  });

  it('will return the next number in the sequence', () => {
    r.next(); // skip the first
    const {value} = r.next();
    const expected = 0xFF7F00;
    expect(value).to.equal(expected.toString(16));
  });

  it('will generate 7 colors', () => {
    const colors = Array.from(r);
    expect(colors.length).to.equal(7);
    colors.forEach(c => {
      expect(c).to.be.a('string');
    });
  });
});

describe('2: rainbowArray', () => {
  let r = null;
  beforeEach(() => {
    r = rainbowArray(Math.pow(2, 24) - 1);
  });

  it('will return an array of length 7', () => {
    expect(r).to.be.a('array');
    expect(r.length).to.equal(7);
  });

  it('will be an arry of strings only', () => {
    r.forEach(c => {
      expect(c).to.be.a('string');
    });
  });
});

/* global describe, it, beforeEach */
import { expect } from 'chai';
import rainbowGen from '../';

describe('1: rainbow generator function', () => {
  let rainbow = null;
  beforeEach(() => {
    rainbow = rainbowGen();
  });

  it('will be an array', () => {
    expect(rainbow).to.be.a('array');
  });

  it('will return the first number in the sequence', () => {
    const [value] = rainbow;
    const expected = 0xFF0000;
    expect(value).to.equal(expected.toString(16));
  });

  it('will generate 7 colors', () => {
    expect(rainbow.length).to.equal(7);
    rainbow.forEach((c) => {
      expect(c).to.be.a('string');
    });
  });
});

describe('2: rainbow with starting value', () => {
  let r = null;
  let baseColor = null;
  beforeEach(() => {
    const max = 2 ** 24;
    const min = 0;
    baseColor = Math.floor(Math.random() * (max - min)) + 1;
    r = rainbowGen({ baseColor });
  });

  it('will have the generated number as its first value', () => {
    expect(r[0]).to.equal(baseColor.toString(16));
  });
});

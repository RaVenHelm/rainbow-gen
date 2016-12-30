import 'babel-polyfill';
import { expect } from 'chai';
import rainbow from '../';

describe('1: Simple Test', () => {
  it('will return the first number in the sequence', () => {
    const r = rainbow();
    const next = r.next().value;
    const expected = 0xFF0000;
    expect(next).to.equal(expected.toString(16));
  });

  it('will return the next number in the sequence', () => {
    const r = rainbow();
    r.next(); // skip the first
    // TODO: change in testing hook?
    const next = r.next().value;
    const expected = 0xFF7F00;
    expect(next).to.equal(expected.toString(16));
  });

  it('will generate 7 numbers', () => {
    const r = rainbow();
    const colors = Array.from(r);
    expect(colors.length).to.equal(7);
  });
});

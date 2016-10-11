import 'babel-polyfill';
import { expect } from 'chai';
import rainbowGen from '../';

describe('1: Simple Test', () => {
	it('will return a rainbow length of 7', () => {
		const rainbow = rainbowGen();
		expect(rainbow.length).to.equal(7);
	});
});

import 'babel-polyfill';
import leftPad from 'left-pad';
import {
  ifElse,
  equals,
  clone,
  type,
} from 'ramda';

// Starting from #FF0000 red, end at #8B00FF violet
const roygbiv = [
  0xFF0000,
  0xFF7F00,
  0xFFFF00,
  0x00FF00,
  0x0000FF,
  0x4B0082,
  0x8B00FF,
];

const isZero = equals(0);

const isType = function typeCheck(expected, object) {
  return equals(type(object), expected);
};

const toHexString = function hexString(number = 0) {
  if (!isType('Number', number)) {
    return '000000';
  }

  return leftPad(number.toString(16), 6, '0').slice(-6);
};

const generateDiffs = function makeDiffs(colorValues = []) {
  const { length } = colorValues;
  if (length > 7 && length > 0) {
    throw new RangeError('Initial color values must have a length of 7, or not supplied at all');
  }

  const colors = ifElse(isZero, () => clone(roygbiv), () => clone(colorValues))(length);

  return colors.map((n, i, a) => {
    if (i === a.length - 1) return 0;
    const next = a[i + 1];
    return next - n;
  }).slice(0, roygbiv.length - 1);
};

const rainbowGen = function rainbowArray(
  { baseColor, colorValues } = { baseColor: 0xFF0000, colorValues: roygbiv },
) {
  let number = baseColor;
  const result = generateDiffs(colorValues).map(diff => toHexString(number += diff));
  return [toHexString(baseColor), ...result];
};

export {
  rainbowGen,
};

export default rainbowGen;

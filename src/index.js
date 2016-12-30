import 'babel-polyfill';
import leftPad from 'left-pad';

const baseDiffs = (() => {
  // Starting from #FF0000 red, end at #8B00FF violet
  const roygbiv = [
    0xFF0000,
    0xFF7F00,
    0xFFFF00,
    0x00FF00,
    0x0000FF,
    0x4B0082,
    0x8B00FF
  ];

  return roygbiv.map((n, i, a) => {
    if(i == a.length - 1) return 0;
    const next = a[i + 1];
    return next - n;
  }).slice(0, roygbiv.length - 1);
})();

export function* generateRainbow(baseColor = 0xFF0000) {
  let number = baseColor;
  yield _toHexString(number);
  for(let i = 0; i < baseDiffs.length; i++) {
    number += baseDiffs[i];
    yield _toHexString(number);
  }
}

export function rainbowArray(baseColor = 0xFF0000) {
  let number = baseColor;
  let result = [_toHexString(number)];
  baseDiffs.forEach(diff => result.push(_toHexString(number += diff)));
  return result;
}

function _toHexString(number) {
  return leftPad(number.toString(16), 6, '0').slice(-6);
}

export default generateRainbow;

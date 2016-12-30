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

function* generateRainbow(baseColor = 0xFF0000 /* Red */) {
  let number = baseColor;
  yield _toHexString(number);
  for(let i = 0; i < baseDiffs.length; i++) {
    number += baseDiffs[i];
    const hexCode = leftPad(_toHexString(number), 6, '0').slice(-6);
    yield hexCode;
  }
}

function _toHexString(number) {
  return number.toString(16);
}

export default generateRainbow;

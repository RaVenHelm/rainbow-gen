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

function generateRainbow(baseColor = 0xFF0000 /* Red */) {
  let rainbow = [leftPad(baseColor.toString(16), 6, '0')];
  let number = baseColor;
  baseDiffs.forEach((n, i) => {
    number += n;
		const hexCode = leftPad(number.toString(16), 6, '0').slice(-6);
    rainbow = [...rainbow, hexCode];
  });

  return rainbow;
}

export default generateRainbow;

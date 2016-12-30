'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRainbow = generateRainbow;
exports.rainbowArray = rainbowArray;

require('babel-polyfill');

var _leftPad = require('left-pad');

var _leftPad2 = _interopRequireDefault(_leftPad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [generateRainbow].map(regeneratorRuntime.mark);

var baseDiffs = function () {
  // Starting from #FF0000 red, end at #8B00FF violet
  var roygbiv = [0xFF0000, 0xFF7F00, 0xFFFF00, 0x00FF00, 0x0000FF, 0x4B0082, 0x8B00FF];

  return roygbiv.map(function (n, i, a) {
    if (i == a.length - 1) return 0;
    var next = a[i + 1];
    return next - n;
  }).slice(0, roygbiv.length - 1);
}();

function generateRainbow() {
  var baseColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFF0000;
  var number, i;
  return regeneratorRuntime.wrap(function generateRainbow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          number = baseColor;
          _context.next = 3;
          return _toHexString(number);

        case 3:
          i = 0;

        case 4:
          if (!(i < baseDiffs.length)) {
            _context.next = 11;
            break;
          }

          number += baseDiffs[i];
          _context.next = 8;
          return _toHexString(number);

        case 8:
          i++;
          _context.next = 4;
          break;

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function rainbowArray() {
  var baseColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFF0000;

  var number = baseColor;
  var result = [_toHexString(number)];
  baseDiffs.forEach(function (diff) {
    return result.push(_toHexString(number += diff));
  });
  return result;
}

function _toHexString(number) {
  return (0, _leftPad2.default)(number.toString(16), 6, '0').slice(-6);
}

exports.default = generateRainbow;
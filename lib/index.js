'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rainbowGen = undefined;

require('babel-polyfill');

var _leftPad = require('left-pad');

var _leftPad2 = _interopRequireDefault(_leftPad);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Starting from #FF0000 red, end at #8B00FF violet
var roygbiv = [0xFF0000, 0xFF7F00, 0xFFFF00, 0x00FF00, 0x0000FF, 0x4B0082, 0x8B00FF];

var isZero = (0, _ramda.equals)(0);

var isType = function typeCheck(expected, object) {
  return (0, _ramda.equals)((0, _ramda.type)(object), expected);
};

var toHexString = function hexString() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (!isType('Number', number)) {
    return '000000';
  }

  return (0, _leftPad2.default)(number.toString(16), 6, '0').slice(-6);
};

var generateDiffs = function makeDiffs() {
  var colorValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var length = colorValues.length;

  if (length > 7 && length > 0) {
    throw new RangeError('Initial color values must have a length of 7, or not supplied at all');
  }

  var colors = (0, _ramda.ifElse)(isZero, function () {
    return (0, _ramda.clone)(roygbiv);
  }, function () {
    return (0, _ramda.clone)(colorValues);
  })(length);

  return colors.map(function (n, i, a) {
    if (i === a.length - 1) return 0;
    var next = a[i + 1];
    return next - n;
  }).slice(0, roygbiv.length - 1);
};

var rainbowGen = function rainbowArray() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { baseColor: 0xFF0000, colorValues: roygbiv },
      baseColor = _ref.baseColor,
      colorValues = _ref.colorValues;

  var number = baseColor;
  var result = generateDiffs(colorValues).map(function (diff) {
    return toHexString(number += diff);
  });
  return [toHexString(baseColor)].concat(_toConsumableArray(result));
};

exports.rainbowGen = rainbowGen;
exports.default = rainbowGen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb3lnYml2IiwiaXNaZXJvIiwiaXNUeXBlIiwidHlwZUNoZWNrIiwiZXhwZWN0ZWQiLCJvYmplY3QiLCJ0b0hleFN0cmluZyIsImhleFN0cmluZyIsIm51bWJlciIsInRvU3RyaW5nIiwic2xpY2UiLCJnZW5lcmF0ZURpZmZzIiwibWFrZURpZmZzIiwiY29sb3JWYWx1ZXMiLCJsZW5ndGgiLCJSYW5nZUVycm9yIiwiY29sb3JzIiwibWFwIiwibiIsImkiLCJhIiwibmV4dCIsInJhaW5ib3dHZW4iLCJyYWluYm93QXJyYXkiLCJiYXNlQ29sb3IiLCJyZXN1bHQiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBT0E7QUFDQSxJQUFNQSxVQUFVLENBQ2QsUUFEYyxFQUVkLFFBRmMsRUFHZCxRQUhjLEVBSWQsUUFKYyxFQUtkLFFBTGMsRUFNZCxRQU5jLEVBT2QsUUFQYyxDQUFoQjs7QUFVQSxJQUFNQyxTQUFTLG1CQUFPLENBQVAsQ0FBZjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNDLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCQyxNQUE3QixFQUFxQztBQUNsRCxTQUFPLG1CQUFPLGlCQUFLQSxNQUFMLENBQVAsRUFBcUJELFFBQXJCLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1FLGNBQWMsU0FBU0MsU0FBVCxHQUErQjtBQUFBLE1BQVpDLE1BQVksdUVBQUgsQ0FBRzs7QUFDakQsTUFBSSxDQUFDTixPQUFPLFFBQVAsRUFBaUJNLE1BQWpCLENBQUwsRUFBK0I7QUFDN0IsV0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBTyx1QkFBUUEsT0FBT0MsUUFBUCxDQUFnQixFQUFoQixDQUFSLEVBQTZCLENBQTdCLEVBQWdDLEdBQWhDLEVBQXFDQyxLQUFyQyxDQUEyQyxDQUFDLENBQTVDLENBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1DLGdCQUFnQixTQUFTQyxTQUFULEdBQXFDO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7QUFBQSxNQUNqREMsTUFEaUQsR0FDdENELFdBRHNDLENBQ2pEQyxNQURpRDs7QUFFekQsTUFBSUEsU0FBUyxDQUFULElBQWNBLFNBQVMsQ0FBM0IsRUFBOEI7QUFDNUIsVUFBTSxJQUFJQyxVQUFKLENBQWUsc0VBQWYsQ0FBTjtBQUNEOztBQUVELE1BQU1DLFNBQVMsbUJBQU9mLE1BQVAsRUFBZTtBQUFBLFdBQU0sa0JBQU1ELE9BQU4sQ0FBTjtBQUFBLEdBQWYsRUFBcUM7QUFBQSxXQUFNLGtCQUFNYSxXQUFOLENBQU47QUFBQSxHQUFyQyxFQUErREMsTUFBL0QsQ0FBZjs7QUFFQSxTQUFPRSxPQUFPQyxHQUFQLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBYTtBQUM3QixRQUFJRCxNQUFNQyxFQUFFTixNQUFGLEdBQVcsQ0FBckIsRUFBd0IsT0FBTyxDQUFQO0FBQ3hCLFFBQU1PLE9BQU9ELEVBQUVELElBQUksQ0FBTixDQUFiO0FBQ0EsV0FBT0UsT0FBT0gsQ0FBZDtBQUNELEdBSk0sRUFJSlIsS0FKSSxDQUlFLENBSkYsRUFJS1YsUUFBUWMsTUFBUixHQUFpQixDQUp0QixDQUFQO0FBS0QsQ0FiRDs7QUFlQSxJQUFNUSxhQUFhLFNBQVNDLFlBQVQsR0FFakI7QUFBQSxpRkFENkIsRUFBRUMsV0FBVyxRQUFiLEVBQXVCWCxhQUFhYixPQUFwQyxFQUM3QjtBQUFBLE1BREV3QixTQUNGLFFBREVBLFNBQ0Y7QUFBQSxNQURhWCxXQUNiLFFBRGFBLFdBQ2I7O0FBQ0EsTUFBSUwsU0FBU2dCLFNBQWI7QUFDQSxNQUFNQyxTQUFTZCxjQUFjRSxXQUFkLEVBQTJCSSxHQUEzQixDQUErQjtBQUFBLFdBQVFYLFlBQVlFLFVBQVVrQixJQUF0QixDQUFSO0FBQUEsR0FBL0IsQ0FBZjtBQUNBLFVBQVFwQixZQUFZa0IsU0FBWixDQUFSLDRCQUFtQ0MsTUFBbkM7QUFDRCxDQU5EOztRQVNFSCxVLEdBQUFBLFU7a0JBR2FBLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBsZWZ0UGFkIGZyb20gJ2xlZnQtcGFkJztcbmltcG9ydCB7XG4gIGlmRWxzZSxcbiAgZXF1YWxzLFxuICBjbG9uZSxcbiAgdHlwZSxcbn0gZnJvbSAncmFtZGEnO1xuXG4vLyBTdGFydGluZyBmcm9tICNGRjAwMDAgcmVkLCBlbmQgYXQgIzhCMDBGRiB2aW9sZXRcbmNvbnN0IHJveWdiaXYgPSBbXG4gIDB4RkYwMDAwLFxuICAweEZGN0YwMCxcbiAgMHhGRkZGMDAsXG4gIDB4MDBGRjAwLFxuICAweDAwMDBGRixcbiAgMHg0QjAwODIsXG4gIDB4OEIwMEZGLFxuXTtcblxuY29uc3QgaXNaZXJvID0gZXF1YWxzKDApO1xuXG5jb25zdCBpc1R5cGUgPSBmdW5jdGlvbiB0eXBlQ2hlY2soZXhwZWN0ZWQsIG9iamVjdCkge1xuICByZXR1cm4gZXF1YWxzKHR5cGUob2JqZWN0KSwgZXhwZWN0ZWQpO1xufTtcblxuY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbiBoZXhTdHJpbmcobnVtYmVyID0gMCkge1xuICBpZiAoIWlzVHlwZSgnTnVtYmVyJywgbnVtYmVyKSkge1xuICAgIHJldHVybiAnMDAwMDAwJztcbiAgfVxuXG4gIHJldHVybiBsZWZ0UGFkKG51bWJlci50b1N0cmluZygxNiksIDYsICcwJykuc2xpY2UoLTYpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVEaWZmcyA9IGZ1bmN0aW9uIG1ha2VEaWZmcyhjb2xvclZhbHVlcyA9IFtdKSB7XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBjb2xvclZhbHVlcztcbiAgaWYgKGxlbmd0aCA+IDcgJiYgbGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbml0aWFsIGNvbG9yIHZhbHVlcyBtdXN0IGhhdmUgYSBsZW5ndGggb2YgNywgb3Igbm90IHN1cHBsaWVkIGF0IGFsbCcpO1xuICB9XG5cbiAgY29uc3QgY29sb3JzID0gaWZFbHNlKGlzWmVybywgKCkgPT4gY2xvbmUocm95Z2JpdiksICgpID0+IGNsb25lKGNvbG9yVmFsdWVzKSkobGVuZ3RoKTtcblxuICByZXR1cm4gY29sb3JzLm1hcCgobiwgaSwgYSkgPT4ge1xuICAgIGlmIChpID09PSBhLmxlbmd0aCAtIDEpIHJldHVybiAwO1xuICAgIGNvbnN0IG5leHQgPSBhW2kgKyAxXTtcbiAgICByZXR1cm4gbmV4dCAtIG47XG4gIH0pLnNsaWNlKDAsIHJveWdiaXYubGVuZ3RoIC0gMSk7XG59O1xuXG5jb25zdCByYWluYm93R2VuID0gZnVuY3Rpb24gcmFpbmJvd0FycmF5KFxuICB7IGJhc2VDb2xvciwgY29sb3JWYWx1ZXMgfSA9IHsgYmFzZUNvbG9yOiAweEZGMDAwMCwgY29sb3JWYWx1ZXM6IHJveWdiaXYgfSxcbikge1xuICBsZXQgbnVtYmVyID0gYmFzZUNvbG9yO1xuICBjb25zdCByZXN1bHQgPSBnZW5lcmF0ZURpZmZzKGNvbG9yVmFsdWVzKS5tYXAoZGlmZiA9PiB0b0hleFN0cmluZyhudW1iZXIgKz0gZGlmZikpO1xuICByZXR1cm4gW3RvSGV4U3RyaW5nKGJhc2VDb2xvciksIC4uLnJlc3VsdF07XG59O1xuXG5leHBvcnQge1xuICByYWluYm93R2VuLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFpbmJvd0dlbjtcbiJdfQ==
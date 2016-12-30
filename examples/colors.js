#!/usr/bin/env node
const style = require('ansi-styles');

const rainbowGen = require('../build');
const {default:rainbow} = rainbowGen;

const colors = Array.from(rainbow(randomInt(0, 16777215)));

colors.forEach(c => {
  const hex = `#${c}`;
  console.log(hex, colorize(hex, hex));
});

function colorize(string, color) {
  return `${style.color.ansi.hex(color)}${string}${style.color.close}`;
}

function randomInt(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

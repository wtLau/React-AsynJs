#!/usr/bin/env node

// import { readFile } from 'fs'
const readFile = require('fs').readFile;
const path = require('path');

const lines = []


const buildHaiku = () => {
  const opening = readFile(
  path.resolve(process.cwd(), 'text/opening.txt'), 'utf8', (err,data) => {
  if (err) throw err;
  lines.push(data+'\n')

  const middle = readFile(
    path.resolve(process.cwd(), 'text/middle.txt'), 'utf8', (err,data) => {
    if (err) throw err;
    lines.push(data+'\n')

    const ending = readFile(
      path.resolve(process.cwd(), 'text/end.txt'), 'utf8', (err,data) => {
      if (err) throw err;
        lines.push(data+'\n');

      console.log(lines.join(''));
    });
  });
});
}

try {
  buildHaiku()
} catch(e) {
  //what can go wrong?
}

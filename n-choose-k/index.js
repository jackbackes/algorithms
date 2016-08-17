'use strict';

const math = require('mathjs')
const Promise = require('bluebird');

function recursive(n, k){
  if(k === 0) return 1;
  if(n === 0) return 0;
  return recursive(n-1, k-1) + recursive(n-1, k);
}

function factorial(n, k){
  return Promise.resolve(
    math.round( math.factorial(n) / ( math.factorial(k) * math.factorial(n-k) ) )
  )
}

module.exports = {
  recursive,
  factorial
};

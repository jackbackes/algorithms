'use strict';

const chai = require('chai');
const spies = require('chai-spies');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(spies);
const should = chai.should();

const {recursive, factorial} = require('./index.js');

describe('n choose k', ()=> {
  describe('recursive', ()=> {
    it('n choose n', ()=> {
      recursive(2, 2).should.equal(1);

    });
    it('2 choose 1 = 2', ()=> {
      recursive(2, 1).should.equal(2);

    });
    it('3 choose 2 = 3', ()=> {
      recursive(3, 2).should.equal(3)
    })
    it('big values still work quickly.', function(){
      this.timeout(2000);
      return recursive(30, 10).should.equal(30045015);
    })
  })
  describe('factorial', ()=> {
    it('2 choose 2', function(){
      return factorial(2, 2).should.eventually.equal(1)
    } )
    it('2 choose 1 = 2', () => {
      return factorial(2, 1).should.eventually.equal(2)
    })
    it('3 choose 2 = 3', () => {
      return factorial(3, 2).should.eventually.equal(3)
    })
    it('small values do not fall back to recursive', () => {
      return factorial(10, 5).should.eventually.equal(252)
    })
    it('big values timeout, fall back to recursive approach.', () => {
      return factorial(50, 10).should.eventually.equal(10272278170)
    })
  })
})

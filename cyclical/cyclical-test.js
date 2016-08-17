'use strict';

const should = require('chai').should();
const isCyclical = require('./cyclical.js');
const {twoNodes, threeNodesNonCyclical, triangle, fourNodesNonCyclical, square} = require('../test-data');


describe('cyclicality test', ()=>{
  it('two nodes returns false', ()=> {
    isCyclical(twoNodes.nodes, twoNodes.edges).should.be.false;
  })
  it('three node linked list returns false', ()=> {
        isCyclical(threeNodesNonCyclical.nodes, threeNodesNonCyclical.edges).should.be.false;
  })
  it('triangle returns true', ()=> {
        isCyclical(triangle.nodes, triangle.edges).should.be.true;
  })
  it('four node linked list returns false', ()=> {
        isCyclical(fourNodesNonCyclical.nodes, twoNodes.edges).should.be.false;
  })
  it('square returns true', ()=> {
        isCyclical(square.nodes, square.edges).should.be.true;
  })
})

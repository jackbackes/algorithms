'use strict';
const should = require('chai').should();
const dijikstra = require('./dijikstra.js')
var jsc = require("jsverify");


const {nodes, edges} = require('../test-data').dijikstraGraph

describe('dijikstra', ()=> {
  it('calculates distance correctly', ()=> {
    let Start = nodes.find( el => el.name === 'a' )
    let End = nodes.find( el => el.name === 'z' )

    let result = dijikstra(nodes, edges, Start, End )
    result.distance.should.equal(17);
  })
  it('returns the correct path', ()=> {
    let Start = nodes.find( el => el.name === 'a' )
    let End = nodes.find( el => el.name === 'z' )

    let result = dijikstra(nodes, edges, Start, End )
    result.Path.length.should.equal(4);
    result.Path[0].name.should.equal('a');
    result.Path[1].name.should.equal('c');
    result.Path[2].name.should.equal('y');
    result.Path[result.Path.length-1].name.should.equal('z');
  })
})

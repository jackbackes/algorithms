'use strict';
const should = require('chai').should();
const prim = require('./prim.js')



describe('prim', ()=> {
  it('returns a tree with at least one edge', ()=> {
    const {nodes, edges} = require('../test-data').primGraph;
    edges.length.should.be.greaterThan(0);
    const tree = prim( nodes, edges );
    tree.edges.length.should.be.greaterThan(0);
    edges.length.should.be.greaterThan(tree.edges.length);
  })
  it('returns a tree with equal number of nodes to graph', ()=> {
    const {nodes, edges} = require('../test-data').primGraph;
    const tree = prim( nodes, edges );
    tree.nodes.length.should.equal(nodes.length);
  })
  it('returns a tree with total weight lower than graph total weight', ()=> {
    const {nodes, edges} = require('../test-data').primGraph
    const tree = prim( nodes, edges );
    const graphWeight = edges.reduce( (prev, next) => prev + next.weight, 0 );
    const treeWeight = tree.edges.reduce( (prev, next) => prev + next.weight, 0);
    graphWeight.should.be.greaterThan(0);
    treeWeight.should.not.be.undefined;
    treeWeight.should.be.lessThan(graphWeight);
  })
  it('returns a non-cyclic tree when given cyclical graph', ()=> {
    const isCyclical = require('../cyclical/cyclical');
    const {nodes, edges} = require('../test-data').primGraph
    const tree = prim( nodes, edges );
    // test input
    isCyclical(nodes, edges).should.be.true;
    // test output
    isCyclical(tree.nodes, tree.edges).should.be.false;
  })
})

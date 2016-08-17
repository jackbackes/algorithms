'use strict';

// create priority queue of edges connected to source.

// a minimum spanning tree is the minimum-weighted non-cyclic graph that connects every point of an undirected graph.
// given an adjacency list, what is the minimum spanning tree?

// one approach:

function prim(nodes, edges){

  // create a priority queue PQ of nodes
  let PQ = nodes.map( node => Object.assign({}, node, {priority: Infinity}))

  // choose a starting point.
  const StartIndex = Math.floor( Math.random() * PQ.length )

  // priority of starting node is 0. all other nodes Infinity.
  PQ[StartIndex].priority = 0;
  PQ = PQ.sort( (a,b) => a.priority-b.priority );

  // copy the edge list into weight-priority-queue WPQ.
  let WPQ = edges.map( edge => Object.assign({}, edge )).sort( (a,b) => a.weight-b.weight )

  // array of MSTs.
  const startNode = PQ.shift();
  const mstNodes = [ nodes.find( el => startNode.name === el.name ) ];
  const mstEdges = [];
  let edgesToAdd = [];
  // while PQ:
    while(PQ.length){
      edgesToAdd = WPQ.filter( edge => mstNodes.some( node => node.name === edge.to.name || node.name === edge.from.name && !mstEdges.some(mstEdge => mstEdge.name === edge.name ) ) );

      const lightestEdge = edgesToAdd.sort( (a,b)=> a.weight - b.weight)[0];

      const nodeToAdd = mstNodes.some( node => lightestEdge.to.name === node.name ) ? lightestEdge.from : lightestEdge.to;

      mstNodes.push(nodeToAdd);
      mstEdges.push(lightestEdge);

      const lightestEdgeIndex = WPQ.findIndex( el => lightestEdge.name === el.name);
      WPQ.splice(lightestEdgeIndex, 1);
      const nodeToAddIndex = PQ.findIndex(el => el.name === nodeToAdd.name);
      PQ.splice(nodeToAddIndex, 1);
    }
    return {nodes: mstNodes, edges: mstEdges};
}

module.exports = prim;

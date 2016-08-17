'use strict';

const {Node, Edge} = require('./data-structures');

const dijikstraGraph = {}
dijikstraGraph.nodes = [
    new Node('a'),
    new Node('b'),
    new Node('c'),
    new Node('d'),
    new Node('e'),
    new Node('x'),
    new Node('y'),
    new Node('z')
  ];
dijikstraGraph.edges = [
    new Edge( dijikstraGraph.nodes[0], dijikstraGraph.nodes[1], 8),
    new Edge( dijikstraGraph.nodes[1], dijikstraGraph.nodes[2], 10),
    new Edge( dijikstraGraph.nodes[0], dijikstraGraph.nodes[2], 5),
    new Edge( dijikstraGraph.nodes[2], dijikstraGraph.nodes[3], 10),
    new Edge( dijikstraGraph.nodes[1], dijikstraGraph.nodes[4], 6),
    new Edge( dijikstraGraph.nodes[5], dijikstraGraph.nodes[3], 7),
    new Edge( dijikstraGraph.nodes[6], dijikstraGraph.nodes[7], 4),
    new Edge( dijikstraGraph.nodes[2], dijikstraGraph.nodes[6], 8),
    new Edge( dijikstraGraph.nodes[7], dijikstraGraph.nodes[3], 9),
    new Edge( dijikstraGraph.nodes[3], dijikstraGraph.nodes[5], 8)
  ]

  const primGraph = {}
  primGraph.nodes = [
      new Node('a'),
      new Node('b'),
      new Node('c'),
      new Node('d'),
      new Node('e'),
      new Node('x'),
      new Node('y'),
      new Node('z')
    ];
  primGraph.edges = [
      new Edge( primGraph.nodes[0], primGraph.nodes[1], 8),
      new Edge( primGraph.nodes[1], primGraph.nodes[2], 10),
      new Edge( primGraph.nodes[0], primGraph.nodes[2], 5),
      new Edge( primGraph.nodes[2], primGraph.nodes[3], 10),
      new Edge( primGraph.nodes[1], primGraph.nodes[4], 6),
      new Edge( primGraph.nodes[5], primGraph.nodes[3], 7),
      new Edge( primGraph.nodes[6], primGraph.nodes[7], 4),
      new Edge( primGraph.nodes[2], primGraph.nodes[6], 8),
      new Edge( primGraph.nodes[7], primGraph.nodes[3], 9),
      new Edge( primGraph.nodes[3], primGraph.nodes[5], 8)
    ]

    const twoNodes = {
      nodes: [
        {name: 'a'},
        {name: 'b'}
      ],
      edges: [
        {name: 'a b'}
      ]
    }

    const threeNodesNonCyclical = {
      nodes: [
        {name: 'a'},
        {name: 'b'},
        {name: 'c'}
      ],
      edges: [
        {name: 'a b'},
        {name: 'b c'}
      ]
    }

    const triangle = {
      nodes: [
        {name: 'a'},
        {name: 'b'},
        {name: 'c'}
      ],
      edges: [
        {name: 'a b'},
        {name: 'b c'},
        {name: 'a c'}
      ]
    }

    const fourNodesNonCyclical = {
      nodes: [
        {name: 'a'},
        {name: 'b'},
        {name: 'c'},
        {name: 'd'}
      ],
      edges: [
        {name: 'a b'},
        {name: 'b c'},
        {name: 'c d'}
      ]
    }

    const square = {
      nodes: [
        {name: 'a'},
        {name: 'b'},
        {name: 'c'},
        {name: 'd'}
      ],
      edges: [
        {name: 'a b'},
        {name: 'b c'},
        {name: 'c d'},
        {name: 'd a'}
      ]
    }

module.exports = {
  dijikstraGraph,
  primGraph,
  twoNodes,
  triangle,
  threeNodesNonCyclical,
  fourNodesNonCyclical,
  square
}

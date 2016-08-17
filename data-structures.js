

function Node(name = null){
  this.name = name;
}

function Edge(from = null, to = null, weight = null){
  this.to = to;
  this.from = from;
  this.name = `${to.name} ${from.name}`
  this.weight = weight;
}


module.exports = {
  Node, Edge
}

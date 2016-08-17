// checks for cyclicality of an undirected graph.
//

function checkForCyclicality(nodes, edges){
  const start = nodes.shift();
  const visited = [start];
  const visitedEdges = [];
  const connectedEdges = edges.filter( edge => edge.name.split(' ').some( char => char === start.name ) );
  return connectedEdges.some( edge => isCyclical(start, edge, visited, edges, visitedEdges ) )
}

function isCyclical(previousNode, currentEdge, visitedNodes, edges, visitedEdges){
  visitedEdges.push(currentEdge);
  if(visitedEdges.length === edges.length) return false;

  let edgeNodes = currentEdge.name.split(' ');
  let currentNode = previousNode.name === edgeNodes[0] ? ({name: edgeNodes[1]}) : ({name: edgeNodes[0]});
  if( visitedNodes.some( el => el.name === currentNode.name ) ) return true;
  visitedNodes.push(currentNode);
  const connectedEdges = edges.filter( edge => edge.name.split(' ').some( char => char === currentNode.name ) && !visitedEdges.some( visitedEdge => visitedEdge.name === edge.name ) );
  return connectedEdges.some( edge => isCyclical(currentNode, edge, visitedNodes, edges, visitedEdges) )

}


module.exports = checkForCyclicality;

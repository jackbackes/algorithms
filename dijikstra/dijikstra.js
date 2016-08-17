'use strict';

function dijikstra(nodes, edges, start, end){
  let Queue = nodes.slice().map( el => Object.assign({}, el, {priority: el.name === start.name ? 0 : Infinity}) );
  const parents = {};
  const distances = {};
  const Start = start.name;
  Queue.forEach( el => parents[el.name] = null )
  Queue.forEach( el => distances[el.name] = Infinity )
  distances[Start] = 0;

  while( Queue.length ) {
    Queue = Queue.sort( (a, b) => a.priority - b.priority );
    const from = Queue.shift();
    const fromQueue = edges.filter( edge => edge.from.name === from.name );
    while( fromQueue.length ){
      const edge = fromQueue.shift();
      const to = edge.to;
      if( edge.weight < distances[to.name] ){
        distances[to.name] = edge.weight;
        parents[to.name] = from.name;
      }
    }
  }

  let Path = [end];
  let distance = 0;
  while(Path[0].name !== start.name) {
    let parentName = parents[Path[0].name];
    distance += distances[Path[0].name];
    Path.unshift( nodes.find( el => el.name === parentName ) )
  }
  return ({Path, distance});
}

module.exports = dijikstra;

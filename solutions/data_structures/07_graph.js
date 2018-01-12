/*
Create a Graph class that contains properties for its vertices and adjacent list. It should the vertices in a list and the adjacent list should be implemented as an object.

The Graph class should have the following methods:
addVertex - creates a vertex with a given value and adds it to the vertices list and adjacent list
addEdge - takes in two vertices and creates a relationship between them
contains - returns a boolean based on if a given vertex is present in the adjacent list
bfs - performs a breadth-first traversal of the graph based on a starting vertex
toString -gets the values in the adjacent list and transforms it into a string

Example:

const artistsGraph = new Graph();
let artists = ['kendrick lamar', 'jay rock', 'drake', 'mc eiht', 'anna wise', 'dr. dre'];
artists.forEach(artist => artistsGraph.addVertex(artist));
artistsGraph.addEdge('kendrick lamar', 'jay rock');
artistsGraph.addEdge('kendrick lamar', 'dr. dre');
artistsGraph.addEdge('kendrick lamar', 'drake');
artistsGraph.contains('kendrick lamar'); => return true
artistsGraph.bfs('kendrick lamar'); => traverses all nodes in artistsGraph from this vertex
artistsGraph.toString(); => return 'kendrick lamar => jay rock, dr. dre, drake\njay rock => kendrick lamar\ndrake => kendrick lamar\nmc eiht => \nanna wise => \ndr. dre => kendrick lamar'
*/

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjList[vertex] = [];
  }

  addEdge(fromVertex, toVertex) {
    this.adjList[fromVertex].push(toVertex);
    this.adjList[toVertex].push(fromVertex);
  }

  contains(vertex) {
    return this.adjList[vertex] !== undefined;
  }

  bfs(startingVertex) {
    const visited = {};
    this.vertices.forEach((vertex) => {
      visited[vertex] = false;
    });
    visited[startingVertex] = true;

    const queue = [];
    queue.push(startingVertex);

    while (queue.length) {
      const currVertex = queue.shift();
      const currVertexEdges = this.adjList[currVertex];

      for (const vertex of currVertexEdges) {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      }
    }
  }

  toString() {
    let result = '';

    const artists = Object.keys(this.adjList);

    artists.forEach((artist, idx) => {
      result += `${artist} =>
      ${this.adjList[artist].join(', ')}
      ${idx < artists.length - 1 ? '\n' : ''}`;
    });

    return result;
  }
}

export default Graph;

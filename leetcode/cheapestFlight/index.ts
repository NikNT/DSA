function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const graph: number[][] = buildGraph(n, flights);
  const queue: number[][] = [];
  queue.push([src, 0, -1]);

  while (queue.length > 0) {
    const [node, cost, stops] = queue.shift()!;
    if (node === dst) return cost;
    if (stops >= k) continue;

    for (const neighbour of graph[node]) {
      queue.push([neighbour[0], cost + neighbour[1], stops + 1]);
    }

    queue.sort((a, b) => a[1] - b[1]);
  }

  return -1;
}

function buildGraph(n: number, flights: number[][]): number[][] {
  const graph: number[][] = new Array(n).fill(null).map(() => []);

  for (const [from, to, price] of flights) {
    //@ts-ignore
    graph[from].push([to, price]);
  }

  return graph;
}

const n: number = 3;
const flights: number[][] = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500],
];
const src: number = 0;
const dst: number = 2;
const k: number = 1;

console.log(findCheapestPrice(n, flights, src, dst, k));

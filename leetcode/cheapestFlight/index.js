function findCheapestPrice(n, flights, src, dst, k) {
    var graph = buildGraph(n, flights);
    var queue = [];
    queue.push([src, 0, -1]);
    while (queue.length > 0) {
        var _a = queue.shift(), node = _a[0], cost = _a[1], stops = _a[2];
        if (node === dst)
            return cost;
        if (stops >= k)
            continue;
        for (var _i = 0, _b = graph[node]; _i < _b.length; _i++) {
            var neighbour = _b[_i];
            queue.push([neighbour[0], cost + neighbour[1], stops + 1]);
        }
        queue.sort(function (a, b) { return a[1] - b[1]; });
    }
    return -1;
}
function buildGraph(n, flights) {
    var graph = new Array(n).fill(null).map(function () { return []; });
    for (var _i = 0, flights_1 = flights; _i < flights_1.length; _i++) {
        var _a = flights_1[_i], from = _a[0], to = _a[1], price = _a[2];
        //@ts-ignore
        graph[from].push([to, price]);
    }
    return graph;
}
var n = 3;
var flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500],
];
var src = 0;
var dst = 2;
var k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));

/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
*/
/**
 *
 * @param {Array} roads
 * @returns {Array} of sequentially connected roads (route).
 */
function makeRoute(roads) {
    const route = [];

    // Searching for starting point.
    for (point of roads) {
        if (roads.find(road => road.to === point.from) === undefined) { // Current point has no pair so it's a starting one.
            route.push(point);
            roads.splice(roads.indexOf(point), 1); // Removing added point.
            break;
        }
    }

    // Trailing.
    while (true) {
        let nextPoint = roads.find(road => road.from === route[route.length - 1].to)
        if (nextPoint === undefined) break; // No more roads.
        route.push(nextPoint);
        roads.splice(roads.indexOf(nextPoint), 1); // Removing added point.
    }
    return route;
}

module.exports = makeRoute;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fretXPosition = {
    4: [10, 20, 30, 40, 50],
    6: [0, 10, 20, 30, 40, 50]
};
const fretYPosition = [2.35, 13.9, 26, 38];
const offset = {
    4: 0,
    6: -1
};
const positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
};
const getStringPosition = (string, strings) => { var _a; return positions.string[string + ((_a = offset[strings]) !== null && _a !== void 0 ? _a : 0)]; };
const onlyBarres = (frets, barre) => frets
    .map((f, index) => ({ position: index, value: f }))
    .filter(f => f.value === barre);
const Barre = ({ barre, frets, capo, finger, lite = false }) => {
    var _a;
    const strings = frets.length;
    const barreFrets = onlyBarres(frets, barre);
    if (barreFrets.length === 0) {
        return null;
    }
    const string1 = barreFrets[0].position;
    const string2 = barreFrets[barreFrets.length - 1].position;
    const width = (string2 - string1) * 10;
    const y = fretYPosition[barre - 1];
    const xPositions = (_a = fretXPosition[strings]) !== null && _a !== void 0 ? _a : fretXPosition[6];
    return ((0, jsx_runtime_1.jsxs)("g", { children: [capo && ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("g", { transform: `translate(${getStringPosition(strings, strings)}, ${positions.fret[barreFrets[0].value]})`, children: (0, jsx_runtime_1.jsx)("path", { d: `
                M 0, 0
                m -4, 0
                a 4,4 0 1,1 8,0
              `, fill: '#555', fillOpacity: 0.2, transform: 'rotate(-90)' }) }), (0, jsx_runtime_1.jsx)("rect", { fill: '#555', x: xPositions[0], y: fretYPosition[barre - 1], width: (strings - 1) * 10, fillOpacity: 0.2, height: 8.25 }), (0, jsx_runtime_1.jsx)("g", { transform: `translate(${getStringPosition(1, strings)}, ${positions.fret[barreFrets[0].value]})`, children: (0, jsx_runtime_1.jsx)("path", { d: `
                M 0, 0
                m -4, 0
                a 4,4 0 1,1 8,0
              `, fill: '#555', fillOpacity: 0.2, transform: 'rotate(90)' }) })] })), barreFrets.map(fret => ((0, jsx_runtime_1.jsx)("circle", { strokeWidth: '0.25', stroke: '#444', fill: '#444', cx: getStringPosition(strings - fret.position, strings), cy: positions.fret[fret.value], r: 4 }, fret.position))), (0, jsx_runtime_1.jsx)("rect", { fill: '#444', x: xPositions[string1], y: y, width: width, height: 8.25 }), !lite && finger && barreFrets.map(fret => ((0, jsx_runtime_1.jsx)("text", { fontSize: '3pt', fontFamily: 'Verdana', textAnchor: 'middle', fill: 'white', x: getStringPosition(strings - fret.position, strings), y: positions.finger[fret.value], children: finger }, fret.position)))] }));
};
exports.default = Barre;
//# sourceMappingURL=index.js.map
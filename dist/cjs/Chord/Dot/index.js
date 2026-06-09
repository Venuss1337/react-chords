"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
};
const offset = {
    4: 0,
    6: -1
};
const getStringPosition = (string, strings) => { var _a; return positions.string[string + ((_a = offset[strings]) !== null && _a !== void 0 ? _a : 0)]; };
const radius = {
    open: 2,
    fret: 4
};
const Dot = ({ string, fret = 0, finger, strings, lite = false }) => fret === -1
    ? ((0, jsx_runtime_1.jsx)("text", { fontSize: '0.7rem', fill: '#444', fontFamily: 'Verdana', textAnchor: 'middle', x: getStringPosition(string, strings), y: '-2', children: "x" }))
    : ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("circle", { strokeWidth: '0.25', stroke: '#444', fill: fret === 0 ? 'transparent' : '#444', cx: getStringPosition(string, strings), cy: positions.fret[fret], r: fret === 0 ? radius.open : radius.fret }), !lite && finger !== undefined && finger > 0 && ((0, jsx_runtime_1.jsx)("text", { fontSize: '3pt', fontFamily: 'Verdana', textAnchor: 'middle', fill: 'white', x: getStringPosition(string, strings), y: positions.finger[fret], children: finger }))] }));
exports.default = Dot;
//# sourceMappingURL=index.js.map
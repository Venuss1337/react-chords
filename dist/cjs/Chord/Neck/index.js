"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const offsets = {
    4: {
        x: 10,
        y: 10,
        length: 40
    },
    6: {
        x: 0,
        y: 0,
        length: 50
    }
};
const getOffset = (strings) => { var _a; return (_a = offsets[strings]) !== null && _a !== void 0 ? _a : offsets[6]; };
const getNeckHorizonalLine = (pos, strings) => `M ${getOffset(strings).x} ${12 * pos} H ${getOffset(strings).length}`;
const getNeckVerticalLine = (pos, strings) => `M ${getOffset(strings).y + pos * 10} 0 V 48`;
const getNeckPath = (strings, fretsOnChord) => Array.from({ length: fretsOnChord + 1 }, (_, pos) => getNeckHorizonalLine(pos, strings)).join(' ').concat(Array.from({ length: strings }, (_, pos) => getNeckVerticalLine(pos, strings)).join(' '));
const getBarreOffset = (strings, frets, baseFret, capo) => strings === 6
    ? frets[0] === 1 || capo ? (baseFret > 9 ? -12 : -11) : (baseFret > 9 ? -10 : -7)
    : frets[0] === 1 || capo ? (baseFret > 9 ? -1 : 0) : (baseFret > 9 ? 3 : 4);
const Neck = ({ tuning, frets, strings, fretsOnChord, baseFret = 1, capo, lite = false }) => {
    const offset = getOffset(strings);
    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { stroke: 'inherit', strokeWidth: '0.25', strokeLinecap: 'square', strokeLinejoin: 'miter', d: getNeckPath(strings, fretsOnChord) }), baseFret === 1
                ? ((0, jsx_runtime_1.jsx)("path", { stroke: 'inherit', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', d: `M ${offset.x} 0 H ${offset.length}` }))
                : ((0, jsx_runtime_1.jsxs)("text", { fontSize: '0.25rem', fill: 'currentColor', fontFamily: 'Verdana', x: getBarreOffset(strings, frets, baseFret, capo), y: '8', children: [baseFret, "fr"] })), !lite && ((0, jsx_runtime_1.jsx)("g", { children: tuning.slice().map((note, index) => ((0, jsx_runtime_1.jsx)("text", { fontSize: '0.3rem', fill: 'currentColor', fontFamily: 'Verdana', textAnchor: 'middle', x: offset.x + index * 10, y: '53', children: note }, index))) }))] }));
};
exports.default = Neck;
//# sourceMappingURL=index.js.map
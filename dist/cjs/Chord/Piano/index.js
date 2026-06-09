"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const blackKeys = {
    C: 'C#',
    D: 'D#',
    F: 'F#',
    G: 'G#',
    A: 'A#'
};
const normalizeNote = (note) => note
    .replace('Db', 'C#')
    .replace('Eb', 'D#')
    .replace('Gb', 'F#')
    .replace('Ab', 'G#')
    .replace('Bb', 'A#');
const Piano = ({ chord, lite = false }) => {
    const chordNotes = chord.frets.map(normalizeNote);
    return ((0, jsx_runtime_1.jsxs)("g", { children: [whiteKeys.map((note, i) => {
                const isPressed = chordNotes.includes(note);
                return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("rect", { x: i * 10, y: 0, width: 10, height: 48, fill: isPressed ? '#e5e7eb' : '#ffffff', stroke: '#444', strokeWidth: '0.25' }), isPressed && ((0, jsx_runtime_1.jsx)("text", { x: (i * 10) + 5, y: 42, textAnchor: 'middle', fontSize: '3px', fontFamily: 'Arial', fill: '#000', children: `${note}4` }))] }, `white-${note}`));
            }), whiteKeys.map((note, i) => {
                const blackNote = blackKeys[note];
                if (!blackNote) {
                    return null;
                }
                const isPressed = chordNotes.includes(blackNote);
                return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("rect", { x: (i * 10) + 7, y: 0, width: 6, height: 30, fill: isPressed ? '#e5e7eb' : '#000000', stroke: '#444', strokeWidth: '0.25' }), isPressed && ((0, jsx_runtime_1.jsx)("text", { x: (i * 10) + 10, y: 25, textAnchor: 'middle', fontSize: '2.5px', fontFamily: 'Arial', fill: '#000', children: `${blackNote}4` }))] }, `black-${blackNote}`));
            }), !lite && chord.octave && ((0, jsx_runtime_1.jsxs)("text", { fontSize: '0.3rem', fill: '#444', fontFamily: 'Verdana', x: -12, y: 24, children: ["Octave: ", chord.octave] }))] }));
};
exports.default = Piano;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const index_js_1 = __importDefault(require("./Neck/index.js"));
const index_js_2 = __importDefault(require("./Dot/index.js"));
const index_js_3 = __importDefault(require("./Barre/index.js"));
const index_js_4 = __importDefault(require("./Piano/index.js"));
const onlyDots = (chord) => chord.frets
    .map((f, index) => ({ position: index, value: f }))
    .filter(f => !chord.barres || chord.barres.indexOf(f.value) === -1);
const isPianoChord = (chord, instrument) => instrument.name === 'Piano' && !!chord && chord.frets.every(fret => typeof fret === 'string');
const isStringChord = (chord) => !!chord && chord.frets.every(fret => typeof fret === 'number');
const isStringInstrument = (instrument) => instrument.name !== 'Piano';
const Chord = ({ chord, instrument, lite = false, className, style }) => {
    var _a;
    if (!(chord === null || chord === void 0 ? void 0 : chord.frets)) {
        return null;
    }
    if (isPianoChord(chord, instrument)) {
        return ((0, jsx_runtime_1.jsx)("svg", { className: className, width: '100%', height: 'auto', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMin meet', viewBox: '0 0 80 70', color: '#444', stroke: '#444', style: style, children: (0, jsx_runtime_1.jsx)("g", { transform: 'translate(5, 13)', children: (0, jsx_runtime_1.jsx)(index_js_4.default, { chord: chord, lite: lite }) }) }));
    }
    if (!isStringChord(chord) || !isStringInstrument(instrument)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("svg", { className: className, width: '100%', height: 'auto', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMin meet', viewBox: '0 0 80 70', color: '#444', stroke: '#444', style: style, children: (0, jsx_runtime_1.jsxs)("g", { transform: 'translate(13, 13)', children: [(0, jsx_runtime_1.jsx)(index_js_1.default, { tuning: instrument.tunings.standard, strings: instrument.strings, frets: chord.frets, capo: chord.capo, fretsOnChord: instrument.fretsOnChord, baseFret: chord.baseFret, lite: lite }), (_a = chord.barres) === null || _a === void 0 ? void 0 : _a.map((barre, index) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsx)(index_js_3.default, { capo: index === 0 && chord.capo, barre: barre, finger: (_a = chord.fingers) === null || _a === void 0 ? void 0 : _a[chord.frets.indexOf(barre)], frets: chord.frets, lite: lite }, index));
                }), onlyDots(chord).map(fret => {
                    var _a;
                    return ((0, jsx_runtime_1.jsx)(index_js_2.default, { string: instrument.strings - fret.position, fret: fret.value, strings: instrument.strings, finger: (_a = chord.fingers) === null || _a === void 0 ? void 0 : _a[fret.position], lite: lite }, fret.position));
                })] }) }));
};
exports.default = Chord;
//# sourceMappingURL=index.js.map
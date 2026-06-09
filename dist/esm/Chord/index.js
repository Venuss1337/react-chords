import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Neck from './Neck/index.js';
import Dot from './Dot/index.js';
import Barre from './Barre/index.js';
import Piano from './Piano/index.js';
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
        return (_jsx("svg", { className: className, width: '100%', height: 'auto', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMin meet', viewBox: '0 0 80 70', color: '#444', stroke: '#444', style: style, children: _jsx("g", { transform: 'translate(5, 13)', children: _jsx(Piano, { chord: chord, lite: lite }) }) }));
    }
    if (!isStringChord(chord) || !isStringInstrument(instrument)) {
        return null;
    }
    return (_jsx("svg", { className: className, width: '100%', height: 'auto', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMin meet', viewBox: '0 0 80 70', color: '#444', stroke: '#444', style: style, children: _jsxs("g", { transform: 'translate(13, 13)', children: [_jsx(Neck, { tuning: instrument.tunings.standard, strings: instrument.strings, frets: chord.frets, capo: chord.capo, fretsOnChord: instrument.fretsOnChord, baseFret: chord.baseFret, lite: lite }), (_a = chord.barres) === null || _a === void 0 ? void 0 : _a.map((barre, index) => {
                    var _a;
                    return (_jsx(Barre, { capo: index === 0 && chord.capo, barre: barre, finger: (_a = chord.fingers) === null || _a === void 0 ? void 0 : _a[chord.frets.indexOf(barre)], frets: chord.frets, lite: lite }, index));
                }), onlyDots(chord).map(fret => {
                    var _a;
                    return (_jsx(Dot, { string: instrument.strings - fret.position, fret: fret.value, strings: instrument.strings, finger: (_a = chord.fingers) === null || _a === void 0 ? void 0 : _a[fret.position], lite: lite }, fret.position));
                })] }) }));
};
export default Chord;
//# sourceMappingURL=index.js.map
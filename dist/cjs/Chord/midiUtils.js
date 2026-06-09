"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMidiToPosition = void 0;
const tunings = {
    guitar: [40, 45, 50, 55, 59, 64],
    ukulele: [55, 60, 64, 69]
};
const addMidiToPosition = (position, instrumentName) => {
    if (position.midi) {
        return position;
    }
    const tuning = tunings[instrumentName];
    if (!tuning) {
        return position;
    }
    const midiNotes = position.frets
        .map((fret, stringIndex) => {
        if (fret === -1) {
            return null;
        }
        const openStringMidi = tuning[stringIndex];
        return openStringMidi === undefined ? null : openStringMidi + fret;
    })
        .filter((note) => note !== null);
    return {
        ...position,
        midi: midiNotes
    };
};
exports.addMidiToPosition = addMidiToPosition;
//# sourceMappingURL=midiUtils.js.map
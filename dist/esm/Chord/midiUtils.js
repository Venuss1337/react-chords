const tunings = {
    guitar: [40, 45, 50, 55, 59, 64],
    ukulele: [55, 60, 64, 69]
};
export const addMidiToPosition = (position, instrumentName) => {
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
//# sourceMappingURL=midiUtils.js.map
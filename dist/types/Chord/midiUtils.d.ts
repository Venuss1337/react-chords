import type { StringChord } from '../types.js';
export declare const addMidiToPosition: <TPosition extends StringChord>(position: TPosition, instrumentName: string) => TPosition & {
    midi?: number[];
};
//# sourceMappingURL=midiUtils.d.ts.map
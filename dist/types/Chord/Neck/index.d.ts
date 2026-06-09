import type { Fret, NoteName } from '../../types.js';
interface NeckProps {
    tuning: NoteName[];
    frets: Fret[];
    strings: number;
    fretsOnChord: number;
    baseFret?: number;
    capo?: boolean;
    lite?: boolean;
}
declare const Neck: ({ tuning, frets, strings, fretsOnChord, baseFret, capo, lite }: NeckProps) => import("react").JSX.Element;
export default Neck;
//# sourceMappingURL=index.d.ts.map
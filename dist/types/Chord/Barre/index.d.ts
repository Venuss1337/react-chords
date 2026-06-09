import type { Finger, Fret } from '../../types.js';
interface BarreProps {
    frets: Fret[];
    barre: number;
    capo?: boolean;
    lite?: boolean;
    finger?: Finger;
}
declare const Barre: ({ barre, frets, capo, finger, lite }: BarreProps) => import("react").JSX.Element | null;
export default Barre;
//# sourceMappingURL=index.d.ts.map
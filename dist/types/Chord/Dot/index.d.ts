import type { Finger, Fret } from '../../types.js';
interface DotProps {
    string: number;
    fret?: Fret;
    finger?: Finger;
    strings: number;
    lite?: boolean;
}
declare const Dot: ({ string, fret, finger, strings, lite }: DotProps) => import("react").JSX.Element;
export default Dot;
//# sourceMappingURL=index.d.ts.map
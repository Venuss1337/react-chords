import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Chord from '../index.js';
const playChord = (position) => {
    const midiNotes = position.midi || [];
    if (midiNotes.length === 0 || typeof window === 'undefined') {
        return;
    }
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextConstructor) {
        return;
    }
    const audioContext = new AudioContextConstructor();
    const midiToFreq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);
    midiNotes.forEach(midiNote => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(midiToFreq(midiNote), audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
    });
};
const ChordBlock = ({ instrument, position, name }) => {
    if (!position) {
        return null;
    }
    const handlePlayClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        playChord(position);
    };
    return (_jsxs("div", { className: 'chord-container flex flex-col items-center text-center', style: { display: 'ruby' }, children: [_jsxs("div", { className: 'flex justify-center items-center mb-2', children: [_jsx("h4", { className: 'text-base font-normal mr-2 h-8 flex items-center', children: name }), position.midi && position.midi.length > 0 && (_jsx("button", { onClick: handlePlayClick, "aria-label": 'Tocar acorde', className: 'cursor-pointer border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200', children: _jsx("svg", { width: '12', height: '12', viewBox: '0 0 10 10', children: _jsx("path", { d: 'M 2 1 L 2 9 L 8 5 Z', fill: 'currentColor' }) }) }))] }), _jsx(Chord, { instrument: instrument, chord: position })] }));
};
export default ChordBlock;
//# sourceMappingURL=index.js.map
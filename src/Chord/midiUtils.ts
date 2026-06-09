import type { StringChord } from '../types.js'

const tunings: Record<string, number[]> = {
  guitar: [40, 45, 50, 55, 59, 64],
  ukulele: [55, 60, 64, 69]
}

export const addMidiToPosition = <TPosition extends StringChord>(
  position: TPosition,
  instrumentName: string
): TPosition & { midi?: number[] } => {
  if (position.midi) {
    return position
  }

  const tuning = tunings[instrumentName]

  if (!tuning) {
    return position
  }

  const midiNotes = position.frets
    .map((fret, stringIndex) => {
      if (fret === -1) {
        return null
      }

      const openStringMidi = tuning[stringIndex]

      return openStringMidi === undefined ? null : openStringMidi + fret
    })
    .filter((note): note is number => note !== null)

  return {
    ...position,
    midi: midiNotes
  }
}

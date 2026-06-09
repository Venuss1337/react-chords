export type NoteName =
  | 'A'
  | 'Ab'
  | 'A#'
  | 'B'
  | 'Bb'
  | 'C'
  | 'C#'
  | 'D'
  | 'Db'
  | 'D#'
  | 'E'
  | 'Eb'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'Gb'
  | string

export type Finger = 0 | 1 | 2 | 3 | 4 | 5

export type Fret = -1 | 0 | number

export interface StringInstrument {
  name: string
  strings: number
  fretsOnChord: number
  keys?: NoteName[]
  tunings: {
    standard: NoteName[]
    [name: string]: NoteName[]
  }
}

export interface PianoInstrument {
  name: 'Piano'
  strings?: number
  fretsOnChord?: number
  keys?: NoteName[]
  tunings?: {
    standard?: NoteName[]
    [name: string]: NoteName[] | undefined
  }
}

export type Instrument = StringInstrument | PianoInstrument

export interface StringChord {
  frets: Fret[]
  fingers?: Finger[]
  barres?: number[]
  capo?: boolean
  baseFret?: number
  midi?: number[]
  [key: string]: unknown
}

export interface PianoChord {
  frets: NoteName[]
  octave?: number
  midi?: number[]
  [key: string]: unknown
}

export type ChordShape = StringChord | PianoChord

export interface ChordProps {
  chord?: ChordShape | null
  instrument: Instrument
  lite?: boolean
}

export interface ChordBlockProps {
  instrument: Instrument
  position: ChordShape
  name: string
  isPiano?: boolean
}

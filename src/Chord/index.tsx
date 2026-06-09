import Neck from './Neck/index.js'
import Dot from './Dot/index.js'
import Barre from './Barre/index.js'
import Piano from './Piano/index.js'
import type { ChordProps, Fret, PianoChord, StringChord, StringInstrument } from '../types.js'

const onlyDots = (chord: StringChord) =>
  chord.frets
    .map((f, index) => ({ position: index, value: f }))
    .filter(f => !chord.barres || chord.barres.indexOf(f.value) === -1)

const isPianoChord = (chord: ChordProps['chord'], instrument: ChordProps['instrument']): chord is PianoChord =>
  instrument.name === 'Piano' && !!chord && chord.frets.every(fret => typeof fret === 'string')

const isStringChord = (chord: ChordProps['chord']): chord is StringChord =>
  !!chord && chord.frets.every(fret => typeof fret === 'number')

const isStringInstrument = (instrument: ChordProps['instrument']): instrument is StringInstrument =>
  instrument.name !== 'Piano'

const Chord = ({ chord, instrument, lite = false }: ChordProps) => {
  if (!chord?.frets) {
    return null
  }

  if (isPianoChord(chord, instrument)) {
    return (
      <svg
        width='100%'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMinYMin meet'
        viewBox='0 0 80 70'
      >
        <g transform='translate(5, 13)'>
          <Piano chord={chord} lite={lite} />
        </g>
      </svg>
    )
  }

  if (!isStringChord(chord) || !isStringInstrument(instrument)) {
    return null
  }

  return (
    <svg
      width='100%'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'
      viewBox='0 0 80 70'
    >
      <g transform='translate(13, 13)'>
        <Neck
          tuning={instrument.tunings.standard}
          strings={instrument.strings}
          frets={chord.frets}
          capo={chord.capo}
          fretsOnChord={instrument.fretsOnChord}
          baseFret={chord.baseFret}
          lite={lite}
        />

        {chord.barres?.map((barre, index) => (
          <Barre
            key={index}
            capo={index === 0 && chord.capo}
            barre={barre}
            finger={chord.fingers?.[chord.frets.indexOf(barre as Fret)]}
            frets={chord.frets}
            lite={lite}
          />
        ))}

        {onlyDots(chord).map(fret => (
          <Dot
            key={fret.position}
            string={instrument.strings - fret.position}
            fret={fret.value}
            strings={instrument.strings}
            finger={chord.fingers?.[fret.position]}
            lite={lite}
          />
        ))}
      </g>
    </svg>
  )
}

export default Chord

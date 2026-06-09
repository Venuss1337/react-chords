import { Fragment } from 'react'
import type { NoteName, PianoChord } from '../../types.js'

const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const
const blackKeys: Partial<Record<(typeof whiteKeys)[number], NoteName>> = {
  C: 'C#',
  D: 'D#',
  F: 'F#',
  G: 'G#',
  A: 'A#'
}

const normalizeNote = (note: NoteName) =>
  note
    .replace('Db', 'C#')
    .replace('Eb', 'D#')
    .replace('Gb', 'F#')
    .replace('Ab', 'G#')
    .replace('Bb', 'A#')

interface PianoProps {
  chord: PianoChord
  lite?: boolean
}

const Piano = ({ chord, lite = false }: PianoProps) => {
  const chordNotes = chord.frets.map(normalizeNote)

  return (
    <g>
      {whiteKeys.map((note, i) => {
        const isPressed = chordNotes.includes(note)

        return (
          <Fragment key={`white-${note}`}>
            <rect
              x={i * 10}
              y={0}
              width={10}
              height={48}
              fill={isPressed ? '#e5e7eb' : '#ffffff'}
              stroke='#444'
              strokeWidth='0.25'
            />
            {isPressed && (
              <text
                x={(i * 10) + 5}
                y={42}
                textAnchor='middle'
                fontSize='3px'
                fontFamily='Arial'
                fill='#000'
              >
                {`${note}4`}
              </text>
            )}
          </Fragment>
        )
      })}
      {whiteKeys.map((note, i) => {
        const blackNote = blackKeys[note]

        if (!blackNote) {
          return null
        }

        const isPressed = chordNotes.includes(blackNote)

        return (
          <Fragment key={`black-${blackNote}`}>
            <rect
              x={(i * 10) + 7}
              y={0}
              width={6}
              height={30}
              fill={isPressed ? '#e5e7eb' : '#000000'}
              stroke='#444'
              strokeWidth='0.25'
            />
            {isPressed && (
              <text
                x={(i * 10) + 10}
                y={25}
                textAnchor='middle'
                fontSize='2.5px'
                fontFamily='Arial'
                fill='#000'
              >
                {`${blackNote}4`}
              </text>
            )}
          </Fragment>
        )
      })}
      {!lite && chord.octave && (
        <text fontSize='0.3rem' fill='#444' fontFamily='Verdana' x={-12} y={24}>
          Octave: {chord.octave}
        </text>
      )}
    </g>
  )
}

export default Piano

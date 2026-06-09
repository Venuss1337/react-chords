import type { Fret, NoteName } from '../../types.js'

const offsets: Record<number, { x: number, y: number, length: number }> = {
  4: {
    x: 10,
    y: 10,
    length: 40
  },
  6: {
    x: 0,
    y: 0,
    length: 50
  }
}

const getOffset = (strings: number) => offsets[strings] ?? offsets[6]

const getNeckHorizonalLine = (pos: number, strings: number) =>
  `M ${getOffset(strings).x} ${12 * pos} H ${getOffset(strings).length}`

const getNeckVerticalLine = (pos: number, strings: number) =>
  `M ${getOffset(strings).y + pos * 10} 0 V 48`

const getNeckPath = (strings: number, fretsOnChord: number) =>
  Array.from({ length: fretsOnChord + 1 }, (_, pos) => getNeckHorizonalLine(pos, strings)).join(' ').concat(
    Array.from({ length: strings }, (_, pos) => getNeckVerticalLine(pos, strings)).join(' '))

const getBarreOffset = (strings: number, frets: Fret[], baseFret: number, capo?: boolean) =>
  strings === 6
    ? frets[0] === 1 || capo ? (baseFret > 9 ? -12 : -11) : (baseFret > 9 ? -10 : -7)
    : frets[0] === 1 || capo ? (baseFret > 9 ? -1 : 0) : (baseFret > 9 ? 3 : 4)

interface NeckProps {
  tuning: NoteName[]
  frets: Fret[]
  strings: number
  fretsOnChord: number
  baseFret?: number
  capo?: boolean
  lite?: boolean
}

const Neck = ({ tuning, frets, strings, fretsOnChord, baseFret = 1, capo, lite = false }: NeckProps) => {
  const offset = getOffset(strings)

  return (
    <g>
      <path
        stroke='inherit'
        strokeWidth='0.25'
        strokeLinecap='square'
        strokeLinejoin='miter'
        d={getNeckPath(strings, fretsOnChord)}
      />
      {baseFret === 1
        ? (
          <path
            stroke='inherit'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            d={`M ${offset.x} 0 H ${offset.length}`}
          />
          )
        : (
          <text
            fontSize='0.25rem'
            fill='currentColor'
            fontFamily='Verdana'
            x={getBarreOffset(strings, frets, baseFret, capo)}
            y='8'
          >
            {baseFret}fr
          </text>
          )}
      {!lite && (
        <g>
          {tuning.slice().map((note, index) => (
            <text
              key={index}
              fontSize='0.3rem'
              fill='currentColor'
              fontFamily='Verdana'
              textAnchor='middle'
              x={offset.x + index * 10}
              y='53'
            >
              {note}
            </text>
          ))}
        </g>
      )}
    </g>
  )
}

export default Neck

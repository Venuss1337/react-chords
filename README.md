# react-chords

React library for rendering SVG chord diagrams for guitar, ukulele, and piano.

## Installation

```sh
npm install @tombatossals/react-chords
```

```sh
yarn add @tombatossals/react-chords
```

```sh
bun add @tombatossals/react-chords
```

From this GitHub fork:

```sh
bun add github:Venuss1337/react-chords
```

## TypeScript Usage

```tsx
import Chord, { type ChordShape, type StringInstrument } from '@tombatossals/react-chords'

const chord: ChordShape = {
  frets: [1, 3, 3, 2, 1, 1],
  fingers: [1, 3, 4, 2, 1, 1],
  barres: [1],
  capo: false
}

const guitar: StringInstrument = {
  strings: 6,
  fretsOnChord: 4,
  name: 'Guitar',
  keys: [],
  tunings: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E']
  }
}

export function GuitarChord() {
  return <Chord chord={chord} instrument={guitar} />
}
```

The `lite` prop hides finger labels and tuning labels:

```tsx
<Chord chord={chord} instrument={guitar} lite />
```

## Next.js App Router

`@tombatossals/react-chords` renders SVG and does not require browser-only APIs for the main `Chord` component, so it can be used from a Server Component:

```tsx
// app/page.tsx
import Chord, { type StringInstrument } from '@tombatossals/react-chords'

const ukulele: StringInstrument = {
  strings: 4,
  fretsOnChord: 4,
  name: 'Ukulele',
  keys: [],
  tunings: {
    standard: ['G', 'C', 'E', 'A']
  }
}

export default function Page() {
  return (
    <Chord
      instrument={ukulele}
      chord={{
        frets: [0, 0, 0, 3],
        fingers: [0, 0, 0, 3]
      }}
    />
  )
}
```

If you use `ChordBlock`, its play button uses Web Audio after a click. In the App Router, put it in a Client Component:

```tsx
'use client'

import { ChordBlock, addMidiToPosition, type StringChord, type StringInstrument } from '@tombatossals/react-chords'

const ukulele: StringInstrument = {
  strings: 4,
  fretsOnChord: 4,
  name: 'Ukulele',
  keys: [],
  tunings: {
    standard: ['G', 'C', 'E', 'A']
  }
}

const cMajor: StringChord = {
  frets: [0, 0, 0, 3],
  fingers: [0, 0, 0, 3]
}

export function PlayableUkuleleChord() {
  return (
    <ChordBlock
      instrument={ukulele}
      position={addMidiToPosition(cMajor, 'ukulele')}
      name='C'
    />
  )
}
```

## Piano

```tsx
import Chord, { type PianoChord, type PianoInstrument } from '@tombatossals/react-chords'

const piano: PianoInstrument = {
  name: 'Piano'
}

const chord: PianoChord = {
  frets: ['C', 'E', 'G']
}

export function PianoChordDiagram() {
  return <Chord chord={chord} instrument={piano} />
}
```

## Public API

```ts
import Chord, {
  ChordBlock,
  addMidiToPosition,
  type ChordProps,
  type ChordShape,
  type StringChord,
  type PianoChord,
  type Instrument,
  type StringInstrument,
  type PianoInstrument
} from '@tombatossals/react-chords'
```

The package publishes ESM, CommonJS, and `.d.ts` files from `dist`, with a root export for modern TypeScript, Bun, Next.js, Node, and bundler resolution.

## Example

Using the [chords-db](http://github.com/tombatossals/chords-db) database we can get this result:

[![react-chords](https://raw.githubusercontent.com/tombatossals/react-chords/webpage/src/images/react-chords.png)](https://tombatossals.github.io/react-chords/)

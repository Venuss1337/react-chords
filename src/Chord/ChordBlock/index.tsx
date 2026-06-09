import type { MouseEvent } from 'react'
import Chord from '../index.js'
import type { ChordBlockProps, ChordShape } from '../../types.js'

type BrowserWindowWithWebkitAudio = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext
}

const playChord = (position: ChordShape) => {
  const midiNotes = position.midi || []

  if (midiNotes.length === 0 || typeof window === 'undefined') {
    return
  }

  const AudioContextConstructor = window.AudioContext || (window as BrowserWindowWithWebkitAudio).webkitAudioContext

  if (!AudioContextConstructor) {
    return
  }

  const audioContext = new AudioContextConstructor()
  const midiToFreq = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12)

  midiNotes.forEach(midiNote => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(midiToFreq(midiNote), audioContext.currentTime)
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1)

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(audioContext.currentTime + 1)
  })
}

const ChordBlock = ({ instrument, position, name }: ChordBlockProps) => {
  if (!position) {
    return null
  }

  const handlePlayClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    playChord(position)
  }

  return (
    <div className='chord-container flex flex-col items-center text-center' style={{ display: 'ruby' }}>
      <div className='flex justify-center items-center mb-2'>
        <h4 className='text-base font-normal mr-2 h-8 flex items-center'>{name}</h4>
        {position.midi && position.midi.length > 0 && (
          <button
            onClick={handlePlayClick}
            aria-label='Tocar acorde'
            className='cursor-pointer border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200'
          >
            <svg width='12' height='12' viewBox='0 0 10 10'>
              <path d='M 2 1 L 2 9 L 8 5 Z' fill='currentColor' />
            </svg>
          </button>
        )}
      </div>
      <Chord instrument={instrument} chord={position} />
    </div>
  )
}

export default ChordBlock

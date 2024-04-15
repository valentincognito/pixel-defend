import { Color } from 'three'
import { create } from 'zustand'

const useAppStore = create((set) => ({
  // global state
  globalState: 'loading', // loading, home
  setGlobalState: (_state) => set(() => ({ globalState: _state })),

  editor: {
    floor: {
      baseColor: new Color('#fff'),
      wallColor: new Color('#666'),
    }
  },

  grid: {
    size: [128, 72],
    cellSize: 1,
  }
}))

export default useAppStore
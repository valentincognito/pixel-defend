import useAppStore from '../stores/useAppStore'
import Camera from './Camera'
import Floor from './Floor'

function Scene() {
  const globalState = useAppStore(state => state.globalState)

  return (
    <>
      <Camera />
      <Floor />
    </>
  )
}

export default Scene

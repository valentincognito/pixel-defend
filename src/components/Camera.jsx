import { CameraControls, OrthographicCamera } from '@react-three/drei'

function Camera() {
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={30} />
      {/* <CameraControls /> */}
    </>
  )
}

export default Camera

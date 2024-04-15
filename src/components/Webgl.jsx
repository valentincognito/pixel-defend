import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { ACESFilmicToneMapping } from 'three'
import { Perf } from 'r3f-perf'

import Scene from './Scene'

function Webgl() {

  return (
    <Canvas dpr={[1, 2]} gl={{ alpha: true, toneMappingExposure: 1.0, toneMapping: ACESFilmicToneMapping }}>
      <Suspense fallback={null}>
        <Scene />
        <Perf />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default Webgl

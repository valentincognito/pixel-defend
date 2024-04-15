import { useLayoutEffect, useRef } from 'react'
import { Matrix4 } from 'three'

import useAppStore from '../stores/useAppStore'

function Floor() {
  const grid = useAppStore(state => state.grid)
  const editor = useAppStore(state => state.editor)

  const meshRef = useRef()

  useLayoutEffect(() => {
    let index = 0
    for (let x = 0; x < grid.size[0]; x++) {
      for (let y = 0; y < grid.size[1]; y++) {
        meshRef.current.setMatrixAt(
          index++,
          new Matrix4().makeTranslation(
            x + grid.cellSize / 2,
            y + grid.cellSize / 2,
            0
          )
        )
        meshRef.current.setColorAt(index, editor.floor.baseColor)
        meshRef.current.instanceColor.needsUpdate = true
      }
    }
  }, [grid, meshRef])

  const handleClick = (e) => {
    const instanceId = e.instanceId

    meshRef.current.setColorAt(instanceId, editor.floor.wallColor)
    meshRef.current.instanceColor.needsUpdate = true
  }

  return (
    <>
      <group position={[-grid.size[0] / 2, -grid.size[1] / 2, 0]}>
        <instancedMesh ref={meshRef} args={[null, null, grid.size[0] * grid.size[1]]} frustumCulled={false} onClick={(e) => handleClick(e)}>
          <planeGeometry args={[grid.cellSize - 0.05, grid.cellSize - 0.05]} />
          <meshBasicMaterial color="#fff" />
        </instancedMesh>
      </group>
    </>
  )
}

export default Floor

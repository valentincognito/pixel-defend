import { useEffect } from 'react'

import Webgl from '../components/Webgl'
import useAppStore from '../stores/useAppStore'

export default function Home({ page }) {
  const setGlobalState = useAppStore(state => state.setGlobalState)

  useEffect(() => {
    setGlobalState(page)
  }, [page])

  return (
    <>
      <Webgl />
    </>
  )
}
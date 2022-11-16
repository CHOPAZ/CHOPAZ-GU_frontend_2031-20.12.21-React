import { useTheme } from '@emotion/react'
import './HomePage.css'

function HomePage () {

  const {palette} = useTheme()

  return (
    <div className="HomePage" style={{background:palette.background.secondary}}>
      <h1>Hello, Pavel</h1>
    </div>
  )
}

export default HomePage
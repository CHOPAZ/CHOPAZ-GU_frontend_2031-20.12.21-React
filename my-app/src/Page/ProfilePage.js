import { useTheme } from "@emotion/react"
import { toggleAction } from '../store/profile/action.js'
import { useDispatch } from 'react-redux'

function ProfilePage () {

  const {palette} = useTheme()
  const dispatch = useDispatch()

  return (
    <div className="HomePage" style={{background:palette.background.secondary}}>
      <input
        type = 'checkbox'
        onChange = {() =>{
          dispatch(toggleAction())
        }}/>
        <span style={{paddingLeft:'10px'}}>Сlick on me to change state state :)</span>
    </div>
  )
}
export default ProfilePage
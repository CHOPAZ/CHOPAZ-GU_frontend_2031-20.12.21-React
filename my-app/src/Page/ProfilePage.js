import { useTheme } from "@emotion/react"
import { toggleAction } from '../store/profile/action.js'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

function ProfilePage () {

  const {palette} = useTheme()
  const dispatch = useDispatch()

  const { showName, name } = useSelector((state) => state)

  const setShowName = useCallback(() => {
    dispatch(toggleAction);
    }, [dispatch]);

  return (
    <div className="HomePage" style={{background:palette.background.secondary, display:'flex', flexDirection:'column'}}>
      <input
        type = 'checkbox'
        value={showName}
        onChange = {setShowName}/>
        <span style={{paddingLeft:'10px'}}>Сlick on me to change state :)</span>
        {showName && <div>{name}</div>}
    </div>
  )
}
export default ProfilePage
import { useTheme } from "@emotion/react"

function ProfilePage () {

  const {palette} = useTheme()
  return (
    <div className="HomePage" style={{background:palette.background.secondary}}>
      <h1>Sorry, no profile information :(</h1>
    </div>
  )
}
export default ProfilePage
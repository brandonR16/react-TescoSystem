import { getAuth, signOut } from 'firebase/auth'
import { firebaseApp } from "../../credentials"
import { Link } from "react-router-dom"

export function Profile() {
  const auth = getAuth(firebaseApp)

  return (
    <section className="container-profile">
      <Link
        to='/sigma/profile/formUpdateData'
        className="profile-btn">
        Editar mis datos
      </Link>
    </section>
  )
}
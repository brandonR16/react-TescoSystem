import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from "../../credentials"
import { doc, getDoc } from "firebase/firestore"
import { useState, useEffect } from "react"

export const FichaDatos = ({ userMail }) => {
  const firestore = getFirestore(firebaseApp)
  const [cargoLaInfo, asignarCambioLaInfo] = useState(false)
  const [datosUsuario, asignarDatosUsuario] = useState({})

  async function conseguirInformacion() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      const [datosFirebase] = infoDoc.data
      asignarCambioLaInfo(true)
      asignarDatosUsuario(datosFirebase)
    }
  }

  useEffect(() => {
    conseguirInformacion()
  }, [])

  return (
    cargoLaInfo
      ? <section className="container-fichaDatos">
        <main className="fichaDatos">
          <h2>Mis datos</h2>

          <h3>Nombre</h3>
          <p>{datosUsuario.nombre}</p>

          <h3>Correo</h3>
          <p>{datosUsuario.mail}</p>

          <h3>Matricula</h3>
          <p>{datosUsuario.matricula}</p>
        </main>
      </section>
      : null
  )
}
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from "../../credentials"
import { doc, getDoc } from "firebase/firestore"

export function Ticket({ userMail }) {
  const firestore = getFirestore(firebaseApp)
  const location = useLocation()
  const datos = location.state
  const [datosUsuario, asignarDatosUsuario] = useState({})
  const [cargoLaInfo, asignarCambioLaInfo] = useState(false)

  async function getUserName() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      const [datosFirebase] = infoDoc.data
      asignarDatosUsuario(datosFirebase)
      asignarCambioLaInfo(true)
    }
  }

  useEffect(() => {
    getUserName()
  }, [])

  return (
    cargoLaInfo
      ?
      <section className="container-ticket">
        <main className="ticket">
          <h3 className="ticket-titulo">Comprobante de prestamo</h3>

          <h4 className="ticket-headings">Matricula del estudiante</h4>
          <p>{datos.matricula}</p>

          <h4 className="ticket-headings">Nombre del estudiante</h4>
          <p>{datosUsuario.nombre}</p>

          <h4 className="ticket-headings">Correo del estudiante</h4>
          <p>{datosUsuario.mail}</p>

          <h4 className="ticket-headings">Articulo solicitado</h4>
          <p>{datos.titulo}</p>

          <h4 className="ticket-headings">Fecha de prestamo</h4>
          <p>{datos.fecha}</p>

          <h4 className="ticket-headings">Horario de entrega</h4>
          <p>{datos.dia}</p>

        </main>
      </section>
      : null
  )
}
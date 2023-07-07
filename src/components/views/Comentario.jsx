import { useEffect } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { firebaseApp } from "../../credentials"

export function Comentario({ userMail }) {
  const firestore = getFirestore(firebaseApp)

  async function getInfo() {
    const docRef = doc(firestore, `users/${userMail}`)
    const query = await getDoc(docRef)
    if (query.exists()) {
      const infoDoc = query.data()
      // get data from firebase
      const a = infoDoc.data
      console.log(a[0])
      // const finalName = fixName(fullName)
      // setName(finalName)
      // setDataLoaded(true)
      const b = a.push(...a, { mensaje: 'Hola' })
      console.log(b)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <section className="container-comentario">
      <h1 className="comentario-h1">Dejanos un comentario</h1>
      <textarea
        className="comentario-input"
        id="feedback"
        placeholder="Ingresa tus recomendaciones"
        name=""
        cols="30"
        rows="10"
      />

      <button
        className="comentario-btn"
        onClick={getInfo}
      >Enviar Sugerencia</button>
    </section>
  )
}
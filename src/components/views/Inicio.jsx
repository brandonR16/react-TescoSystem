import { articulos } from "../../data/articulos"
import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from 'firebase/auth'
import { firebaseApp } from "../../credentials"

export function Inicio() {
  const auth = getAuth(firebaseApp)
  const navigate = useNavigate()

  return (
    <section className="section-home">

      <header className="header-tesco">
        <img src="tesco.jpg" alt="" className="img-tesco" />
        <div className="header-tesco-texto" >
          <h1 className="header-tesco-h1">Tesco System</h1>
          <p className="header-tesco-p">Sistema de prestamos para articulos deportivos para la interaccion fisica entre alumnos del instituto TESCO y asi promover el deporte de una manera ms sencilla y comoda. </p>
        </div>
      </header>

      <main className="contenedor-art">{
        articulos.map(function (art, i) {
          return (
            <main key={i} className="main-deportivos">
              <img className="img-articulo" src={art.imagen} alt="" />
              <div className="articulo-descripcion">
                <h1 className="articulo-titulo">{art.titulo}</h1>
                <p className="articulo-descripcion">{art.descripcion}
                  <p className="articulo-disponibles">A disposición: {art.disponibles}</p>
                </p>
                <button
                  onClick={() => navigate('/react-TescoSystem/formulario', { state: art })}
                  className="articulo-btn">Agendar prestamo</button>
              </div>
            </main>
          )
        })
      }</main>

      <button
        className="btn-signOut"
        onClick={() => {
          signOut(auth)
        }}
      >Cerrar Sesión</button>
    </section>
  )
}

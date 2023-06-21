import { useEffect } from "react"
import { ReviewFormProduct } from '../../functions/review/cl-producto'
import { useNavigate, useLocation } from "react-router-dom"

export function Producto() {
  let finalData
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state
  const cl = new ReviewFormProduct()

  function getData() {
    finalData = {
      ...data,
      fecha: inputFecha.value,
      dia: inputHora.value,
      matricula: inputMatricula.value,
    }
  }

  return (
    <section className="contenedor-formulario">
      <form className="formulario">
        <img
          className="formulario-imagen"
          src={data.imagen}
          height={64} />
        <div className="formulario-inputs">
          <h1>{data.titulo}</h1>

          <label className="formulario-label" htmlFor="inputFecha">Fecha del prestamo</label>
          <input
            id="inputFecha"
            className="formulario-input input-fecha"
            placeholder="Ej. Viernes 10 de junio"
            autoComplete="new-password"
            type="text"
          //  onKeyUp={() => cl._inputDateKeyUp()}
          />

          <label className="formulario-label" htmlFor="inputHora">Hora del prestamo</label>
          <input
            id="inputHora"
            placeholder="Ej. 23:00"
            autoComplete="new-password"
            className="formulario-input input-dia"
          //  onKeyUp={() => cl._inputHoraKeyUp()}
          />

          <label className="formulario-label" htmlFor="inputMatricula">Matricula</label>
          <input
            id="inputMatricula"
            className="formulario-input input-dia"
            placeholder="Matricula escolar"
            autoComplete="new-password"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
          //  onKeyUp={() => cl._inputDiaKeyUp()}
          />

          <button
            className="formulario-btn"
            onClick={() => {
              getData()
              navigate('/react-TescoSystem/formulario/ticket', { state: finalData })
            }}
          >
            Pedir Articulo
          </button>
        </div>

      </form>
    </section>
  )
}
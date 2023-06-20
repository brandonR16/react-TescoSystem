import { useLocation } from "react-router-dom";
import ReviewFormProduct from '../../functions/review/FormProducto';


export function FormProducto() {
  const location = useLocation();
  const data = location.state;
  const classReview = new ReviewFormProduct();

  return (
    <section className="contenedor-formulario">
      <form className="formulario">
        <img className="formulario-imagen" src={data.imagen} alt="" height={64} />
        <div className="formulario-inputs">
          <h1>{data.titulo}</h1>

          <label className="formulario-label" htmlFor="inputDia">Fecha del prestamo</label>
          <input
            type="text"
            placeholder="Día para el prestamo"
            className="formulario-input input-fecha"
            onKeyUp={() => classReview._inputDateKeyUp()}
          />

          <label className="formulario-label" htmlFor="inputDia">Fecha del prestamo</label>
          <input
            placeholder="Ej. 23:00"
            className="formulario-input input-dia"
            onKeyUp={() => classReview._inputDiaKeyUp()}
          />

          <label className="formulario-label" htmlFor="inputDia">Matricula</label>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"

            placeholder="Matricula escolar"
            className="formulario-input input-dia"
            onKeyUp={() => classReview._inputDiaKeyUp()}
          />

          <button></button>
        </div>

      </form>
    </section>
  );
}
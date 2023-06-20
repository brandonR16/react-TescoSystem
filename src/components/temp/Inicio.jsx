import { articulos } from "../../data/articulos";
import { useNavigate } from "react-router-dom";

export function Inicio() {
  const navigate = useNavigate();

  return (
    <section className="section-home">

      <header className="header-tesco">
        <img src="/tesco.jpg" alt="" className="img-tesco" />
        <div >
          <h1 className="header-tesco-h1">Tesco System</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, inventore amet est quod quos sequi quam placeat optio error, blanditiis perspiciatis, voluptate mollitia voluptatibus deserunt. Ea accusantium aliquam placeat iure.</p>
        </div>
      </header>

      <main className="contenedor-art">{
        articulos.map(function (art, i) {
          return (
            <main key={i} className="main-deportivos">
              <img className="img-articulo" src={art.imagen} alt="" />
              <div className="articulo-descripcion">
                <h1 className="articulo-titulo">{art.titulo}</h1>
                <p className="articulo-descripcion">{art.descripcion}</p>
                <button
                  onClick={() => navigate('/react-TescoSystem/formulario', { state: art })}
                  className="articulo-btn">Agendar prestamo</button>
              </div>
            </main>
          );
        })
      }</main>
    </section>
  );
}

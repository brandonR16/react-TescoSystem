import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../views/Inicio'
import { Producto } from '../formularios/Producto'
import { Ticket } from '../views/Ticket'

export function Home({ userMail }) {
  /*useEffect(() => {
    let viewPort = window.matchMedia("(max-width: 450px)");
    const desk = document.querySelector('.navBar-desktop');
    const phone = document.querySelector('.navBar-mobile');

    function mediaScreen(y) {
      if (y.matches) {
        desk.classList.add('hidden');
        phone.classList.remove('hidden');
      } else {
        desk.classList.remove('hidden');
        phone.classList.add('hidden');
      }
    };
    mediaScreen(viewPort);
    viewPort.addListener(mediaScreen);
  }, []);*/

  return (
    <main className="page-home">
      <Routes>

        <Route
          path="/react-TescoSystem//*"
          element={<Inicio />}></Route>

        <Route
          path="/react-TescoSystem/formulario"
          element={<Producto />}></Route>

        <Route
          path="/react-TescoSystem/formulario/ticket"
          element={<Ticket userMail={userMail} />}></Route>
      </Routes>
    </main>
  )
}

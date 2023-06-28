import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../views/Inicio'
import { Producto } from '../formularios/Producto'
import { Ticket } from '../views/Ticket'
import { FichaDatos } from "../views/FichaDatos"

export function Home({ userMail }) {
  return <main className="page-home">
    <Routes>

      <Route
        path="/react-TescoSystem//*"
        element={<Inicio />}></Route>

      <Route
        path="/react-TescoSystem/usuario"
        element={<FichaDatos userMail={userMail} />}></Route>

      <Route
        path="/react-TescoSystem/formulario"
        element={<Producto />}></Route>

      <Route
        path="/react-TescoSystem/formulario/ticket"
        element={<Ticket userMail={userMail} />}></Route>
    </Routes>
  </main>
}

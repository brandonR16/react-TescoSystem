
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// se importa el componente del archivo App.jsx
import App from "./App";

// se guarda el div con el id: app de nuestro HTML en una variable llamada 'root'
const root = createRoot(document.getElementById('app'));

// se renderiza el componente importado
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

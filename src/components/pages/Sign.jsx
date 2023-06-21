import { Login } from "../formularios/Login"
import { RegistrarUsuario } from "../formularios/RegistrarUsuario"
import { useState } from "react"

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    !isRegistering
      ? <Login setIsRegistering={setIsRegistering} />
      : <RegistrarUsuario setIsRegistering={setIsRegistering} />
  )
};

import reviewRegister from "../../functions/review-userRegistration"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../credentials'
import { IconText, IconAt, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp'
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"
import Review from "../../functions/Review"

export function RegistrarUsuario({ setIsRegistering }) {
  const classReview = new Review()
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)

  /*function upperCaseName(str) {
    // pablo  mario   gonzaleZ CAMARENA  
    // Pablo Mario Gonzalez Camarena 
    const stageOne = str.trim().toLowerCase().split(' ').filter(n => n !== '')
    return stageOne.map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
  }*/

  async function addUser(e) {
    e.preventDefault()
    // reviewRegister()
    const nombre = e.target.inputName.value
    // const nameFixed = upperCaseName(nombre)
    const mail = e.target.inputMail.value
    const password = e.target.inputPassword.value
    const dataUser = [
      {
        mail: mail,
        nombre: nombre,
        pass: password,
      },
    ]
    const docRef = doc(firestore, `users/${mail}`)
    const query = await getDoc(docRef)

    if (!query.exists()) {
      await setDoc(docRef, { data: [...dataUser] })
      await createUserWithEmailAndPassword(auth, mail, password)
    } else {
      return
    }
  }

  function resetBorders() {
    const root = document.querySelector(':root')
    root.style.setProperty('--borderFieldName', '#c5c5c5')
    root.style.setProperty('--borderFieldID', '#c5c5c5')
    root.style.setProperty('--borderFieldPassConfirm', '#c5c5c5')
  };

  function goSignIn() {
    resetBorders()
    setIsRegistering(false)
  };

  return (
    <section className="container-signUp">
      <form className="signUpForm" onSubmit={(e) => { addUser(e) }}>
        <h1 className="signUpForm-title">Registrate <span className="gradient"></span></h1>

        <label className="signUpForm-label" htmlFor="inputName">
          Nombre
        </label>
        <input
          id="inputName"
          className="signUpForm-name"
          placeholder="Nombre y apellidos"
        // autoComplete="new-password"
        // onKeyUp={() => classReview._inputNameKeyUp()}
        />
        <p className="signUpForm-name-p"></p>

        <label className="signUpForm-label" htmlFor="inputMail">
          Correo Insitucional
        </label>
        <input
          id="inputMail"
          className="signUpForm-mail"
          placeholder="usuario@dominio.com"
        />
        <p className="signUpForm-mail-p"></p>


        <label className="signUpForm-label" htmlFor="sufn">
          Matricula
        </label>
        <input
          id="sufn"
          className="signUpForm-name"
          placeholder="Numero de tu matricula"
          autoComplete="new-password"
          onKeyUp={() => classReview._inputNameKeyUp()}
        />
        <p className="signUpForm-name-p"> </p>


        <label className="signUpForm-label" htmlFor="inputPassword">Contraseña</label>
        <section className="wrapper-password">
          <input
            id="inputPassword"
            className="signUpForm-pass"
            type="password"
            autoComplete="new-password"
            placeholder="Crea una contraseña"
          />
          <button onClick={() => classReview._showPassRegister()} className="btn-showPass" type="button" title="button show">
            <IconShow />
            <IconHide />
          </button>
        </section>
        <p className="signUpForm-pass-p"></p>

        <label className="signUpForm-label" htmlFor="sufcp">Confirmar contraseña</label>
        <div className="wrapper-password">
          <input
            id="sufcp"
            className="signUpForm-passConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            onKeyUp={() => classReview._inputConfirmPassKeyUp()}
          />
          <button onClick={() => classReview._showConfirmRegister()} className="btn-showPassConfirm" type="button" title="button show">
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUpForm-passConfirm-p"></p>

        <button
          type="submit"
          className="signUpForm-btnRegister"
          name="button to Register">Registrarme</button>

        <button id="sufbsi" className="signUpForm-btnGoSignIn" onClick={goSignIn}> Inicia Sesión</button>
      </form>
    </section>
  )
};

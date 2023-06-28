import reviewRegister from "../../functions/review-userRegistration"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../credentials'
import { IconText, IconAt, IconHide, IconShow, IconHideConfirm, IconShowConfirm } from '../svg/IconsSignUp'
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"
import Review from "../../functions/Review"
import { ClReviewSignUp } from "../../classes/cl-signUp"

export function RegistrarUsuario({ setIsRegistering }) {
  const cl = new ClReviewSignUp()
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
    const nombre = e.target.inputName.value
    // const nameFixed = upperCaseName(nombre)
    const mail = e.target.inputMail.value + '@tesco.edu.mx'
    const password = e.target.inputPassword.value
    const matricula = e.target.sufn.value
    const dataUser = [
      {
        mail: mail,
        nombre: nombre,
        matricula: matricula,
        pass: password,
      },
    ]
    const docRef = doc(firestore, `users/${mail}`)
    const query = await getDoc(docRef)

    if (!query.exists()) {
      await setDoc(docRef, { data: [...dataUser] })
      await createUserWithEmailAndPassword(auth, mail, password)
    } else return
  }

  function goSignIn() {
    setIsRegistering(false)
  };

  return (
    <section className="container-signUp">
      <form className="signUpForm" onSubmit={(e) => { addUser(e) }}>
        <h1 className="signUpForm-title">Registrate</h1>

        {/*///////////////////////////////////////////////////*/}
        <label className="signUpForm-label" htmlFor="inputName">
          Nombre
        </label>
        <input
          id="inputName"
          className="signUp-nombre"
          placeholder="Nombre y apellidos"
          autoComplete="new-password"
          onFocus={() => cl._inputFocusIn('nombre')}
          onBlur={() => cl._inputBlur('nombre')}
          onKeyUp={() => cl._inputNameKeyUp()}
        />
        <p className="signUp-nombre-p"></p>
        {/*///////////////////////////////////////////////////*/}
        <label className="signUpForm-label" htmlFor="inputMail">
          Correo Insitucional
        </label>
        <div className="wrapper-inputMail">
          <input
            id="inputMail"
            className="signUp-correo"
            placeholder="brandon.sic"
            onFocus={() => cl._inputFocusIn('correo')}
            onBlur={() => cl._inputBlur('correo')}
            onKeyUp={() => cl._inputCorreoKeyUp()}
          />
          <p>@tesco.edu.mx</p>
        </div>
        <p className="signUp-correo-p"></p>
        {/*///////////////////////////////////////////////////*/}
        <label className="signUpForm-label" htmlFor="sufn">
          Matricula
        </label>
        <input
          id="sufn"
          className="signUp-matricula"
          placeholder="Numero de tu matricula"
          autoComplete="new-password"
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          onFocus={() => cl._inputFocusIn('matricula')}
          onBlur={() => cl._inputBlur('matricula')}
          onKeyUp={() => classReview._inputNameKeyUp()}
        />
        <p className="signUp-matricula-p"> </p>
        {/*///////////////////////////////////////////////////*/}
        <label className="signUpForm-label" htmlFor="inputPassword">Contraseña</label>
        <section className="wrapper-password">
          <input
            id="inputPassword"
            className="signUp-pass"
            type="password"
            autoComplete="new-password"
            placeholder="Crea una contraseña"
            onFocus={() => cl._inputFocusIn('pass')}
            onBlur={() => cl._inputBlur('pass')}
            onChangeCapture={() => cl._inputPass()}
          />
          <button onClick={() => classReview._showPassRegister()} className="btn-showPass" type="button" title="button show">
            <IconShow />
            <IconHide />
          </button>
        </section>
        <p className="signUp-pass-p"></p>
        {/*///////////////////////////////////////////////////*/}
        <label className="signUpForm-label" htmlFor="sufcp">Confirmar contraseña</label>
        <div className="wrapper-password">
          <input
            id="sufcp"
            className="signUp-passConfirm"
            type="password"
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            onFocus={() => cl._inputFocusIn('passConfirm')}
            onBlur={() => cl._inputBlur('passConfirm')}
            onKeyUp={() => classReview._inputConfirmPassKeyUp()}
          />
          <button onClick={() => classReview._showConfirmRegister()} className="btn-showPassConfirm" type="button" title="button show">
            <IconShowConfirm />
            <IconHideConfirm />
          </button>
        </div>
        <p className="signUp-passConfirm-p"></p>
        {/*///////////////////////////////////////////////////*/}
        <button
          type="submit"
          className="signUpForm-btnRegister"
          name="button to Register">Registrarme</button>

        <button id="sufbsi" className="signUpForm-btnGoSignIn" onClick={goSignIn}> Inicia Sesión</button>
      </form>
    </section>
  )
};

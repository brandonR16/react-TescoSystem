const reviewRegister = () => {
  let root = document.querySelector(':root')
  let reviewed = false
  let resultName = false
  let resultID = false
  let resultPass = false
  // inputs
  const inputName = document.querySelector('.signUp-nombre')
  const inputID = document.querySelector('.signUp-correo')
  const inputPass = document.querySelector('.signUp-pass')
  const inputPassConfirm = document.querySelector('.signUp-passConfirm')
  // error
  const textErrorName = document.querySelector('.signUp-nombre-p')
  const textErrorID = document.querySelector('.signUp-correo-p')
  const textErrorPassConfirm = document.querySelector('.signUp-passConfirm-p')

  /////////////////////////////////////////////////////////
  if (inputName.value === '') {
    root.style.setProperty('--borderFieldName', '#f63737')
    textErrorName.textContent = 'El campo es obligatorio'
  } else if (inputName.value.match(/[0-9]/)) {
    root.style.setProperty('--borderFieldName', '#f63737')
    textErrorName.textContent = 'Solo caracteres tipo texto'
  } else {
    resultName = true
  }
  /////////////////////////////////////////////////////////
  if (inputID.value === '') {
    root.style.setProperty('--borderFieldID', '#f63737')
    textErrorID.textContent = 'El campo es obligatorio'
  } else {
    resultID = true
  }
  /////////////////////////////////////////////////////////
  if (inputPassConfirm.value === inputPass.value) {
    resultPass = true
  } else {
    root.style.setProperty('--borderFieldPassConfirm', '#f63737')
    textErrorPassConfirm.textContent = 'Las contraseñas no coinciden'
  }
  /////////////////////////////////////////////////////////
  if (resultName && resultID && resultPass) {
    return reviewed = true
  }
  return reviewed
}

export default reviewRegister

export class ClReviewSignUp {
  root = document.documentElement.style;
  _expresionRegularLetras = /[a-zA-Z]/;
  _expresionRegularNumeros = /[0-9]/;
  _expresionRegularCaracteres = /[´¨¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  _inputFocusIn(str) {
    this.root.setProperty(`--borderInput-${str}`, '#0b924e')
  }

  _inputBlur(str) {
    this.root.setProperty(`--borderInput-${str}`, '#c5c5c5')
  }

  _inputNameKeyUp() {
    const input = document.querySelector('.signUp-nombre')
    const textError = document.querySelector('.signUp-nombre-p')

    this.root.setProperty(`--borderInput-nombre`, '#0b924e')

    if (input.value.match(this._expresionRegularNumeros) || input.value.match(this._expresionRegularCaracteres)) {
      this.root.setProperty(`--borderInput-nombre`, '#DA1616')
      textError.textContent = 'Unicamente letras'
    } else textError.textContent = ''

    if (input.value === '') {
      this.root.setProperty(`--borderInput-nombre`, '#0b924e')
      textError.textContent = ''
    }
  }

  _inputCorreoKeyUp() {
    const campo = document.querySelector('.signUp-correo')
    const error = document.querySelector('.signUp-correo-p')

    this.root.setProperty('--borderInput-correo', '#0b924e')

    if (campo.value.includes('@')) {
      this.root.setProperty('--borderInput-correo', '#E10C0C')
      error.textContent = 'Ingresa un correo valido'
    } else error.textContent = ''

    if (campo.value === '') {
      this.root.setProperty('--borderInput-correo', '#0b924e')
      error.textContent = ''
    }
  }

  _inputPass() {
    const campo = document.querySelector('.signUp-passConfirm')
    const error = document.querySelector('.signUp-passConfirm-p')

    campo.value = ''
    error.textContent = ''
    this.root.setProperty('--borderInput-passConfirm', '#0b924e')
  }
}
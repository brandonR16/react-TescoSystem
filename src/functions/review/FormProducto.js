class ReviewFormProduct {
  ///////////////// V A R I A B L E S /////////////////
  root = document.documentElement.style;
  _expRegLetters = /[a-zA-Z]/;
  _expRegNumbers = /[0-9]/;
  _expRegCharacters = /[¡°!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/¿?]/;

  ///////////////// M E T H O D S /////////////////
  _inputDateKeyUp() {
    const input = document.querySelector('.input-fecha');

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--border-input-fecha', 'green');

      if (input.value.match(this._expRegCharacters)) {
        this.root.setProperty('--border-input-fecha', 'red');
      }

    }
    this.root.setProperty('--border-input-fecha: #c5c5c5', '');
  }

  _inputDiaKeyUp() {
    const input = document.querySelector('.input-dia');

    for (let a = 0; a < input.value.length; a++) {
      this.root.setProperty('--border-input-dia', 'green');

      if (input.value.match(this._expRegLetters) || input.value.match(/[¡°!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/¿?]/)) {
        this.root.setProperty('--border-input-dia', 'red');
      }
    }
  }
}

export default ReviewFormProduct;
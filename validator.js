// import the Array of Country codes

import { countryCodesArray } from './countryCodes.js'

// get the button

export const btn = document.querySelector('#check')

// create the function using rules (from Wiki) for correctly IBAN

export function isIbanValidate(iban) {
  const symbolsRegExp = /^[A-Z0-9]+$/g
  const numbersRegExp = /^[0-9]+$/g
  const lettersRegExp = /^[A-Z]+$/g

  for (let i = 0; i < countryCodesArray.length; i++) {
    if (
      iban.includes(countryCodesArray[i]) &&
      numbersRegExp.test(iban[2]) &&
      !lettersRegExp.test(iban[3]) &&
      symbolsRegExp.test(iban) &&
      iban.length <= 34 &&
      iban.length >= 16
    ) {
      return true
    }
  }
}

export function isCorrect() {
  btn.textContent = 'Checked!'
  btn.style.background = '#60CD18'
}

export function isNotCorrect() {
  btn.style.height = 'auto'
  btn.style.background = '#ff0000'
}

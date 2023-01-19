// import our validator and bth

import { isIbanValidate, btn, isCorrect, isNotCorrect } from './validator.js'

// get our textarea

const textarea = document.querySelector('#IBAN')
const refreshButton = document.querySelector('#refresh')

// add event listener to button

btn.addEventListener('click', handleCheck)

// create the function (event handler)

function handleCheck() {
  const ibanData = textarea.value
  const ibanError = []
  const newLineRegExp = /^[A-Z0-9\n]+$/g // only for the list-column

  if (ibanData) {
    if (ibanData.includes(',')) {
      const ibanArray = ibanData.split(',')

      ibanArray.forEach((iban) => {
        if (!isIbanValidate(iban)) {
          ibanError.push(iban)
        }
      })
      if (ibanError.length > 0) {
        btn.textContent = ibanError.join('\n')
        isNotCorrect()
      }
      if (ibanError.length === 0 && ibanData) {
        isCorrect()
      }
    } else if (newLineRegExp.test(ibanData) && ibanData.length > 34) {
      // we can't use ibanData.includes('\n') because "includes" can't contain a regular expression
      const ibanArray = ibanData.split('\n')

      ibanArray.forEach((iban) => {
        if (!isIbanValidate(iban)) {
          ibanError.push(iban)
        }
      })
      if (ibanError.length > 0) {
        btn.textContent = ibanError.join('\n')
        isNotCorrect()
      }
      if (ibanError.length === 0 && ibanData) {
        isCorrect()
      }
    } else if (!newLineRegExp.test(ibanData) && ibanData.length > 34) {
      const columnIbanArray = ibanData.split('\n')
      columnIbanArray.forEach((iban) => {
        if (!isIbanValidate(iban)) {
          ibanError.push(iban)
        }
      })
      if (ibanError.length > 0) {
        btn.textContent = ibanError.join('\n')
        isNotCorrect()
      }
    } else {
      if (isIbanValidate(ibanData)) {
        isCorrect()
      } else {
        btn.textContent = ibanData
        isNotCorrect()
      }
    }
  } else {
    btn.textContent = 'Enter IBAN and Try'
    return (btn.style.background = '#e7ffd7')
  }
}

refreshButton.addEventListener('click', handleClick)

function c() {
  ibanArray.forEach((iban) => {
    if (!isIbanValidate(iban)) {
      ibanError.push(iban)
    }
  })
  if (ibanError.length > 0) {
    btn.textContent = ibanError.join('\n')
    isNotCorrect()
  }
  if (ibanError.length === 0 && ibanData) {
    isCorrect()
  }
}

function handleClick() {
  btn.style.background = '#e7ffd7'
  btn.textContent = 'Check'
  return (textarea.value = '')
}

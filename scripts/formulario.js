let formData = {
  emailInput: '',
  textareaInput: ''
}

const handlerOnSubmit = (e) => {
  // console.log(formData)
}

const handlerOnChange = (e) => {
  formData[e.target.id] = e.target.value
}

document.querySelector("#emailInput").addEventListener('input', handlerOnChange)
document.querySelector("#textareaInput").addEventListener('input', handlerOnChange)
document.querySelector("#successButton").addEventListener('click', handlerOnSubmit)

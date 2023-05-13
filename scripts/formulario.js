let formData = {
  emailError: false,
  emailInput: '',
  textareaInput: '',
  subjectInput: ''
}

const handlerOnChange = (e) => {
  let successButton = document.querySelector("#successButton");
  if (e.target.id === 'emailInput') {
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const initialValue = formData.emailError;
    formData.emailError = !emailValidator.test(e.target.value);
    if (initialValue != formData.emailError) {
      e.target.classList.toggle('inputError');
      successButton.classList.toggle('disabled');
    }
  }
  formData[e.target.id] = e.target.value;
  let [base, props] = successButton.getAttribute('href').split('?');
  let [subject, body] = props.split('&');

  const setAttribute = (attribute, data, separator) => [attribute.split(separator)[0], data].join(separator);

  base = setAttribute(base, formData.emailInput, ':');
  subject = setAttribute(subject, formData.subjectInput, '=');
  body = setAttribute(body, formData.textareaInput, '=');
  props = [subject, body].join('&');
  url = [base, props].join('?');
  document.querySelector("#successButton").setAttribute('href', url);
}

document.querySelector("#emailInput").addEventListener('input', handlerOnChange);
document.querySelector("#subjectInput").addEventListener('input', handlerOnChange);
document.querySelector("#textareaInput").addEventListener('input', handlerOnChange);

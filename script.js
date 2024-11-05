const scriptURL = 'https://script.google.com/macros/s/AKfycbyD3Q30d61lkQstg687CIW-WPwuiEx-SJ_uhTxxAwlGCOQgjFnuSKPV647cHTbt2Z8ioQ/exec'

const form = document.forms['dataForm']

form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => { window.location.replace("accounts.html"); } )
.catch(error => console.error('Error!', error.message))

})
let form = document.querySelector('form')
let email = document.getElementById('mail').value
let error = document.querySelector('.error')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    function checkEmail() {
        if (email.match(/[A-Z]/g)) {
            error.innerHTML = "Email address should not contain capital letters.(Not Sent)";
            event.preventDefault()
        }else if(email.match(/[@]/g) == false){
            error.innerHTML ='@ missing'
            event.preventDefault()
        } else {
            error.innerHTML = ''
            return true
        }
    }
    checkEmail()
})
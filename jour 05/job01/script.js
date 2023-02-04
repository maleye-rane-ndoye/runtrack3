const lastname = document.getElementById('lastname')
const firstname = document.getElementById("firstname")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const form = document.getElementById("form")
const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")
const error3 = document.getElementById("error3")
const error4 = document.getElementById("error4")






form.addEventListener('submit', (e) => {
    let messages = []
    if(lastname.value === '' || lastname.value == null){
        messages.push('veillez renseigner votre nom svp')
    }
    if (lastname.value.length <= 2){
        messages.push('la taille de votre nom est trop petite')
    }
    if(messages.length > 0){

        e.preventDefault()
        error1.innerText = messages.join(', ')
    }
})



form.addEventListener('submit', (e) => {
    let messages = []
    if(firstname.value === '' || firstname.value == null){
        messages.push('veillez renseigner votre prénom')
    }
    if(firstname.value.length <= 2){
        messages.push('la taille de votre prénom est trop petite')
    }
    if( messages.length > 0){
        e.preventDefault()
        error2.innerText = messages.join(', ')
    }
})


form.addEventListener('submit', (e) => {
    let messages = []
    if(password.value === '' || password.value == null){
        messages.push('Entrer votre mot de passe')
    }
    if(firstname.value.length <= 6){
        messages.push('mot de passe,8 caracteres au minimum')
    }
    if( messages.length > 0){
        e.preventDefault()
        error3.innerText = messages.join(', ')
    }
})

form.addEventListener('submit', (e) => {
    let messages = []
    if(cpassword.value != password.value ){
        messages.push('mots de passe non identiques')
    }
    
    if( messages.length > 0){
        e.preventDefault()
        error4.innerText = messages.join(', ')
    }
})

function checkLogin(){

    const login = document.getElementById("login")
    const loginemail = document.getElementById("loginemail")
    const error5 = document.getElementById("error5")
login.addEventListener('submit', (e) => {
    let messages = []
     if(loginemail.value === '' || loginemail.value == null){
       messages.push('Entre votre login')
    }
    if(messages.length > 0){

        e.preventDefault()
        error5.innerText = messages.join(', ')
    }
})

    const loginpass = document.getElementById("loginpass")
    const error6 = document.getElementById("error6")
login.addEventListener('submit', (e) => {
    let messages = []

    if(loginpass.value === '' || loginpass.value == null){
        messages.push('Entre votre mot de passe')
     }
    if(messages.length > 0){

        e.preventDefault()
        error6.innerText = messages.join(', ')
    }
})

}


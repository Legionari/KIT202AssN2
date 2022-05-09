const form1 = document.forms['login']
const form2 = document.forms['register']
const logswitch = document.querySelector('.logein')
const regswitch = document.querySelector('.regomate')
const passwordFilter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
const emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

if (form1) {
    form1.addEventListener('submit', validateForm);
}
if (form2) {
    form2.addEventListener('submit', validateForm2)
}

function regoverycool(){
    logswitch.style.display = 'none'
    regswitch.style.display = 'inline'
}

document.getElementById('switchreg').addEventListener('click',regoverycool)


function validateForm(event){
    event.preventDefault()

    if(document.getElementById("luname").value == ""){
        alert("Please input Username")
        document.getElementById("luname").style.borderColor = "red"
    }
    else if(document.getElementById("lpw").value == ""){ 
        alert("Please input Password")
        document.getElementById("lpw").style.borderColor = "red"
        document.getElementById("luname").style.borderColor = "lightgreen"
    }
    else if(!passwordFilter.test(document.getElementById("lpw").value)) {
        alert("Password must be between 6 - 12 characters long and must contain: \nOne number \nOne uppercase letter \nOne lowercase letter")
        document.getElementById("lpw").style.borderColor = "red"
    }
    else {
        document.getElementById("lpw").style.borderColor = "lightgreen"
        form1.submit()  
    }
}

function validateForm2(event) {
    event.preventDefault()

    if(document.getElementById("runame").value == ""){
        alert("Please input Username")
        document.getElementById("runame").style.borderColor = "red"
    }
    else if(!emailFilter.test(document.getElementById("remail").value)) {
        alert("Please input valid Email")
        document.getElementById("remail").style.borderColor = "red"
        document.getElementById("runame").style.borderColor = "lightgreen"
    }
    else if(document.getElementById("rpw").value == ""){ 
        alert("Please input Password")
        document.getElementById("rpw").style.borderColor = "red"
        document.getElementById("remail").style.borderColor = "lightgreen"
    }
    else if(!passwordFilter.test(document.getElementById("rpw").value)) {
        alert("Password must be between 6 - 12 characters long and must contain: \nOne number \nOne uppercase letter \nOne lowercase letter")
        document.getElementById("rpw").style.borderColor = "red"
    }
    else {
        document.getElementById("rpw").style.borderColor = "lightgreen"
        form2.submit()  
    }
}



//https://www.codeproject.com/tips/492632/email-validation-in-javascript email val
//https://w3resource.com/javascript/form/password-validation.php pw val
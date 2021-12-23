const button = document.getElementById("button")
const input = document.getElementById("input")
const validate = document.getElementById("validate")

button.addEventListener("click", ()=>{
    if(input.value == ""){
        validate.innerHTML = "Please Enter an Email Address"
    }else if(!input.checkValidity()){
        validate = input.validationMessage;
    }else{
        validate.innerHTML = ""
    }
})

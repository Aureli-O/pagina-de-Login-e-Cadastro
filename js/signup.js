
function signup(){
    const senha = document.getElementById("password").value
    const senhaConfirmada = document.getElementById("passwordConfirm").value

    if(senha == ""){
        alert("Senha Vázia")
    } else if(senha != senhaConfirmada){
        alert("Senhas não são as mesmas")
        return false
    } else if(senha == senhaConfirmada){
        alert("Senha Válida")
    }
    return true
}

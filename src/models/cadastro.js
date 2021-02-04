function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 digitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

function validarSenha(senha) {
    if (senha.length < 4) {
        return { valido: false, texto: "Senhe deve ser maior que 3 dígitos." }
    } else {
        return { valido: true, texto: "" }
    }
}

export { validarCPF, validarSenha }
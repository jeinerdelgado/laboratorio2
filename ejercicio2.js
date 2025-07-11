function validarContraseña(contraseña){
    let longitud = contraseña.length >= 8;
    let tieneNumero = /[0-9]/.test(contraseña);
    let tieneMayuscula = /[A-Z]/.test(contraseña);
    return longitud && tieneNumero && tieneMayuscula;
}
contraseña = validarContraseña("Laura1234!")
console.log(contraseña);
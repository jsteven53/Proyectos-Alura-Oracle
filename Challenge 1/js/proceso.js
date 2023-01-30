const textArea = document.querySelector("#Encriptar");
const mensaje = document.querySelector("#Mensaje");

function EncriptarButton(){
    const textoEncriptado = EncriptarTexto(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function DesencriptarButton(){
    const textoEncriptado = DesencriptarTexto(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function EncriptarTexto(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function DesencriptarTexto(stringDencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDencriptada = stringDencriptada.toLowerCase()
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDencriptada.includes(matrizCodigo[i][0])){
            stringDencriptada = stringDencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDencriptada
}

function CopiarTexto() {
    let textoCopiar = document.querySelector("#Mensaje").value;
    navigator.clipboard.writeText(textoCopiar);
    mensaje.value = "";
}
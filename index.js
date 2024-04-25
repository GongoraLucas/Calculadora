function mostrasValor(valor){
    document.getElementById("pantalla").value += valor
}

function borrar(){
    document.getElementById("pantalla").value=""
}

function calcular(){
    const pantalla = document.getElementById("pantalla").value;
    const resultado = eval(pantalla);
    document.getElementById("pantalla").value = resultado
}


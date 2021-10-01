var nome;

function liberaPage() {
    document.getElementById("corpo").style.display = "flex";
    document.getElementById("game").style.display = "block";
    nome = document.getElementById("muser").value;

    document.getElementById("apresentacao").innerHTML = "Olá, "+ nome +"! Vamos começar?"
}

function sorted() {
    return parseInt(Math.random() * 11);
}

var numeroSecreto;
var vidas = 3;

function Chutar() {
    var chute = parseInt(document.getElementById("mchute").value);    
    var elementoResultado = document.getElementById("resultado")
    var elementoDicas = document.getElementById("dica")    
    var elementoVidas = document.getElementById("vidas")

    if(vidas == 3) {
        elementoVidas.innerHTML = "<span>&#9829;</span> <span>&#9829;</span>"
    } else if ( vidas == 2) {
        elementoVidas.innerHTML = "<span>&#9829;</span>"
    } else if (vidas == 1) {
        elementoVidas.innerHTML = ""
    }

    var btnSubmmit = document.getElementById("btn-submit");
    var btnReset = document.getElementById("btn-reset");    

    if (vidas == 3) {
        numeroSecreto = sorted()
    }

    if (chute == numeroSecreto) {
        elementoDicas.innerHTML = ""
        elementoResultado.innerHTML = "Acertou " + nome + "!!! Parabéns!"
        vidas = 3
        btnSubmmit.style.display = "none"
        btnReset.style.display = "block"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Eiii "+ nome +" valor tem que ser de 0 a 10"
    } else if(vidas == 1) {
        elementoDicas.innerHTML = ""
        elementoResultado.innerHTML = nome + " suas vidas acabaram! Valor sorteado foi " + numeroSecreto + " <br/> Tente Novamente!"
        vidas = 3
        btnSubmmit.style.display = "none"
        btnReset.style.display = "block"
    } else {
        if(numeroSecreto < chute) {
            elementoDicas.innerHTML = "Chuta para baixo " + nome + "!"
        } else {
            elementoDicas.innerHTML = "Chuta para cima " + nome + "!"
        }
        elementoResultado.innerHTML = "Errou " + nome + "!"
        vidas -= 1
    }    
}

function reset() {
    var elementoResultado = document.getElementById("resultado");
    var elementoDicas = document.getElementById("dica");
    var elementoVidas = document.getElementById("vidas")

    var btnSubmmit = document.getElementById("btn-submit");
    var btnReset = document.getElementById("btn-reset");

    vidas = 3;
    elementoDicas.innerHTML = "";
    elementoResultado.innerHTML = "";
    btnSubmmit.style.display = "block";
    btnReset.style.display = "none";
    elementoVidas.innerHTML = "<span>&#9829;</span> <span>&#9829;</span> <span>&#9829;</span>"
}
window.addEventListener("load", aoCarregar);

function aoCarregar() {
    const botaoCalcular = document.getElementById("btnCalcule");
    const botaoLimpar = document.getElementById("btnLimpar");
    const botaoResultado = document.getElementById("btnLimpaResultado");
    botaoCalcular.addEventListener("click", somar);
    botaoLimpar.addEventListener("click", limpar);
    botaoResultado.addEventListener("click", limpaResultado);
}

function somar() {
    const numero01 = document.getElementById("input01");
    const numero02 = document.getElementById("input02");
    const numero03 = document.getElementById("input03");
    let n1 = numero01.value;
    let n2 = numero02.value;
    let n3 = numero03.value;
    let soma = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `${soma}`;
    limpar();
}

function limpar() {
    document.getElementById("input01").value = "";
    document.getElementById("input02").value = "";
    document.getElementById("input03").value = "";
}

function limpaResultado() {
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = ``;
}



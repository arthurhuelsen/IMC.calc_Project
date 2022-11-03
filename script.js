const txtPeso = document.getElementById('peso');
const txtAltura = document.getElementById('altura');
const btnCalcular = document.getElementById('calcular');
const txtResultado = document.getElementById('imc');
const txtNivel = document.getElementById('nivel');

function calcularIMC(peso, altura){
    const imc = peso / (altura * altura)
    return imc.toFixed(1)
}

function indicarNivelIMC(imc){
    let nivel = '';

    if (imc < 18.5){ nivel = 'Abaixo do peso';}
    else if (imc >= 18.5 && imc <= 24.9){ nivel = 'Peso normal';}
    else if (imc >= 25 && imc <= 29.9){ nivel = 'Sobrepeso';}
    else if (imc >= 30 && imc <= 34.9){ nivel = 'Obesidade grau 1';}
    else if (imc >= 35 && imc <= 39.9){ nivel = 'Obesidade grau 2';}
    else if (imc >= 40){ nivel = 'Obesidade grau 3';}
    
    return nivel;
}

btnCalcular.addEventListener('click', (e) => {
    const peso = txtPeso.value
    const altura = txtAltura.value
    const imc = calcularIMC(peso, altura);
    txtResultado.innerText = imc;
    txtNivel.innerText = indicarNivelIMC(imc);
})
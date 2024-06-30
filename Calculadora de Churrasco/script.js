//codigo da funçao de todo o calculo de carne, cerveja baseado nas crianças e adultos...
function calcular() {
    //para obter os valores
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;
    //tabela de ml e g
    const consumo = {
        carne: { homens: 500, mulheres: 300, criancas: 200 },
        frango: { homens: 200, mulheres: 200, criancas: 100 },
        linguica: { homens: 200, mulheres: 200, criancas: 200 },
        refrigerante: { homens: 300, mulheres: 400, criancas: 200 },
        cerveja: { homens: 800, mulheres: 500, criancas: 0 }
    };
    //calculo da quantidade
    const totalCarne = (homens * consumo.carne.homens + mulheres * consumo.carne.mulheres + criancas * consumo.carne.criancas) / 1000;
    const totalFrango = (homens * consumo.frango.homens + mulheres * consumo.frango.mulheres + criancas * consumo.frango.criancas) / 1000;
    const totalLinguica = (homens * consumo.linguica.homens + mulheres * consumo.linguica.mulheres + criancas * consumo.linguica.criancas) / 1000;
    const totalRefrigerante = (homens * consumo.refrigerante.homens + mulheres * consumo.refrigerante.mulheres + criancas * consumo.refrigerante.criancas) / 1000;
    const totalCerveja = (homens * consumo.cerveja.homens + mulheres * consumo.cerveja.mulheres + criancas * consumo.cerveja.criancas) / 1000;
    //resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Quantidade de Ingredientes</h2>
        <p>Carne: ${totalCarne.toFixed(2)} kg</p>
        <p>Frango: ${totalFrango.toFixed(2)} kg</p>
        <p>Linguiça: ${totalLinguica.toFixed(2)} kg</p>
        <p>Refrigerante: ${totalRefrigerante.toFixed(2)} litros</p>
        <p>Cerveja: ${totalCerveja.toFixed(2)} litros</p>
    `;
}

function calcularIMC(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém o valor do gênero selecionado (masculino ou feminino)
    const genero = document.querySelector('input[name="genero"]:checked').value;

    // Converte os valores de peso e altura para números
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado'); // Elemento onde o resultado será exibido

    // --- Validação das Entradas ---
    if (!peso || peso <= 0) {
        resultado.innerHTML = 'Por favor, insira um **peso** válido (maior que zero).';
        resultado.style.background = 'red';
        return; // Sai da função se o peso for inválido
    }
    if (!altura || altura <= 0) {
        resultado.innerHTML = 'Por favor, insira uma **altura** válida (maior que zero).';
        resultado.style.background = 'red';
        return; // Sai da função se a altura for inválida
    }

    // Calcula o IMC
    const imc = peso / (altura ** 2);
    let mensagem = '';
    let corFundo = '';

    // --- Lógica de Classificação do IMC com Diferenciação por Gênero ---
    if (genero === 'masculino') {
        if (imc < 18.5) {
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está **abaixo do peso** (homem).`;
            corFundo = 'red';
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está no **peso ideal** (homem).`;
            corFundo = 'green';
        } else if (imc >= 25 && imc <= 29.9) {
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está **acima do peso** (homem).`;
            corFundo = 'orange';
        } else if (imc >= 30 && imc <= 34.9) {
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está com **obesidade grau 1** (homem).`;
            corFundo = 'red';
        } else if (imc >= 35 && imc <= 39.9) {
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está com **obesidade grau 2** (homem).`;
            corFundo = 'red';
        } else { // IMC >= 40
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está com **obesidade grau 3** (homem).`;
            corFundo = 'red';
        }
    } else { // genero === 'feminino'
        if (imc < 19) { // Sua faixa original para mulheres
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está **abaixo do peso** (mulher).`;
            corFundo = 'red';
        } else if (imc >= 19 && imc <= 24.5) { // Sua faixa original para mulheres
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está no **peso ideal** (mulher).`;
            corFundo = 'green';
        } else if (imc > 24.5 && imc <= 29) { // Sua faixa original para mulheres
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está **acima do peso** (mulher).`;
            corFundo = 'orange';
        } else { // IMC > 29
            mensagem = `O seu IMC é de ${imc.toFixed(2)}. Você está com **obesidade** (mulher).`;
            corFundo = 'red';
        }
    }

    // Exibe a mensagem e define a cor de fundo do resultado
    resultado.innerHTML = mensagem;
    resultado.style.background = corFundo;
}

// Adiciona o 'event listener' ao botão para chamar a função calcularIMC quando clicado
document.getElementById('alertButton').addEventListener('click', calcularIMC);
// O listener do formulário deve ser definido fora da função calcularIMC
// e chamar calcularIMC quando o formulário for submetido.
const form = document.querySelector(".form");
form.addEventListener("submit", calcularIMC);

function calcularIMC(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const genero = document.querySelector('input[name="genero"]:checked').value;
    const peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    altura = altura / 100;

    // --- Validação das Entradas (agora no início) ---
    // Sugestão: considere adicionar || peso <= 0 e || altura <= 0 aqui para evitar zero/negativos
    if (!peso) {
        setResultado(
            "Por favor, insira um **peso** válido (maior que zero).",
            false
        );
        return; // Sai da função
    }
    if (!altura) {
        setResultado(
            "Por favor, insira uma **altura** válida (maior que zero).",
            false
        );
        return; // Sai da função
    }

    const imc = getImc(peso, altura); // Calcula o IMC
    const { nivel, corFundo } = getNivelImc(imc, genero); // Obtém o nível e a cor

    const msg = `O seu IMC é de ${imc}. Você está classificado como: **${nivel}**.`;
    setResultado(msg, true, corFundo); // Exibe o resultado com sucesso e cor
}

function getNivelImc(imc, genero) {
    let nivel = "";
    let corFundo = "";

    if (genero === "masculino") {
        if (imc < 18.5) {
            nivel = "Abaixo do peso";
            corFundo = "red";
        } else if (imc >= 18.5 && imc <= 24.9) {
            nivel = "Peso normal";
            corFundo = "green";
        } else if (imc >= 25 && imc <= 29.9) {
            nivel = "Sobrepeso";
            corFundo = "orange";
        } else if (imc >= 30 && imc <= 34.9) {
            nivel = "Obesidade grau 1";
            corFundo = "red";
        } else if (imc >= 35 && imc <= 39.9) {
            nivel = "Obesidade grau 2";
            corFundo = "red";
        } else {
            // imc >= 40
            nivel = "Obesidade grau 3";
            corFundo = "red";
        }
    } else {
        // genero === 'feminino'
        // Mantendo suas faixas originais para mulheres
        if (imc < 19) {
            nivel = "Abaixo do peso";
            corFundo = "red";
        } else if (imc >= 19 && imc <= 24.5) {
            nivel = "Peso normal";
            corFundo = "green";
        } else if (imc > 24.5 && imc <= 29) {
            nivel = "Sobrepeso";
            corFundo = "orange";
        } else {
            // imc > 29
            nivel = "Obesidade"; // Sua categoria única para obesidade feminina
            corFundo = "red";
        }
    }
    return { nivel, corFundo }; // Retorna um objeto com ambos os valores
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement("p");
    return p;
}

function setResultado(msg, isValid, bgColor) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa conteúdo anterior

    const p = criaP(); // Cria um novo parágrafo

    if (isValid) {
        p.classList.add("paragrafo-resultado"); // Classe para resultados de sucesso
        p.style.background = bgColor; // <<< AQUI: Aplica a cor de fundo ao PARÁGRAFO (p), não à div pai
        p.style.color = 'black'; // Sugestão: para garantir a legibilidade do texto
    } else {
        p.classList.add("bad"); // Classe para mensagens de erro
        // A cor de fundo para .bad já está no CSS, então não precisamos setar aqui
        p.style.color = 'black'; // Sugestão: Cor do texto para erros, se o fundo for claro
    }

    p.innerHTML = msg;
    resultadoDiv.appendChild(p); // Adiciona o parágrafo à div de resultado
}
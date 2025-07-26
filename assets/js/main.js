


function calcularIMC(event) {
    event.preventDefault(); // <- ESSENCIAL para evitar que a página recarregue
const genero = document.querySelector('input[name="genero"]:checked').value;

const peso = Number(document.getElementById('peso').value);
const altura = Number(document.getElementById('altura').value);
const resultado = document.getElementById('resultado');
const imc = peso/(altura **2);


if(!peso|| !altura ) {
    resultado.innerHTML = 'Preencha os campos corretamente.';
    return;} 

    if(genero == 'masculino') {

if(imc < 18.5) {
    resultado.innerHTML = `O seu imc é de${imc.toFixed(2)} você está abaixo do peso.`;



}else if(imc>18.5 && imc <=24.9) {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está no peso ideal.`;


}


else if(imc >= 25 && imc <=29.9) {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está acima do peso.`;

} else if(imc >= 30 && imc <=34.9) {

    resultado.innerHTML =   `O seu imc é de ${imc.toFixed(2)} você está com obesidade grau 1..`;;

} else if(imc >= 35 && imc <=39.9) {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está com obesidade grau 2.`;

} else {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está com obesidade grau 3.`;
}
    }  
 else {
  if(imc < 19) {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está abaixo do peso.`;
  } else if(imc >= 19 && imc <= 24.5) {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está no peso ideal.`;
  } else if(imc > 24.5 && imc <= 29) {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está acima do peso.`;
  } else {
    resultado.innerHTML = `O seu imc é de ${imc.toFixed(2)} você está com obesidade.`;
  }
}

    }



document.getElementById('alertButton').addEventListener('click', calcularIMC);


// declarando variaveis
let guess = document.getElementById('guess');
const msg1 = document.getElementById('mensagem1');
const sendBtn = document.getElementById('send-btn');
let guessedNumber = document.getElementById('guessedNumber');
let answer;
let displayOne = document.getElementById('display-1');
let displayTwo = document.getElementById('display-2');
let displayThree = document.getElementById('display-3');
let boxNumber = document.getElementById('numb-container');
const numberZero = document.getElementsByClassName('display-no-0');
const numberOne = document.getElementsByClassName('display-no-1');
const numberTwo = document.getElementsByClassName('display-no-2');
const numberThree = document.getElementsByClassName('display-no-3');
const numberFour = document.getElementsByClassName('display-no-4');
const numberFive = document.getElementsByClassName('display-no-5');
const numberSix = document.getElementsByClassName('display-no-6');
const numberSeven = document.getElementsByClassName('display-no-7');
const numberEight = document.getElementsByClassName('display-no-8');
const numberNine = document.getElementsByClassName('display-no-9');



// function numObj() {
//   let numbersObj = {};
//   numbersObj.num = guess.value;
//   console.log(numbersObj);
// }

function segmentNumberOne() {
  let user_guess = Number(guess.value);

  if(user_guess == 1) {
    displayOne.classList.add('display-no-1');
  } else if(user_guess == 2) {
    displayOne.classList.add('display-no-2');
  } else if(user_guess == 3) {
    displayOne.classList.add('display-no-3');
  } else if(user_guess == 4) {
    displayOne.classList.add('display-no-4');
  } else if(user_guess == 5) {
    displayOne.classList.add('display-no-5');
  } else if(user_guess == 6) {
    displayOne.classList.add('display-no-6');
  } else if(user_guess == 6) {
    displayOne.classList.add('display-no-6');
  } else if(user_guess == 7) {
    displayOne.classList.add('display-no-7');
  } else if(user_guess == 8) {
    displayOne.classList.add('display-no-8');
  } else if(user_guess == 9) {
    displayOne.classList.add('display-no-9');
  }
}


function startGame() {
  displayTwo.classList.add('disable');
  displayThree.classList.add('disable');
  displayOne.classList.add('display-no-0');
}

function randomNumber() {
  // fazendo um http request para o número aleatório com Ajax
  const Http = new XMLHttpRequest(); // inicializando o request
  const url = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'; // Colocando o url em uma variavel que vai ser utilizado para definir o endpoint
  Http.open("GET", url); // junto o "GET" com o endpoint do url
  Http.send(); // enviando o request para poder receber o objeto 

  // Verificando o estado do request
  Http.onreadystatechange=function() {
    if(this.readyState==4) { // se o state for == 4 significa que o request foi feito
      // se o request foi feito pego o objeto e separo so o valor que preciso do JSON
      let myJSON = Http.responseText;
      let myObj = JSON.parse(myJSON);
      answer = myObj.value; // pegando o valor que esta dentro de "value"
      console.log(answer); // verificar no console que o valor certo foi pego
    } else if ( this.status!=200) {
      msg1.textContent = 'ERRO';
      msg1.classList.add('red-text');
      boxNumber.classList.add('mt-30');
      displayOne.classList.remove('display-no-0');
      displayTwo.classList.remove('disable');
      displayThree.classList.remove('disable');
      displayOne.classList.add('display-no-5', 'red');
      displayTwo.classList.add('display-no-0', 'red');
      displayThree.classList.add('display-no-2', 'red');
    }
  }
}

console.log(randomNumber());

// Função para definir se a resposta for maior, menor ou se acertou o número.
function sendNumber() {
  let user_guess = Number(guess.value);

  if(guess.value.length == 1) {
    displayOne.classList.remove('display-no-0');
    segmentNumberOne();
  } else if(guess.value.length == 2) {
    displayTwo.classList.remove('disable');
  } else if (guess.value.length == 3) {
    displayThree.classList.remove('disable');
  }

  // Conferindo que o usuário digite um número entre 1 e 300
  if(user_guess < 1 || user_guess > 300) {
    alert('Por favor insira um número entre 1 e 300.');
    startGame();
  } else {
    if(user_guess < answer) {
      msg1.textContent = 'É maior';
      boxNumber.classList.add('mt-30');
      // mostrando o número do usuário no LED e deixando vazia a caixa de respostas
      guessedNumber.innerHTML = user_guess;
      guess.value = '';
      guess.focus();
    } else if(user_guess > answer) {
      msg1.textContent = 'É menor';
      boxNumber.classList.add('mt-30');
      guessedNumber.innerHTML = user_guess;
      guess.value = '';
      guess.focus();
    } else if(user_guess == answer) {
      msg1.textContent = 'Você acertou!!!!';
      boxNumber.classList.add('mt-30');
      displayOne.classList.add(numDisplay, 'green');
      displayTwo.classList.add(numDisplay2, 'green');
      displayThree.classList.add(numDisplay3, 'green');
      guessedNumber.innerHTML = user_guess;
      guess.value = '';
      guess.focus();
      setGameOver();
    }
  }

  console.log(user_guess.length);
}

// Função para finalizar o jogo e criando o botão para jogar novamente
function setGameOver() {
  guess.disabled = true;
  sendBtn.disabled = true;
  playAgain = document.createElement('button');
  playAgainText = document.createTextNode('Nova Partida');
  playAgain.appendChild(playAgainText);
  playAgain.classList.add('play-again');
  document.body.appendChild(playAgain);
  playAgain.addEventListener('click', newGame);
}

// Função para reiniciar um novo jogo
function newGame() {
  playAgain.parentNode.removeChild(playAgain);
  guess.disabled = false;
  sendBtn.disabled = false;
  guessedNumber.innerHTML = 0;
  msg1.textContent = '';
  answer = randomNumber();
}

function numberLength() {
  for(let i = 0; i < guess.length; i++){
    console.log(guess[i]);
  }
}

startGame();
console.log(numberLength());


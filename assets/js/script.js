// declarando variaveis e inserindo elementos do HTML dentro delas
let guess = document.getElementById('guess');
const msg1 = document.getElementById('mensagem1');
const sendBtn = document.getElementById('send-btn');
let guessedNumber = document.getElementById('guessedNumber');
let answer;
let displayOne = document.getElementById('display-1');
let displayTwo = document.getElementById('display-2');
let displayThree = document.getElementById('display-3');



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
  // Conferindo que o usuário digite um número entre 1 e 300
  if(user_guess < 1 || user_guess > 300) {
    alert('Por favor insira um número entre 1 e 300.');
  } else {
    if(user_guess < answer) {
      msg1.textContent = 'É maior';
      // mostrando o número do usuário no LED e deixando vazia a caixa de respostas
      guessedNumber.innerHTML = user_guess;
      guess.value = '';
      guess.focus();
    } else if(user_guess > answer) {
      msg1.textContent = 'É menor';
      guessedNumber.innerHTML = user_guess;
      guess.value = '';
      guess.focus();
    } else if(user_guess == answer) {
      msg1.textContent = 'Você acertou!!!!';
      guessedNumber.innerHTML = user_guess;
      guess.value = '';
      guess.focus();
      setGameOver();
    }
  }
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

console.log(numberLength());
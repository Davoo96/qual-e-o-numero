// fazendo um http request para o randomNumber
// function send() {
//   var xmlhttp;
//   if (window.XMLHttpRequest) {
//     xmlhttp = new XMLHttpRequest();
//   } else {
//     // code for older browsers
//     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//   };
//   xmlhttp.open("GET", "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300", true);
//   xmlhttp.send();
// }

// console.log(send());

let answer = Math.floor(Math.random()*300) + 1;

// declarando variaveis e inserindo elementos do HTML dentro delas
let guess = document.getElementById('guess');
const msg1 = document.getElementById('mensagem1');
const sendBtn = document.getElementById('send-btn');
let guessedNumber = document.getElementById('guessedNumber');

// Função para definir se a resposta for maior, menor ou se acertou o número.
function send() {
  let user_guess = Number(guess.value);
  // Conferindo que o usuário digite um número entre 1 e 300
  if(user_guess < 1 || user_guess > 300) {
    alert('Por favor insira um número entre 1 e 300.');
  } else {
    if(user_guess < answer) {
      msg1.textContent = 'É maior';
    } else if(user_guess > answer) {
      msg1.textContent = 'É menor';
    } else if(user_guess == answer) {
      msg1.textContent = 'Você acertou!!!!';
      setGameOver();
    }
  }

  // mostrando o número do usuário no LED e deixando vazia a caixa de respostas
  guessedNumber.innerHTML = user_guess;
  guess.value = '';
  guess.focus();
}

// Criando função para finalizar o jogo e criando o botão para jogar novamente
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

function newGame() {
  playAgain.parentNode.removeChild(playAgain);
  guess.disabled = false;
  sendBtn.disabled = false;
  guessedNumber.innerHTML = 0;
  msg1.textContent = '';
}

console.log(answer);
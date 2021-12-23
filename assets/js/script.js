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
let realDigits = [];

// função para receber o número aleatório
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
      answer = myObj.value; // pegando o valor que esta dentro do objeto na chave "value"
      console.log(answer); // verificar no console que o valor certo foi pego
      console.log(Http.responseText); // verificar no console que o valor certo foi pego
    } else if (this.status !== 200) {
      let answer2 = Http.responseText;
      let myObj2 = JSON.parse(answer2);
      answer = myObj2.value;
      errorRestart();
      console.log(answer2);
    }
  }
}

function errorRestart() {
  msg1.textContent = 'ERRO';
  msg1.classList.add('red-text', 'mt');
  boxNumber.classList.add('mt-30');
  displayOne.classList.remove('display-no-0');
  displayTwo.classList.remove('disable');
  displayThree.classList.remove('disable');
  displayOne.classList.add('display-no-5', 'red');
  displayTwo.classList.add('display-no-0', 'red');
  displayThree.classList.add('display-no-2', 'red');
  setGameOver();
}

// separando o  número em 3 valores
function numObj() {
  let num = guess.value;
  let digits = num.toString().split(''); // gerando a variavel com o valor em uma string e utilizando split para dividir os numeros em valores separados
  realDigits = digits.map(Number); // voltando os valores de string para numeros

  console.log(realDigits);
  return realDigits[0], realDigits[1], realDigits[2]; // retornando os valores separados
}



// Verificando o primer número para atribuir a classe correta no LED
function segmentNumberOne() {
  numObj(); 

  if(realDigits[0] == 1) {
    displayOne.classList.add('display-no-1');
  } else if(realDigits[0] == 2) {
    displayOne.classList.add('display-no-2');
  } else if(realDigits[0] == 3) {
    displayOne.classList.add('display-no-3');
  } else if(realDigits[0] == 4) {
    displayOne.classList.add('display-no-4');
  } else if(realDigits[0] == 5) {
    displayOne.classList.add('display-no-5');
  } else if(realDigits[0] == 6) {
    displayOne.classList.add('display-no-6');
  } else if(realDigits[0] == 6) {
    displayOne.classList.add('display-no-6');
  } else if(realDigits[0] == 7) {
    displayOne.classList.add('display-no-7');
  } else if(realDigits[0] == 8) {
    displayOne.classList.add('display-no-8');
  } else if(realDigits[0] == 9) {
    displayOne.classList.add('display-no-9');
  }
}

// Verificando o segundo número para atribuir a classe correta no LED
function segmentNumberTwo() {
  numObj();

  if(realDigits[1] == 1) {
    displayTwo.classList.add('display-no-1');
  } else if(realDigits[1] == 2) {
    displayTwo.classList.add('display-no-2');
  } else if(realDigits[1] == 3) {
    displayTwo.classList.add('display-no-3');
  } else if(realDigits[1] == 4) {
    displayTwo.classList.add('display-no-4');
  } else if(realDigits[1] == 5) {
    displayTwo.classList.add('display-no-5');
  } else if(realDigits[1] == 6) {
    displayTwo.classList.add('display-no-6');
  } else if(realDigits[1] == 6) {
    displayTwo.classList.add('display-no-6');
  } else if(realDigits[1] == 7) {
    displayTwo.classList.add('display-no-7');
  } else if(realDigits[1] == 8) {
    displayTwo.classList.add('display-no-8');
  } else if(realDigits[1] == 9) {
    displayTwo.classList.add('display-no-9');
  } else if(realDigits[1] == 0) {
    displayTwo.classList.add('display-no-0');
  }
}

// Verificando o primer número para atribuir a classe correta no LED
function segmentNumberThree() {
  numObj();

  if(realDigits[2] == 1) {
    displayThree.classList.add('display-no-1');
  } else if(realDigits[2] == 2) {
    displayThree.classList.add('display-no-2');
  } else if(realDigits[2] == 3) {
    displayThree.classList.add('display-no-3');
  } else if(realDigits[2] == 4) {
    displayThree.classList.add('display-no-4');
  } else if(realDigits[2] == 5) {
    displayThree.classList.add('display-no-5');
  } else if(realDigits[2] == 6) {
    displayThree.classList.add('display-no-6');
  } else if(realDigits[2] == 6) {
    displayThree.classList.add('display-no-6');
  } else if(realDigits[2] == 7) {
    displayThree.classList.add('display-no-7');
  } else if(realDigits[2] == 8) {
    displayThree.classList.add('display-no-8');
  } else if(realDigits[2] == 9) {
    displayThree.classList.add('display-no-9');
  } else if(realDigits[2] == 0) {
    displayThree.classList.add('display-no-0');
  }
}

// removendo as classes display-no-x para poder inserir o numero novo
function removeSegmentNum() {
  displayOne.classList.remove('display-no-0');
  displayOne.classList.remove('display-no-1');
  displayOne.classList.remove('display-no-2');
  displayOne.classList.remove('display-no-3');
  displayOne.classList.remove('display-no-4');
  displayOne.classList.remove('display-no-5');
  displayOne.classList.remove('display-no-6');
  displayOne.classList.remove('display-no-7');
  displayOne.classList.remove('display-no-8');
  displayOne.classList.remove('display-no-9');

  displayTwo.classList.remove('display-no-0');
  displayTwo.classList.remove('display-no-1');
  displayTwo.classList.remove('display-no-2');
  displayTwo.classList.remove('display-no-3');
  displayTwo.classList.remove('display-no-4');
  displayTwo.classList.remove('display-no-5');
  displayTwo.classList.remove('display-no-6');
  displayTwo.classList.remove('display-no-7');
  displayTwo.classList.remove('display-no-8');
  displayTwo.classList.remove('display-no-9');

  displayThree.classList.remove('display-no-0');
  displayThree.classList.remove('display-no-1');
  displayThree.classList.remove('display-no-2');
  displayThree.classList.remove('display-no-3');
  displayThree.classList.remove('display-no-4');
  displayThree.classList.remove('display-no-5');
  displayThree.classList.remove('display-no-6');
  displayThree.classList.remove('display-no-7');
  displayThree.classList.remove('display-no-8');
  displayThree.classList.remove('display-no-9');
}

// começar o jogo com o número zero
function startGame() {
  displayTwo.classList.add('disable');
  displayThree.classList.add('disable');
  displayOne.classList.add('display-no-0');
}

console.log(randomNumber());

// Função para definir se a resposta for maior, menor ou se acertou o número.
function sendNumber() {
  removeSegmentNum();
  let user_guess = Number(guess.value);
  console.log(user_guess.toString().length);

  if(user_guess.toString().length == 1) {
    displayOne.classList.remove('display-no-0');
    displayTwo.classList.add('disable');
    displayThree.classList.add('disable');
    segmentNumberOne();
  } else if(user_guess.toString().length == 2) {
    displayTwo.classList.remove('disable');
    displayThree.classList.add('disable');
    segmentNumberOne();
    segmentNumberTwo();
  } else if (user_guess.toString().length == 3) {
    displayTwo.classList.remove('disable');
    displayThree.classList.remove('disable');
    segmentNumberOne();
    segmentNumberTwo();
    segmentNumberThree();
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
      guess.value = '';
      guess.focus();
    } else if(user_guess > answer) {
      msg1.textContent = 'É menor';
      boxNumber.classList.add('mt-30');
      guess.value = '';
      guess.focus();
    } else if(user_guess == answer) {
      msg1.textContent = 'Você acertou!!!!';
      boxNumber.classList.add('mt-30');
      msg1.classList.add('green-text', 'mt');
      displayOne.classList.add('green');
      displayTwo.classList.add('green');
      displayThree.classList.add('green');
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
  removeSegmentNum();
  playAgain.parentNode.removeChild(playAgain);
  msg1.classList.remove('green-text');
  msg1.classList.remove('red-text');
  displayOne.classList.remove('green');
  displayTwo.classList.remove('green');
  displayThree.classList.remove('green');
  displayOne.classList.remove('red');
  displayTwo.classList.remove('red');
  displayThree.classList.remove('red');
  boxNumber.classList.remove('mt-30');
  guess.disabled = false;
  sendBtn.disabled = false;
  msg1.textContent = '';
  answer = randomNumber();
  startGame();
}

startGame();
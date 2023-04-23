// Variaveis
const openCookie = document.querySelector("#openCookie");
const buttonReset = document.querySelector("#buttonReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phrase = document.querySelector(".phrases");

let randomPhrases = Math.round(Math.random() * 5);

const cookiePhrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
]; 

// Eventos
openCookie.addEventListener("click", mensagemCookie)
buttonReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleScreenEnter);

// Função CallBack
function mensagemCookie() {
  toggleScreen();

  phrase.innerHTML = cookiePhrases[randomPhrases];
}

// Funções
function handleResetClick() {
  toggleScreen();
  randomPhrases = Math.round(Math.random() * 5);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleScreenEnter(e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  } 
}
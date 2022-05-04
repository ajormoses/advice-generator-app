var count = document.querySelector(".advice-count");
var quote = document.querySelector(".quote");
var dice = document.querySelector(".dice");

const generateAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");

  const data = await response.json();

  count.textContent = data.slip.id;
  quote.textContent = `"${data.slip.advice}"`;
};

generateAdvice();

dice.addEventListener("click", generateAdvice);

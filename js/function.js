let countCoffee = 0;
let countTea = 0;
let countMilk = 0;
let countCoke = 0;
let countBeer = 0;
let countTotal = 0;

const countArray = [countCoffee, countTea, countMilk, countCoke, countBeer]
const counter = document.getElementsByClassName('counter');
const button = document.getElementsByTagName('button');

const priceArray = [480, 280, 180, 190, 580]
const countDispay = document.getElementById('count');
const priceDispay = document.getElementById('price');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    countUp();
  })

  function countUp() {
    countArray[i]++;
    counter[i].textContent = countArray[i];

    let priceCoffee = priceArray[0] * countArray[0];
    let priceTea = priceArray[1] * countArray[1];
    let priceMilk = priceArray[2] * countArray[2];
    let priceBeer = priceArray[3] * countArray[3];
    let priceTotal = priceArray[4] * countArray[4];

    countTotal++;
    countDispay.textContent = countTotal;
    priceDispay.textContent = priceCoffee + priceTea + priceMilk + priceBeer + priceTotal
  }
}
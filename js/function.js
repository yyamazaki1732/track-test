let count = 0;
let countCoffee = 0;
let countTea = 0;
let countMilk = 0;
let countCoke = 0;
let countBeer = 0;

let countArray = [countCoffee, countTea, countMilk, countCoke, countBeer]
const priceArray = [480, 280, 180, 190, 580];
const button = document.getElementsByTagName('button');
const buttonCounter = document.getElementsByClassName('counter');
const displayCount = document.getElementById('count');
const displayPrice = document.getElementById('price');

displayCount.textContent = `商品数：${count} 個`
displayPrice.textContent = `合計金額：${count * 0} 円`

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', addItem);
  function addItem() {
    count++;
    displayCount.textContent = `商品数：${count} 個`
    displayPrice.textContent = `合計金額：${count * priceArray[i]} 円`

    countArray[i]++;
    buttonCounter[i].textContent = countArray[i];
  }
}

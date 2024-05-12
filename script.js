const toggleButton = document.querySelector('.check-box');

const prices = document.querySelectorAll('.price-monthly');


function convertedPrice(priceElement, conversionFactor) {
    const priceNumber = Number(priceElement.innerText);
    const convertedPrice = (priceNumber * conversionFactor).toFixed(2);
    priceElement.innerText = convertedPrice;
}

toggleButton.addEventListener("change", () => {
    const conversionFactor = toggleButton.checked ? 0.1 : 10;
    prices.forEach((price) => convertedPrice(price, conversionFactor));
});
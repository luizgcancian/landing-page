const img = document.querySelector(".ofertas-produto img");
const arrowLeft = document.querySelector(".ofertas-left img");
const arrowRight = document.querySelector(".ofertas-right img");
const prodDesc = document.querySelector(".prod-desc");
const prodWeight = document.querySelector(".prod-weight");
const precoParcela = document.querySelector(".preco-parcela");
const vistaDesc = document.querySelector(".vista-desc");
const precoMenorParcela = document.querySelector(".preco-parcela2");
const precoVista = document.querySelector(".vista-desc");

arrowLeft.addEventListener("click", handleLeftClick);
arrowRight.addEventListener("click", handleRightClick);

fetch("./ofertas.json")
  .then((r) => r.json())
  .then((json) => {
    img.src = json[count].img;
    prodDesc.innerHTML = json[count].description;
    prodWeight.innerHTML = json[count].weight;
    precoParcela.innerHTML = json[count].parceladojuros;
    precoMenorParcela.innerHTML = json[count].precoparcelado;
    precoVista.innerHTML = json[count].precovista;
  });

let count = 0;

function handleLeftClick() {
  if (count === 0) {
    showProduct(1);
    count = 1;
  } else {
    showProduct(0);
    count = 0;
  }
  console.log(count);
}

function handleRightClick() {
  if (count === 0) {
    showProduct(count + 1);
    count = 1;
  } else {
    showProduct(count - 1);
    count = 0;
  }
}

function showProduct(count) {
  fetch("./ofertas.json")
    .then((r) => r.json())
    .then((json) => {
      img.src = json[count].img;
      prodDesc.innerHTML = json[count].description;
      prodWeight.innerHTML = json[count].weight;
      precoParcela.innerHTML = json[count].parceladojuros;
      precoMenorParcela.innerHTML = json[count].precoparcelado;
      precoVista.innerHTML = json[count].precovista;
    });
}

showProduct();

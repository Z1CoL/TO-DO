const products = [
  {
    name: "iPhone16",
    price: "1000$",
    description: "product",
    imageSrc: "./images/ip16.jpeg",
  },
  {
    name: "iPad",
    price: "1299$",
    description: "product",
    imageSrc: "./images/ipad.jpeg",
  },
  {
    name: "MacBook",
    price: "1600$",
    description: "product",
    imageSrc: "./images/macbook.jpeg",
  },
  {
    name: "Airpods",
    price: "249$",
    description: "product",
    imageSrc: "./images/airpods.jpeg",
  },
];

products.map((product) => {
  const divSec = document.createElement("div");
  divSec.setAttribute("class", "card");

  const imgSec = document.createElement("img");
  imgSec.src = product.imageSrc;

  const h2Title = document.createElement(`h2`);
  h2Title.innerText = product.name;

  const pSec = document.createElement("p");
  pSec.innerText = product.description;

  const price = document.createElement("h3");
  price.innerText = product.price;
  
  price.setAttribute("class", "priceS");
  divSec.appendChild(h2Title);
  divSec.appendChild(pSec);
  divSec.appendChild(imgSec);
  divSec.appendChild(price);

  document.getElementById("app").appendChild(divSec);
  document.querySelector("#p");
});


// const divSec = document.createElement("div"); --> DIV 
// divSec.setAttribute("class", "card");         -->  CLASS="CARD"
//  imgSec.src = product.imageSrc;               --> MAP TAIGAA HOLBOJ OGCH BNA 
//  divSec.appendChild(h2Title);                 -->  <DIV> - ENE DOTOR HIIJ BNAL GSN UG - </DIV>
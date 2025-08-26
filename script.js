// const products = [
//   {
//     name: "iPhone16",
//     price: "1000$",
//     description: "product",
//     imageSrc: "./images/ip16.jpeg",
//   },
//   {
//     name: "iPad",
//     price: "1299$",
//     description: "product",
//     imageSrc: "./images/ipad.jpeg",
//   },
//   {
//     name: "MacBook",
//     price: "1600$",
//     description: "product",
//     imageSrc: "./images/macbook.jpeg",
//   },
//   {
//     name: "Airpods",
//     price: "249$",
//     description: "product",
//     imageSrc: "./images/airpods.jpeg",
//   },
// ];

// products.map((product) => {
//   const divSec = document.createElement("div");
//   divSec.setAttribute("class", "card");

//   const imgSec = document.createElement("img");
//   imgSec.src = product.imageSrc;

//   const h2Title = document.createElement(`h2`);
//   h2Title.innerText = product.name;

//   const pSec = document.createElement("p");
//   pSec.innerText = product.description;

//   const price = document.createElement("h3");
//   price.innerText = product.price;

//   price.setAttribute("class", "priceS");
//   divSec.appendChild(h2Title);
//   divSec.appendChild(pSec);
//   divSec.appendChild(imgSec);
//   divSec.appendChild(price);

//   document.getElementById("app").appendChild(divSec);
//   document.querySelector("#p");
// });

// const divSec = document.createElement("div"); --> DIV
// divSec.setAttribute("class", "card");         -->  CLASS="CARD"
//  imgSec.src = product.imageSrc;               --> MAP TAIGAA HOLBOJ OGCH BNA
//  divSec.appendChild(h2Title);                 -->  <DIV> - ENE DOTOR HIIJ BNAL GSN UG - </DIV>
/**/

const data = [
  {
    title: "Ерөнхий сайд Г.Занданшатар КОЙКА-ын ерөнхийлөгчтэй уулзсангүй",
    text: `Монгол Улсын Ерөнхий сайд Г.Занданшатар манай улсад айлчилж буй
              БНСУ-ын Олон улсын хамтын ажиллагааны байгууллага (КОЙКА)-ын
              Ерөнхийлөгч Чан Вон Самтай уулзаж, хоёр талын хамтын ажиллагааны
              талаар санал солилцов.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/08/-26082025-1756171803-1242587371-oyQRbjRqhYaRpziTXxZV.jpg",
    genre: "politics",
    date: "2025-08-26"
  },
  {
    title:
      "Г.Төмөрзаяа: Хүүхдэдээ хааяа зүгээр суух, уйдах, алдах боломж олгож байгаарай",
    text: `Хичээлийн шинэ жил эхлэхэд цөөн хоног үлдлээ. Энэ цаг мөчид дүрэмт хувцас, ном, дэвтрээс эхлээд бэлтгэх, базаах зүйл бишгүй тул эцэг, эхчүүд төдий сурагчид ч бужигнасан өдрүүдийг өнгөрүүлж буй болов уу.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2022/02/-10022022-1644488451-330897989-Tumurzaya2-165547-6891419671.jpeg",
    genre: "politics",
    date: "2025-08-26"
  },
  {
    title:
      "Ирэх сараас түүхий нүүрсний хэрэглээг зогсоож, баяжуулсан нүүрс хэрэглэнэ",
    text: `Нийслэлийн Засаг даргын 2025 оны наймдугаар сарын 1-ний өдрийн захирамжаар нийслэлд түүхий нүүрс хэрэглэхийг бүрэн зогсоож, ахуйн болон аж үйлдвэрлэлийн зориулалтаар баяжуулсан нүүрс хэрэглэх шийдвэр гаргалаа.`,
    imgUrl:
      "https://mongolia.gov.mn/storage/posts/August2025/viber_image_2025-08-25_18-38-12-016.jpg",
    genre: "sports",
    date: "2025-08-26"
  },
  {
    title:
      "Маршалын гүүрнээс “Централ тауэр” хүртэл явган хүний зам шинэчлэлийг IX сарын 1-нд дуусгана",
    text: `Маршалын гүүрнээс “Централ тауэр”-ын уулзвар хүртэлх баруун талын 3.7 км явган хүний замын шинэчлэлийн ажил 82 пайзтай үргэлжилж байна.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/08/334084-25082025-1756113071-1792768380-photo.JPG",
    genre: "sports",
    date: "2025-08-26"
  },
  {
    title:
      "Баруун болон зүүн аймгуудын нутгаар дуу цахилгаантай аадар бороо орж, сэрүүхэн байна",
    text: `Ихэнх нутгаар солигдмол үүлтэй. Баруун аймгуудын нутгийн баруун, төв болон говийн аймгуудын нутгийн зүүн хэсэг, зүүн аймгуудын нутгийн зарим газраар бороо, дуу цахилгаантай аадар бороо орж, сэрүүхэн байна.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/images/ck/2025/08/04/0N2A9807-194929-132573395320250804194949.jpeg",
    genre: "politics",
    date: "2025-08-26"
  },
  {
    title:
      "Үйлдвэрт болон өдөр тутмын амьдралд өргөн хүрээнд ‘бэлэн байдал’ уриалж байна",
    text: `Орон сууцад бусдад төвөг бололгүй тамхи татах хэсэг гэж байхгүй... дам тамхидалтад өртөх нь нийтийн орон сууцны хор гэдгийг сануулж байна.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/images/ck/2025/08/25/Screenshot_2025-08-23_160627-161130-1070011717.jpeg",
    genre: "sports",
    date: "2025-08-26"
  },
  {
    title:
      "Монголын Эдийн Засгийн Форум 2025-ын хүрээнд нээлттэй мэдээлэл хийв",
    text: `16 дахь жилдээ зохион байгуулагдаж буй Монголын Эдийн Засгийн Форум нь Монгол Улсын Засгийн газар, аж ахуйн нэгж, иргэд болон олон улсын хөрөнгө оруулагчидтай уулзан хотност, үр ашигтай төсөл хөтөлбөрүүдийг танилцуулах зорилготой.`,
    imgUrl:
      "https://mgl.gogo.mn/newsn/images/ck/2025/08/25/belcheer-161156-494597799.jpeg",
    genre: "politics",
    date: "2025-08-26"
  },
];

const politicsBtn = document.getElementById("politics-btn");

politicsBtn.addEventListener("click", () => {
  const politicsPosts = data.filter((post) => post.genre == "politics");
  document.getElementById("app").innerHTML = "";
  renderPosts(politicsPosts);
});

const sportsBtn = document.getElementById("sports-btn");

sportsBtn.addEventListener("click", () => {
  const politicsPosts = data.filter((post) => post.genre == "sports");
  document.getElementById("app").innerHTML = "";
  renderPosts(politicsPosts);
});

function renderPosts(postObjects) {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("class", "cards");
  for (const postObject of postObjects) {
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "card");

    const textDiv = document.createElement("div");
    textDiv.setAttribute("class", "descriptions");

    const imgSec = document.createElement("img");
    imgSec.src = postObject.imgUrl;

    const h2title = document.createElement("h3");
    h2title.innerText = postObject.title;

    const dText = document.createElement("p");
    dText.innerText = postObject.text;

    parentDiv.appendChild(childDiv);
    childDiv.appendChild(imgSec);
    childDiv.appendChild(textDiv);
    textDiv.appendChild(h2title);
    textDiv.appendChild(dText);
  }

  document.getElementById("app").appendChild(parentDiv);
}

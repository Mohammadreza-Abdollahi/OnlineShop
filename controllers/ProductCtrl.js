const errMessage = document.getElementById("product-error");
let template = document.getElementById("product-type-template").innerHTML;
let holderBox = document.getElementById("products-holder");
let colorTemplate = document.getElementById("color-template").innerHTML;
let colorHolder = document.getElementById("colors-holder");
let api = new ProductApi();

loadProducts = async (element, type, pageIndex, pageSize, catId) => {
  const typeBtn = document.getElementsByClassName("product-type-btn");
  for (ele of typeBtn) {
    ele.classList.remove("product-type-btn-selected");
  }
  if (element == null) {
    typeBtn != null && undefined
      ? typeBtn[0].classList.add("product-type-btn-selected")
      : console.log("true");
  } else if (element != null) {
    element.classList.add("product-type-btn-selected");
  }
  document.getElementById("product-title").innerText = `${type} Products`;
  switch (type.toLowerCase()) {
    case "new":
      await api.getNewProduct(fillAllData);
      break;
    case "popular":
      await api.getPopularProduct(fillAllData);
      break;
    case "all":
      await api.getAll(pageIndex, pageSize, fillDataScrolling);
      break;
    case "category":
      await api.getByCategoryId(catId, pageIndex, pageSize, fillDataScrolling);
      document.getElementById("product-title").innerText = `${getParamByName(
        "catName"
      )} Products`;

      break;
    default:
      await api.getPopularProduct(fillData);
      break;
  }
};
fillAllData = async (data) => {
  holderBox.innerHTML = "";
  let dataCount = data.length;
  // if (data.length == 0) {
  //   errMessage.style.display = "block";
  // }
  // if (data.length > 0) {
  //   errMessage.style.display = "none";
  // }
  for (let i = 0; i < dataCount; i++) {
    let currentSlide = template;
    currentSlide = currentSlide.replace(/__TITLE__/g, data[i].title);
    currentSlide = currentSlide.replace(
      /__PRICE__/g,
      `${Number(data[i].price).toLocaleString("EN")} $`
    );
    currentSlide = currentSlide.replace(/__IMG__/g, data[i].image);
    currentSlide = currentSlide.replace(/__ID__/g, data[i].id);
    currentSlide = currentSlide.replace(/__DATE__/g, data[i].addDate);
    // let colorCount = data[i].colors.length;
    // for (let cc = 0; cc < colorCount; cc++) {
    // colorHolder.innerHTML = "";
    // debugger;
    // let currentColor = colorTemplate;
    // console.log(`#${data[i].colors[cc].hexValue}`);
    // currentColor = currentColor.replace(
    // "__COLOR__",
    // `#${data[i].colors[cc].hexValue}`
    // );
    // colorHolder.innerHTML += currentColor;
    // }
    holderBox.innerHTML += currentSlide;
  }
  if (holderBox.childElementCount == 0) {
    if(errMessage != null || errMessage != undefined){
      errMessage.style.display = "block";
    }
  } else {
    errMessage.style.display = "none";
  }
};
fillDataScrolling = async (data) => {
  let dataCount = data.length;
  for (let i = 0; i < dataCount; i++) {
    // debugger;
    let currentSlide = template;
    currentSlide = currentSlide.replace(/__TITLE__/g, data[i].title);
    currentSlide = currentSlide.replace(
      /__PRICE__/g,
      `${Number(data[i].price).toLocaleString("EN")} $`
    );
    currentSlide = currentSlide.replace(/__IMG__/g, data[i].image);
    currentSlide = currentSlide.replace(/__ID__/g, data[i].id);
    currentSlide = currentSlide.replace(/__DATE__/g, data[i].addDate);
    // let colorCount = data[i].colors.length;
    // for (let cc = 0; cc < colorCount; cc++) {
    // colorHolder.innerHTML = "";
    // debugger;
    // let currentColor = colorTemplate;
    // console.log(`#${data[i].colors[cc].hexValue}`);
    // currentColor = currentColor.replace(
    // "__COLOR__",
    // `#${data[i].colors[cc].hexValue}`
    // );
    // colorHolder.innerHTML += currentColor;
    // }
    holderBox.innerHTML += currentSlide;
  }
  if (dataCount == 0) {
    stopLoad = true;
  }
  if (holderBox.childElementCount == 0) {
    if(errMessage != null || errMessage != undefined){
      errMessage.style.display = "block";
    }
  } else {
    errMessage.style.display = "none";
  }
};
// defaultProducts = async () => {
//   await loadPopularProducts();
// };
checkError = (data) => {
  alert("Hello");
};

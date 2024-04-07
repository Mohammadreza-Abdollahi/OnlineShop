let template = document.getElementById("product-type-template").innerHTML;
let holderBox = document.getElementById("products-holder");
let colorTemplate = document.getElementById("color-template").innerHTML;
let colorHolder = document.getElementById("colors-holder");
let api = new ProductApi();
loadProducts = async (element, type) => {
  const typeBtn = document.getElementsByClassName("product-type-btn");
  for (ele of typeBtn) {
    ele.classList.remove("product-type-btn-selected");
  }
  if (element == null) {
    typeBtn[0].classList.add("product-type-btn-selected");
  } else if (element != null) {
    element.classList.add("product-type-btn-selected");
  }
  document.getElementById("product-title").innerText = `${type} Products`;
  switch (type.toLowerCase()) {
    case "new":
      await api.getNewProduct(fillData);
      break;
    case "popular":
      await api.getPopularProduct(fillData);
      break;
    default:
      await api.getPopularProduct(fillData);
      break;
  }
};
fillData = async (data) => {
  console.log(data);
  holderBox.innerHTML = "";
  let slideCount = data.length;
  for (let i = 0; i < slideCount; i++) {
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
    let colorCount = data[i].colors.length;
    for (let cc = 0; cc < colorCount; cc++) {
      // colorHolder.innerHTML = "";
      // debugger;
      let currentColor = colorTemplate;
      console.log(`#${data[i].colors[cc].hexValue}`);
      currentColor = currentColor.replace(
        "__COLOR__",
        `#${data[i].colors[cc].hexValue}`
      );
      colorHolder.innerHTML += currentColor;
    }
    holderBox.innerHTML += currentSlide;
  }
};
// defaultProducts = async () => {
//   await loadPopularProducts();
// };

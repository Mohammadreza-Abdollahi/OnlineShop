let selectedColor = null;
let selectedSize = null;

const api = new ProductApi();
let colorTemplate = document.getElementById("color-template").innerHTML;
let colorHolder = document.getElementById("colors-holder");
let sizeTemplate = document.getElementById("size-template").innerHTML;
let sizeHolder = document.getElementById("size-holder");

loadProductPage = async () => {
  let id = getParamByName("id");
  await api.getById(id, (data) => {
    let myData = data[0];
    document.getElementById("product-img").src = myData.image;
    document.getElementById("title").innerText = myData.title;
    for (let index = 0; index < myData.colors.length; index++) {
      currentItem = colorTemplate;
      currentItem = currentItem.replace(
        /__HEX__/g,
        myData.colors[index].hexValue
      );
      currentItem = currentItem.replace(
        /__TITLE__/g,
        myData.colors[index].title
      );
      currentItem = currentItem.replace(/__ID__/g, myData.colors[index].id);
      colorHolder.innerHTML += currentItem;
    }
    for (let index = 0; index < myData.sizes.length; index++) {
      currentItem = sizeTemplate;
      currentItem = currentItem.replace(
        /__TITLE__/g,
        myData.sizes[index].title
      );
      currentItem = currentItem.replace(/__ID__/g, myData.sizes[index].id);
      sizeHolder.innerHTML += currentItem;
    }
    document.getElementById(
      "cat-link"
    ).href = `products.html?catId=${myData.category.id}&catName=${myData.category.title}`;
    document.getElementById("cat-title").innerText = myData.category.title;
    document.getElementById("description").innerText = myData.description;
  });
};
changeColor = (ele, id, title) => {
let colorItems = document.getElementsByClassName("color-selected");
  for (let index = 0; index < colorItems.length; index++) {
    colorItems[0].classList.remove("color-selected");
  }
  ele.classList.add("color-selected");
  selectedColor = {
    id : id,
    title : title
  }
};
changeSize = (ele, id, title) => {
let sizeItems = document.getElementsByClassName("size-selected");
  for (let index = 0; index < sizeItems.length; index++) {
    sizeItems[0].classList.remove("size-selected");
  }
  ele.classList.add("size-selected");
  selectedSize = {
    id : id,
    title : title
  }
};

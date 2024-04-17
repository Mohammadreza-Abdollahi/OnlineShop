const api = new BlogApi();

loadProductPage = async () => {
  let id = getParamByName("id");
  await api.getById(id, (data) => {
    let myData = data[0];
    let currentDate = myData.addDate;
    let stringDate = dateConversion(currentDate);
    // document.getElementById("blog-img").src = myData.image;
    document.getElementById("title").innerText = myData.title;
    document.getElementById("sub-title").innerText = myData.subTitle;
    document.getElementById("description").innerText = myData.description;
    document.getElementById("add-date").innerText = stringDate;
  });
};
changeColor = (ele, id, title) => {
  let colorItems = document.getElementsByClassName("color-selected");
  for (let index = 0; index < colorItems.length; index++) {
    colorItems[0].classList.remove("color-selected");
  }
  ele.classList.add("color-selected");
  selectedColor = {
    id: id,
    title: title,
  };
};
changeSize = (ele, id, title) => {
  let sizeItems = document.getElementsByClassName("size-selected");
  for (let index = 0; index < sizeItems.length; index++) {
    sizeItems[0].classList.remove("size-selected");
  }
  ele.classList.add("size-selected");
  selectedSize = {
    id: id,
    title: title,
  };
};

loadCategory = async () => {
  const template = document.getElementById("category-template").innerHTML;
  const holderBox = document.getElementById("category-holder");
  let slider = new CategoryApi();
  await slider.getAll((data) => {
    let slideCount = data.length;
    for (let i = 0; i < slideCount; i++) {
      let currentSlide = template;
      currentSlide = currentSlide.replace(/__TITLE__/g, data[i].title);
      currentSlide = currentSlide.replace(/__IMG__/g, data[i].image);
      currentSlide = currentSlide.replace(/__ID__/g, data[i].id);
      holderBox.innerHTML += currentSlide;
    }
  });
};

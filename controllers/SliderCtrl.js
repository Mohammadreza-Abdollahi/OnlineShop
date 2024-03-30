loadSlider = async () => {
  const slideTemplate = document.getElementById("slide-template").innerHTML;
  const slideBox = document.getElementById("slides-box");
  let slider = new Slider();
  await slider.getAll((data) => {
    // debugger;
    let slideCount = data.length;
    for (let i = 0; i < slideCount; i++) {
      let currentSlide = slideTemplate;
      currentSlide = currentSlide.replace(/__TITLE__/g, data[i].title);
      currentSlide = currentSlide.replace("__CAPTION__", data[i].subTitle);
      currentSlide = currentSlide.replace("__IMG__", data[i].image);
      currentSlide = currentSlide.replace("__LINK__", data[i].link);
      slideBox.innerHTML += currentSlide;
    }
    prepareSlider();
  });
};
prepareSlider = () => {
  $(".slideshow").slideshowPlugin({
    effect: "sliding",
    slideSpeed: 800,
    ratio: "keep",
  });
  // Typing Text
  var content = $(".copy-title").text();

  var ele = "<span>" + content.split("").join("</span><span>") + "</span>";

  $(ele)
    .hide()
    .appendTo(".main-title")
    .each(function (i) {
      $(this)
        .delay(100 * i)
        .css({
          display: "inline",
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    });
};

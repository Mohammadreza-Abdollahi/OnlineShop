let pageName = getParamByName("pageName");
console.log(pageName);
switch (pageName) {
  case "home":
    document.getElementById("home-page").classList.add("nav-item-active");
    break;
  case "products":
    document.getElementById("products-page").classList.add("nav-item-active");
    break;
  case "blog":
    document.getElementById("blog-page").classList.add("nav-item-active");
    break;
  case "about":
    document.getElementById("about-page").classList.add("nav-item-active");
    break;

  default:
    break;
}

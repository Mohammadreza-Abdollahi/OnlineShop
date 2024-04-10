const pageSize = 6;
let pageIndex = 0;
var stopLoad = false;

window.onload = async () => {
  await loadCategory();
  await loadProducts(null, "All", pageIndex, pageSize);
};
window.onscroll = async () => {
  let lastElement =
    document.getElementById("products-holder").lastElementChild.scrollHeight;
  if (window.scrollY > lastElement + 300 && !stopLoad) {
    console.log("true");
    await loadProducts(null, "All", ++pageIndex, pageSize);
  }
};

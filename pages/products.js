const pageSize = 6;
let pageIndex = 0;
var stopLoad = false;

window.onload = async () => {
  document.getElementById("loading").style.display = "none"
  await loadCategory();
  await checkCategory();
};
window.onscroll = async () => {
  let lastElement =
    document.getElementById("products-holder").lastElementChild.scrollHeight;
  if (window.scrollY > lastElement && !stopLoad) {
    ++pageIndex;
    await checkCategory();
  }
};
checkCategory = async () => {
  let catId = getParamByName("catId");
  if (catId == null || catId == undefined) {
    await loadProducts(null, "All", pageIndex, pageSize);
  } else {
    await loadProducts(null, "Category", pageIndex, pageSize, catId);
  }
};

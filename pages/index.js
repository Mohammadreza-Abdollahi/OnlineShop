window.onload = async () => {
  document.getElementById("loading").style.display = "none"
  await loadSlider();
  await loadCategory();
  await loadProducts(null, "Popular");
};

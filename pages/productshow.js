window.onload = async () => {
  document.getElementById("loading").style.display = "none"
  await loadProductPage();
};
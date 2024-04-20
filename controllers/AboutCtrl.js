let api = new ContentApi();
loadContent = async () => {
  let data = await api.getAll((data) => {
    let content = data;
    for (let index = 0; index < content.length; index++) {
        if(content[index].title == "about-us"){
          document.getElementById("about-par").innerText = content[index].description;
        }
    }
  });
};
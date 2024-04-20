const api = new BlogApi();

loadBlogShow = async () => {
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
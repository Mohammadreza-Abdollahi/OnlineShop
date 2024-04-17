let api = new BlogApi();
const blogHolder = document.getElementById("blog-holder");
const blogTemplate = document.getElementById("blog-template");
loadBlog = async () => {
  let data = await api.getAll((data) => {
    let blogs = data;
    for (let index = 0; index < blogs.length; index++) {
        let currentDate = blogs[index].addDate;
        let stringDate = dateConversion(currentDate);
        console.log(stringDate)
      let currentTemplate = blogTemplate.innerHTML;
      currentTemplate = currentTemplate.replace(/__ID__/g, blogs[index].id);
      currentTemplate = currentTemplate.replace(/__IMG__/g, blogs[index].image);
      currentTemplate = currentTemplate.replace(
        /__TITLE__/g,
        blogs[index].title
      );
      currentTemplate = currentTemplate.replace(
        /__DES__/g,
        blogs[index].subTitle
      );
      currentTemplate = currentTemplate.replace(/__DATE__/g, stringDate);
      blogHolder.innerHTML += currentTemplate;
      console.log(blogs[index]);
    }
    
  });
};
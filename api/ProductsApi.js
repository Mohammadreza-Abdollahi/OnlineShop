class ProductApi extends BaseApi {
  getAll = async (onSuccess) => {
    this.getData("product", onSuccess);
  };
  getById = async (id, onSuccess) => {
    this.getData(`product/${id}`, onSuccess);
  };
  getByCategoryId = async (id, onSuccess) => {
    this.getData(`product/cat/${id}`, onSuccess);
  };
  getNewProduct = async (onSuccess) => {
    this.getData(`product/new`, onSuccess);
  };
  getPopularProduct = async (onSuccess) => {
    this.getData(`product/popular`, onSuccess);
  };
}

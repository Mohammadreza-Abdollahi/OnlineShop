class ProductApi extends BaseApi {
  getAll = async (pageIndex, pageSize, onSuccess) => {
    this.getData(
      `product?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      onSuccess
    );
  };
  getById = async (id, onSuccess) => {
    this.getData(`product/${id}`, onSuccess);
  };
  getByCategoryId = async (id, pageIndex, pageSize, onSuccess) => {
    this.getData(
      `product/cat/${id}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      onSuccess
    );
  };
  getNewProduct = async (onSuccess) => {
    this.getData(`product/new`, onSuccess);
  };
  getPopularProduct = async (onSuccess) => {
    this.getData(`product/popular`, onSuccess);
  };
}

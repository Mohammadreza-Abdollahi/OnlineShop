class CategoryApi extends BaseApi {
  getAll = async (onSuccess) => {
    this.getData("productCategory", onSuccess);
  };
  getById = async (id, onSuccess) => {
    this.getData( `productCategory/${id}` , onSuccess);
  };
}

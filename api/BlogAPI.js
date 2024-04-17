class BlogApi extends BaseApi {
  getAll = async (onSuccess) => {
    this.getData(`blog`, onSuccess);
  };
  getById = async (id, onSuccess) => {
    this.getData(`blog/${id}`, onSuccess);
  };
}

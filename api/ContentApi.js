class ContentApi extends BaseApi {
  getAll = async (onSuccess) => {
    this.getData(`content`, onSuccess);
  };
  getById = async (id, onSuccess) => {
    this.getData(`content/${id}`, onSuccess);
  };
}

class Slider extends BaseApi {
  getAll = async (onSuccess) => {
    this.getData("slider", onSuccess);
  };
  getById = async (id, onSuccess) => {
    this.getData( `slider/${id}` , onSuccess);
  };
}

class BaseApi {
  getData = async (suffix, success) => {
    let url = ApiAddress.getAddress(suffix);
    let response = await fetch(url);
    if (response.status == 200) {
      this.onSuccess(response, success);
    } else {
      this.onError();
    }
  };
  onSuccess = async (response, callback) => {
    let json = await response.json();
    if (json.status == "OK") {
      callback(json.data);
    } else {
      this.onError();
    }
  };
  onError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  };
}

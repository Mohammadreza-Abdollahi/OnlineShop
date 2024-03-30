class ApiAddress {
  static url = "https://onlineshop.holosen.net:9090/api/";
  static getAddress = (suffix) => `${this.url}${suffix}`;
}

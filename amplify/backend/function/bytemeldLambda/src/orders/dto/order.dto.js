class OrderDTO {
  constructor (data) {
    this.typeService = data.typeService;
    this.fullName = data.fullName;
    this.email = data.email;
    this.details = data.details;
    this.services = data.services;
    this.budget = data.budget;
  }

  typeService
  fullName
  email
  details
  services
  budget
}

module.exports = {
  OrderDTO,
};

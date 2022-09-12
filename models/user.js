const {faker} = require("@faker-js/faker");
class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            country: faker.address.country(),
            state: faker.address.state(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode(),
        }

    }
}

module.exports = Company;
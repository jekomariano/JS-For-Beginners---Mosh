const address = {
  street: "Dona Aurora",
  city: "Bacoor",
  zipCode: 4102,
};

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const factoryAddress = createAddress("ABC", "DEF", 1234);
console.log(factoryAddress);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const constructorAddress = new Address("TEST", "test", 1234);
console.log(constructorAddress);
// ============= ANSWER FROM TUTORIALS ============ \\

// same as my answer

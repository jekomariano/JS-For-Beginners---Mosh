function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("TEST", "test", 1234);
const address2 = new Address("TEST", "test", 1234);

console.log(areEqual(address1, address2));

function areEqual(address1, address2) {
  for (let key in address1) {
    if (address1[key] !== address2[key]) {
      return false;
    }
  }
  return true;
}

console.log(areSame(address1, address2));
function areSame(address1, address2) {
  return address1 === address2;
}
// ============= ANSWER FROM TUTORIALS ============ \\

function areEqualAns(address1, address2) {
  return (
    address1.street === address2.steet &&
    address1.city === address2.city &&
    address2.zipCode === address2.zipCode
  );
}

function areSameAns(address1, address2) {
  return address1 === address2;
}

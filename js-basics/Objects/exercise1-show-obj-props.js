const address = {
  street: "Dona Aurora",
  city: "Bacoor",
  zipCode: 4102,
};

showAddress(address);

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

// ============= ANSWER FROM TUTORIALS ============ \\
const addressAns = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddressAns(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddressAns(addressAns);

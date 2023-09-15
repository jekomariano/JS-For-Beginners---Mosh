const testObject = {
  name: "jhan",
  year: 2023,
  rating: 1,
  isTesting: true,
};

showProps(testObject);

function showProps(object) {
  for (let prop in object) {
    const value = object[prop];
    if (typeof value === "string") console.log(prop, value);
  }
}

// ============= ANSWER FROM TUTORIALS ============ \\

function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === "string") console.log(prop, object[key]);
  }
}

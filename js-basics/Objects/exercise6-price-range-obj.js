function PriceRange(display, name, startRange, endRange) {
  this.display = display;
  this.name = name;
  this.startRange = startRange;
  this.endRange = endRange;
}

let priceRanges = [
  new PriceRange("$", "Inexpensie", 0, 100),
  new PriceRange("$$", "Moderate", 101, 200),
  new PriceRange("$$$", "Pricey", 201, 300),
  new PriceRange("$$$$", "Expensive", 301, 1000),
];
// ============= ANSWER FROM TUTORIALS ============ \\
let priceRangesAns = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$$", tooltip: "Pricey", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$$$", tooltip: "Expensive", minPerPerson: 0, maxPerPerson: 10 },
];

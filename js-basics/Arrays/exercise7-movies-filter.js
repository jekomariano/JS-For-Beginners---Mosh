const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = filterMovies(movies, 2018, 4);
console.log(titles);
function filterMovies(movies, year, rating) {
  return movies
    .filter((movie) => movie.year === year && movie.rating >= rating)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((movie) => movie.title);
}
// ============= ANSWER FROM TUTORIALS ============ \\
// same as my answer

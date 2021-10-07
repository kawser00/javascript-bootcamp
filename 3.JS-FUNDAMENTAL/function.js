// Problem 1
//==================================================================

function profileWithDynamicData(name, age, profession, favorite) {
  return `I am ${name}. I am ${age}. I am a ${profession}. I love ${favorite}.`;
}

console.log(
  profileWithDynamicData("Kawser Ahmed", 22, "web developer", '"Javascript"')
); // I am Kawser Ahmed. I am 22. I am a web developer. I love "Javascript".

// Problem 2
//==================================================================

const movieDB = [
  { id: 1, name: "Movie 1", rating: 4, category: "Drama" },
  { id: 2, name: "Movie 2", rating: 8, category: "Action" },
  { id: 3, name: "Movie 3", rating: 5, category: "Horror" },
];

function movieReview(movieDB) {
  const movie = movieDB[1];
  return `The ${movie.name} got ${movie.rating} rating under ${movie.category} category.`;
}

const movieDetails = movieReview(movieDB);
console.log(movieDetails); // The Movie 2 got 8 rating under Action category.


 


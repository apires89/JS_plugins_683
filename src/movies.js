const results = document.querySelector("#results");

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`).then((response) => {
    response.json()
      .then((data) => {
        //response
        console.log(data);
        //array
        console.log(data.Search);
        data.Search.forEach((result) => {
          //define a movie tag
          const movieTag = `<li class="list-inline-item">
      <img src="${result.Poster}" alt="">
      <p>${result.Title}</p>
      </li>`;
          // add it to the end of the ul
          results.insertAdjacentHTML("beforeend", movieTag)
        })
      })
    // Do something once HTTP response is received

  });
}

export { searchMovies };

import { searchMovies } from "./movies";
import { initSortable } from "./plugins/init_sortable";

//STIMULUS CONFIG
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";


const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

///

const results = document.querySelector("#results");
const form = document.querySelector('#search-movies');

searchMovies('harry potter');
initSortable();

form.addEventListener("submit", (event) => {
  /// prevents form from doing a new HTTP request
  event.preventDefault();
  const input = document.querySelector("#query");
  results.innerHTML = '';
  searchMovies(input.value);
})


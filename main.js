import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const btn = document.querySelector("#btn");
const movie = document.querySelector("#movie");
btn.addEventListener("click", getMovie);

function getMovie() {
    const id = Math.floor(Math.random() * 1000) + 1

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c26582397f869f7c594a6709a287934a&${language}`

    axios.get(url)
    .then((response) => {
    const data = response.data;    
    
    movie.innerHTML = `
        <div class="container-poster">
            <img class="movie-poster" src ="${IMG_URL + data.poster_path}" alt="Poster do filme">
            <p class="movie-popularity">Nota: ${data.vote_average}</p>
        </div>
        
        <div class="container-description">
            <h3 class="movie-title">${data.title}</h3>
            <p class="movie-description">${data.overview}</p
        </div>
    `    
    })
        .catch(error => {
            movie.innerHTML = `
            <div class="container-poster">
            <img class="movie-poster" src="./assets/poster.png" alt="Computador exibindo código na tela em uma mesa com objetos de estudo." width="12%">
            </div>

            <div id="error-message">
                <h2 class="movie-title">Ops, hoje não é dia de assistir filme. Bora codar! 🚀</h2>
            </div>
            `
    })
}
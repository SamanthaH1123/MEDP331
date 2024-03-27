const infoSearch = document.getElementById("infoSearch");
const infoBtn = document.getElementById("infoBtn");

const baseURL = 'https://api.watchmode.com/v1/';
const api = 'NKj3EkpBd8d7iHizDLuNKuops1JjtbFF8ZOH4lib'

if (infoSearch) {
  infoBtn.addEventListener("click", () => {
    let id = infoSearch.value;

    if (id) {
      let infoURL = `${baseURL}title/${id}/details/?apiKey=${api}`;
      fetch(infoURL)
        .then(data => { return data.json() })
        .then(infoResponse => {
          console.log('Information for Shows and Movies:', infoResponse);
          const infoTitle = infoResponse.title;
          const infoPlot = infoResponse.plot_overview;
          const infoImage = infoResponse.poster;
          const infoGenre = infoResponse.genre_names;
          const infoType = infoResponse.type;
          document.getElementById("info").innerHTML = `<h2>${infoTitle}</h2><img src="${infoImage}" alt="Movie Poster"><p>${infoPlot}</p><p>Genres: ${infoGenre}</p><p>Type: ${infoType}</p>`;
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      console.log('No Response.');
      alert('Please enter a response.');
    }
  })
};

const infoRandom = document.getElementById("infoRandom");

if (infoRandom) {
  infoRandom.addEventListener("click", () => {
    const randomInfoURL = `${baseURL}list-titles/?apiKey=${api}`;
    fetch(randomInfoURL)
      .then(data => { return data.json() })
      .then(infoRandomize => {
        console.log('The site chooses...', infoRandomize);
        if (infoRandomize.hasOwnProperty('titles')) {
          const randomInfoIndex = Math.floor(Math.random() * (infoRandomize.titles.length - 1));
          const randomInfoArray = infoRandomize.titles[randomInfoIndex];
          const randomInfoId = randomInfoArray.id;
          const rInfoURL = `${baseURL}title/${randomInfoId}/details/?apiKey=${api}`;
          fetch(rInfoURL)
            .then(data => { return data.json() })
            .then(rInfoMovie => {
              const rInfoTitle = rInfoMovie.title;
              const rInfoPlot = rInfoMovie.plot_overview;
              const rInfoImage = rInfoMovie.poster;
              const rInfoGenre = rInfoMovie.genre_names;
              const rInfoType = rInfoMovie.type;
              document.getElementById("info").innerHTML = `<h2>${rInfoTitle}</h2><img src="${rInfoImage}" alt="Poster"><p>${rInfoPlot}</p><p>Genres: ${rInfoGenre}</p><p>Type: ${rInfoType}</p>`;
            })
        }
      })
      .catch(error => {
        console.log(error);
      })
  })
};
const sourceSearch = document.getElementById("sourceSearch");
const sourceBtn = document.getElementById("sourceBtn");
const source = document.getElementById("source");

const baseURL = 'https://api.watchmode.com/v1/';
const api = 'NKj3EkpBd8d7iHizDLuNKuops1JjtbFF8ZOH4lib'


if (sourceSearch) {
  sourceSearch.addEventListener('input', () => {
    document.getElementById("source").innerHTML = '';

    sourceBtn.addEventListener("click", () => {
      let name = sourceSearch.value;

      if (name) {
        let sourceURL = `${baseURL}title/${name}/sources/?apiKey=${api}&regions=US`;
        fetch(sourceURL)
          .then(data => { return data.json() })
          .then(sourceResponse => {
            console.log('Sources for Shows and Movies:', sourceResponse);
            let site = `${baseURL}title/${name}/details/?apiKey=${api}`;
            fetch(site)
              .then(data => { return data.json() })
              .then(siteResponse => {
                document.getElementById("title").innerHTML = `Sites to Stream: ${siteResponse.title}`;
                sourceResponse.forEach(app => {
                  const sourceName = app.name;
                  const siteURL = app.web_url;
                  const siteType = app.type;
                  document.getElementById("source").innerHTML += `<h2>Streaming Site: ${sourceName}</h2><p>Source Type: ${siteType}</p><a href="${siteURL}"><button>Click to Watch</button></a><br>`;
                });
              })

          })
          .catch(error => {
            console.log(error)
          })
      }
      else {
        console.log('No response.');
        alert('Please enter an IMDb id.');
      }
    });
  });
}

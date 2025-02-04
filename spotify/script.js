const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists`; // Busca TODOS os artistas
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const filteredResults = data.filter(artist => 
                artist.name.toLowerCase().includes(searchTerm.toLowerCase())
            ); 
            displayResults(filteredResults);
        });
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistImage = document.getElementById('artist-img');
    const artistName = document.getElementById('artist-name');
    
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input',function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
});



//json-server --watch api.artists/artists.json --port 300 <- no terminal para rodar a api fake
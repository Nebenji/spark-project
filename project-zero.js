

let anime = {

    canonicalTitle: '',
    startDate: '',
    episodeCount: '',
    status: '',
    posterImage: '',
    coverImage: '',

};

let data;


//let apiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop';

let apiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=my hero academia';

//let charUrl = 'https://kitsu.io/api/edge/characters?filter[text]=';

let getAnimeUsingAsync = async function(){
    try{
        const response = await fetch(apiUrl);
        data = (await response.json());

        anime = data.data[0].attributes;
        //console.log((await response.json()));
        //console.log(anime);
        updateContent();
    }
    catch (err){
        console.log('Something went wrong!');
        console.log(err);
    }
}

let updateContent = function(){

    console.log(anime);
    
    const title = document.getElementById('anime-name');
    const start = document.getElementById('start-date');
    const episode = document.getElementById('episodes-count');
    const ongoing = document.getElementById('status');
    const cover = document.querySelector('body');
    const poster = document.getElementById('poster-image');

    title.innerText = anime.canonicalTitle;
    start.innerText = anime.startDate;
    episode.innerText = anime.episodeCount;
    ongoing.innerText = anime.status;
    poster.src = anime.posterImage.medium;
    cover.style.backgroundImage = 'url(' + anime.coverImage.large + ')';

}

let searchBox = function(){

    const text = document.getElementById('search-box');
    //console.log(text.value);
    apiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=' + text.value;
    //charUrl = 'https://kitsu.io/api/edge/characters?filter[text]=' + text.value;
    console.log(apiUrl);
    //console.log(charUrl);
    //apiUrl = charUrl;
    getAnimeUsingAsync();
    document.getElementById('search-box').value = '';

}

//document.getElementById('search').addEventListener('onclick', searchBox());

// let request = new XMLHttpRequest();

// request.open('GET', 'https://kitsu.io/api/edge/anime');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();


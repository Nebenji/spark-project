

let anime = {

    titles: '',
    startDate: '',
    episodeCount: '',
    status: '',
    posterImage: '',
    coverImage: '',
    synopsis: '',

};

let chara = {

    canonicalName: '',
    image: '',
    description: '',
    otherNames: '',

};

let data;

let apiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=my hero academia';

let charUrl = 'https://kitsu.io/api/edge/characters?filter[name]=';

let getAnimeUsingAsync = async function(){
    try{
        const response = await fetch(apiUrl);
        data = (await response.json());
        console.log(data);
        anime = data.data[0].attributes;
        console.log(anime);
        updateAnimeContent();
    }
    catch (err){
        console.log('Something went wrong!');
        console.log(err);
    }
}

let getCharUsingAsync = async function(){
    try{
        const response = await fetch(charUrl);
        data = (await response.json());
        console.log(data);
        chara = data.data[0].attributes;
        console.log(chara);
        updateCharaContent();
    }
    catch (err){
        console.log('Something went wrong!');
        console.log(err);
    }
}

let updateAnimeContent = function(){

    console.log(anime);
    
    const title = document.getElementById('anime-name');
    const start = document.getElementById('start-date');
    const episode = document.getElementById('episodes-count');
    const ongoing = document.getElementById('status');
    const cover = document.querySelector('body');
    const poster = document.getElementById('poster-image');
    const summary = document.getElementById('summary');

    title.innerText = anime.titles.en_jp + ' ( ' + anime.titles.ja_jp + ' ) ';
    start.innerText = anime.startDate;
    episode.innerText = anime.episodeCount;
    ongoing.innerText = anime.status;
    poster.src = anime.posterImage.medium;
    cover.style.backgroundImage = 'url(' + anime.coverImage.large + ')';
    summary.innerText = anime.synopsis;

}

let updateCharaContent = function(){

    console.log(chara);
    
    const name = document.getElementById('char-name');
    const cover = document.querySelector('body');
    const poster = document.getElementById('poster-image');
    const describe = document.getElementById('char-info');
    const altName = document.getElementById('other-name');

    name.innerText = chara.canonicalName;
    poster.src = chara.image.original;
    cover.style.backgroundImage = 'url(' + chara.image.original + ')';
    describe.innerHTML = '';
    describe.insertAdjacentHTML('afterbegin', chara.description);
    altName.innerText = chara.otherNames[0];

}

let anisearchBox = function(){

    const text = document.getElementById('search-box');
    apiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=' + text.value;
    getAnimeUsingAsync();
    document.getElementById('search-box').value = '';

}

let charsearchBox = function(){

    const text = document.getElementById('search-box');
    charUrl = 'https://kitsu.io/api/edge/characters?filter[name]=' + text.value;
    getCharUsingAsync();
    document.getElementById('search-box').value = '';

}




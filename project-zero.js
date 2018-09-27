

let anime = {

    canonicalTitle: '',
    startDate: '',
    episodeCount: '',
    status: '',
    posterImage: '',
    coverImage: '',

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

        anime = data.data[0].attributes;
        //console.log((await response.json()));
        //console.log(anime);
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

        chara = data.data[0].attributes;
        //console.log(data);
        //console.log(chara);
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

    title.innerText = anime.canonicalTitle;
    start.innerText = anime.startDate;
    episode.innerText = anime.episodeCount;
    ongoing.innerText = anime.status;
    poster.src = anime.posterImage.medium;
    cover.style.backgroundImage = 'url(' + anime.coverImage.large + ')';

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
    describe.innerText = chara.description;
    altName.innerText = chara.otherNames[0];

}

let searchBox = function(){

    const text = document.getElementById('search-box');
    //console.log(text.value);
    apiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=' + text.value;
    //console.log(apiUrl);
    getAnimeUsingAsync();
    document.getElementById('search-box').value = '';

}

let charsearchBox = function(){

    const text = document.getElementById('search-box');
    //console.log(text.value);
    charUrl = 'https://kitsu.io/api/edge/characters?filter[name]=' + text.value;
    //console.log(charUrl);
    getCharUsingAsync();
    document.getElementById('search-box').value = '';

}

//document.getElementById('search').addEventListener('onclick', searchBox());



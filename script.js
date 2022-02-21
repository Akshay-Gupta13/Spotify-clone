console.log("Welcome to Spotify");
// initialize the variable 
let songsIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementById('songItems')

let songs = [
    { songsName: "Faded", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songsName: "Alone", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songsName: "On my way", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songsName: "Stay", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songsName: "Bad habits", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songsName: "Spectre", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songsName: "Sorry", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songsName: "Closer", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songsName: "Attention", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songsName: "See you again", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;


})

//   audioElement.play();
// A pause and play click
// a new event created
masterPlay.addEventListener('click', () => {
    if (audioElement.pause || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classlist.remove('fa-play-circle');
        masterPlay.classlist.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classlist.remove('fa-pause-circle');
        masterPlay.classlist.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', () => {

    // update seekbar
    progress = parseInt(audioElement.currentTime / audioElement.duration) * 100
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classlist.remove('fa-pause-circle');
        element.classlist.add('fa-play-circle');
    })
}

array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", () => {
        console.log(e.target);
        songindex = parseInt(e.target.id)
        e.target.classlist.remove('fa-play-circle');
        e.target.classlist.add('fa-pause-circle');
        audioElement.src = "songs/${index+1}.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classlist.remove('fa-play-circle');
        masterPlay.classlist.add('fa-pause-circle');
    })
})
document.getElementById("next").addEventListener;{
    'click',( () => {
        if (songsIndex >= 9) {
            songsIndex = 0;
        }
        else {
            songsIndex += 1; ement.src = "songs/${index+1}.mp3";
            audioElement.currentTime
        }
        audioEl = 0;
        audioElement.play();
        masterPlay.classlist.remove('fa-play-circle');
        masterPlay.classlist.add('fa-pause-circle');

    })

    var test = document.getElementById('previous')
    test.addEventListener;{
        'click', (() => {
            if (songsIndex >= 0) {
                songsIndex = 0;
            }
            else {
                songsIndex += 1;
            }
            audioElement.src = "songs/${index+1}.mp3";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classlist.remove('fa-play-circle');
            masterPlay.classlist.add('fa-pause-circle');

        })
    }}
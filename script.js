const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
    { id: 0, title: "Yam Yam", artist: "No Vacation", duration: "03:36", src: "./Assets/Songs/Yam-Yam.mp3" },
    { id: 1, title: "Napster", artist: "Jean Dawson", duration: "02:36", src: "./Assets/Songs/Napster.mp3" },
    { id: 2, title: "Playground", artist: "Steve-Lacy", duration: "03:33", src: "./Assets/Songs/Playground.mp3" },
    { id: 3, title: "Redbone", artist: "Childish-Gambino", duration: "05:27", src: "./Assets/Songs/Redbone.mp3" },
    { id: 4, title: "See You Again", artist: "Tyler, The Creator", duration: "03:00", src: "./Assets/Songs/See You Again.mp3" },
    { id: 5, title: "Nights", artist: "Frank-Ocean", duration: "05:07", src: "./Assets/Songs/Nights.mp3" },
    { id: 6, title: "Pursuit Of Happiness", artist: "Kid-Cudi", duration: "04:55", src: "/Music-Player/Assets/Songs/Pursuit Of Happiness nightmare.mp3" },
    { id: 7, title: "Telephones", artist: "Vacations", duration: "03:32", src: "./Assets/Songs/Telephones.mp3" },
    { id: 8, title: "Valentina", artist: "Daniel Caesar", duration: "02:34", src: "./Assets/Songs/Valentina.mp3" },
    { id: 9, title: "Yes I'm Changing", artist: "Tame Impala", duration: "04:31", src: "./Assets/Songs/Yes I_m Changing.mp3" },
];

const audio = new Audio();
let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    if (!song) return;

    audio.src = song.src;
    audio.title = song.title;
    audio.currentTime = (userData?.currentSong?.id === song.id) ? userData.songCurrentTime : 0;

    userData.currentSong = song;
    playButton.classList.add("playing");
    audio.play();
};

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;
    playButton.classList.remove("playing");
    audio.pause();
};

const renderSongs = (array) => {
    const songsHTML = array.map((song) => {
        return `
        <li id="song-${song.id}" class="playlist-song">
            <button class="playlist-song-info" onclick="playSong(${song.id})">
                <span class="playlist-song-title">${song.title}</span>
                <span class="playlist-song-artist">${song.artist}</span>
                <span class="playlist-song-duration">${song.duration}</span>
            </button>
            <button class="playlist-song-delete" aria-label="Delete ${song.title}">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
                </svg>
            </button>
        </li>`;
    }).join("");
    playlistSongs.innerHTML = songsHTML;
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1] || userData.songs[0]; // Loop to first song
        playSong(nextSong.id);
    }
};

const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return;
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong = userData?.songs[currentSongIndex - 1] || userData.songs[userData.songs.length - 1]; // Loop to last song
        playSong(previousSong.id);
    }
};

const sortSongs = () => {
    userData?.songs.sort((a, b) => a.title.localeCompare(b.title));
    return userData?.songs;
};

playButton.addEventListener("click", () => {
    if (userData.currentSong === null) {
        playSong(userData.songs[0].id);
    } else {
        audio.paused ? audio.play() : pauseSong();
    }
});

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);

renderSongs(sortSongs());

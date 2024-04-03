// Started off by making these variables
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

// Took these 3 variables then dropped them here and made changes to them,
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

// started by creating an empty array
//this array will be used to store all the songs
const allSongs = [
    //inside this array several objects, properties and values were created. 
    {
        id: 0,
        title: "Yam Yam",
        artist: "No Vacation",
        duration: "03:36",
        src: "Music-Player/Assets/Songs/Yam-Yam.mp3",
    },

    {
        id: 1,
        title: "Napster",
        artist: "Jean Dawson",
        duration: "02:36",
        src: "Music-Player/Assets/Songs/Napster.mp3",
    },

    {
        id: 2,
        title: "Playground",
        artist: "Steve-Lacy",
        duration: "03:33",
        src: "Music-Player/Assets/Songs/Playground.mp3",
    },

    {
        id: 3,
        title: "Redbone",
        artist: "Childish-Gambino",
        duration: "05:27",
        src: "Music-Player/Assets/Songs/Redbone.mp3",
    },

    {
        id: 4,
        title: "See You Again",
        artist: "Tyler, The Creator",
        duration: "03:00",
        src: "Music-Player/Assets/Songs/Telephones.mp3",
    },

    {
        id: 5,
        title: "Nights",
        artist: "Frank-Ocean",
        duration: "05:07",
        src: "Music-Player/Assets/Songs/Nights.mp3",
    },

    {
        id: 6,
        title: "Pursuit Of Happiness",
        artist: "Kid-Cudi",
        duration: "04:55",
        src: "Music-Player/Assets/Songs/Pursuit Of Happiness nightmare.mp3",
    },

    {
        id: 7,
        title: "Telephones",
        artist: "Vacations",
        duration: "03:32",
        src: "Music-Player/Assets/Songs/Telephones.mp3",
    },

    {
        id: 8,
        title: "Valentina",
        artist: "Daniel Caesar",
        duration: "02:34",
        src: "Music-Player/Assets/Songs/Valentina.mp3",
    },

    {
        id: 9,
        title: "Yes i'm Changing",
        artist: "Tame Impala",
        duration: "04:31",
        src: "Music-Player/Assets/Songs/Yes I_m Changing.mp3",
    },
];

const audio = newAudio(); //The Audio() constructor creates and returns a new HTMLAudioElement which can be either attached to a document for the user to interact with and/or listen to, or can be used offscreen to manage and play audio.
let userData = {
    // The music player should be keeping track of the songs,
    //The current song playing,
    //The current song time,
    //Therefore this object was created


    songs: [...allSongs],// This spread array allows me to copy all the elements from one array to another.
    //It can be also used to concatenate through multiple array's into one. 

//To handle the current song's information and tracking its playback time
    currentSong: null, // so what this is for is the default state of the play button if there were a bunch of songs in the playlist, now it is null because there is nothing playing and the current time is zero so it starts at the beginning so when we click shuffle or next it goes to zero
    songCurrentTime: 0 // so what this is for is the default state of the play button if there were a bunch of songs in the playlist, now it is null because there is nothing playing and the current time is zero so it starts at the beginning so when we click shuffle or next it goes to zero
};

//Now there should be a way to display the songs in the UI
//Using an arrow function,
//An arrow function is a shorter and more concise way to write functions in JS
//It is a function expression, which is a function assigned to a variable,
//If the function body consists of a single expression you can omit the curly braces and return keyword,
//This is called an (implicit return). eg: const exampleArrowFunction = (param) => param;
const renderSongs = array => {
    const songsHTML = array.map((song) => {
        return `<li id="song-${song.id}" class="playlist-song"></li>
        <button class="playlist-song-info"><span class="playlist-song-title">${song.title}</span>
        <span class="playlist-song-artist">${song.artist}</span>
        <span class="playlist-song-duration">${song.duration}</span>
        <button class="playlist-song-delete" aria-label ="Delete ${song.title}">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg></button>
        </button>`;//what this does is that it interpolates all the elements that are responsible for displaying the song details
    }).join(""); //the join() method is used for concatenating all the elements of an array in to a simple string that's what happened here //The map() method is used to iterate through an array and returns a new array,
    //This is helpful when creating a new array based on the values of an existing array.
    playlistSongs.innerHTML = songsHTML
};
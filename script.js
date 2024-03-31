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

const renderSongs = array => {};
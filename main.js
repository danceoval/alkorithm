//Alkorithm

const songs = {
  'Killing Spree' : 182,
  'Watching the War' :333,
  'Flotsam and Jetsam' : 197,
  'Kicked and Punched, Rounded Up, and Stunned' : 280,
  'Knucklehead'  : 155,
  'The Beast of Bolsover' : 164,
  'Popular Music': 95,
  'Climb That Ladder': 104,
  'Red at Heart': 323,
  'Serpentine': 243,
  'Like a Cold War': 396,
};
const titles = Object.keys(songs);
let runtime = 0;
let buffer = 900;
let permutations = [];

for(let song in songs) {
  runtime += songs[song]
}
const half = runtime / 2;
console.log(`Runtime: ${ runtime}, Half: ${half}`);

const getRandomSong = (songsArr) => {
  let random = Math.floor(Math.random() * songsArr.length);
  let title = songsArr[random];
  let track = songs[title]
  return {
    title,
    track
  }
};

const assembleAlbum = () => {
  const album = {
    'A-side' : {tracks : [], length : 0},  
    'B-side' : {tracks : [], length : 0}, 
  };
  let sideLength = 0;
  let addToA = true;
  let availSongs = titles.slice();
  while (sideLength < half + buffer ) {
    let randomSong = getRandomSong(availSongs);
    let theTitle = randomSong.title;
    let theTrack = randomSong.track;
    let theSide = addToA ? album['A-side'] : album['B-side'];
    theSide.tracks.push(randomSong);
    theSide.length += randomSong.track;
    addToA = !addToA;
    let index = availSongs.indexOf(theTitle);
    availSongs.splice(index, 1);
    sideLength += randomSong.track;
  }
  if(availSongs.length === 0) {
    permutations.push(album);  
  }
  return;
}

for(let i = 0; i < 1000; i++) {
  assembleAlbum();  
}

console.log("DONE VVVVV")
console.log(permutations)

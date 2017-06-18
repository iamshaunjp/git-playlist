
console.log('do your worst');

function Track(song, artist, album, year){
  this.song = song;
  this. artist = artist;
  this.album = album;
  this.year = year;
}

const track1 = new Track("Redbone", "Childish Gambino", "Awaken, My Love!", "2017");
const track2 = new Track("Do I Wanna Know", "Arctic Monkeys", "AM", "2013");
const track3 = new Track("The Less I Know The Better", "Tame Impala", "Currents", "2015");

const Tracks = [
  track1,
  track2,
  track3
];

Tracks.map(track => {
  console.log("----------------------");
  console.log("\nSong: " + track.song);
  console.log("\nArtist: " + track.artist);
  console.log("\nAlbum: " + track.album + ", Year: " + track.year);
  console.log("----------------------");
});

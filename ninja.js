console.log("SY made some change here...")
console.log("hi this is nice tutorial....");
console.log('do your worst');
console.log( 'first! great tutorial!' );
console.log( "I'll be a hardcore programmer!!! Thanks Shaun! From PeterAMD" );
console.log("Amazing tutorial! Love from Turkey,AnılSansak was here");
console.log('Indeed. Great tutorial as always! Thanks Shaun, from Pieter.');
console.log("Thanks for NetNinja's tutorials! Thanks from BaalWu in Taiwan");
console.log("Thanks Shaun for the tutorials - Navaneeth")
console.log("I want to say thank you to all my fans! JK")
console.log("Very good videos. Good job! :) ~Christoph")
console.log("The net ninjs, Shaun, the best shinobi, woo");
console.log("What's up guys, this is my first pull request! Thanks Shaun!");
console.log("Great tutorial, Thanks a lot! msamancioglu");
console.log("Hey Shaun! I really like the tutorial, thanks alot. anthonylan");
console.log("Thank you");

function Track(song, artist, album, year, starReview){
  this.song = song;
  this. artist = artist;
  this.album = album;
  this.year = year;
  this.starReview = starReview;
}

// Just add your favorite track of all time to the list

const track1 = new Track("Redbone", "Childish Gambino", "Awaken, My Love!", "2017", 5);
const track2 = new Track("Do I Wanna Know", "Arctic Monkeys", "AM", "2013", 3);
const track3 = new Track("The Less I Know The Better", "Tame Impala", "Currents", "2015", 10);
const track4 = new Track("Blue Monday", "New Order", "NOT ON Power, Corruption & Lies", "1983", 7);

const Tracks = [
  track1,
  track2,
  track3,
  track4
];

Tracks.map(track => {
  console.log("----------------------");
  console.log("\nSong: " + track.song);
  console.log("\nArtist: " + track.artist);
  console.log("\nAlbum: " + track.album + ", Year: " + track.year);
  console.log("\nStar rating: " + track.starReview);
  console.log("----------------------");
});

// Ninjas are cool and awesome!

console.log('%cDo your worst!\n', 'background: red; color: white; display: block; padding: 3px;');
console.log('%cFork it on GitHub: https://github.com/iamshaunjp/git-playlist.git', 'background: #0057A0; color: white; display: block; padding: 3px;');
console.log(`%cThis is the best youtube channel` , 'background-color : blue; color : white;');

function thanks(){
  var div = document.getElementById('div01');
  if (div.style.display == "none")
    {div.style.display = "block"}
  else {div.style.display = "none"};
}
button01.addEventListener('click', thanks);

console.log('do your worst');
console.log('first! great tutorial!');
console.log("I'll be a hardcore programmer!!! Thanks Shaun! From PeterAMD");
console.log("Amazing tutorial! Love from Turkey,AnılSansak was here");
console.log('Indeed. Great tutorial as always! Thanks Shaun, from Pieter.');
console.log("Thanks for NetNinja's tutorials! Thanks from BaalWu in Taiwan");
console.log("Thanks Shaun for the tutorials - Navaneeth");
console.log("Good tutorial mate! Cheers from Jordi Flores (Barcelona - Spain).")

function Track(song, artist, album, year) {
    this.song = song;
    this.artist = artist;
    this.album = album;
    this.year = year;
}

// Just add your favorite track of all time to the list
const Tracks = [];
Tracks.push(new Track("Redbone", "Childish Gambino", "Awaken, My Love!", "2017"));
Tracks.push(new Track("The Less I Know The Better", "Tame Impala", "Currents", "2015"));
Tracks.push(new Track("Blue Monday", "New Order", "NOT ON Power, Corruption & Lies", "1983"));
Tracks.push(new Track("Fight Like a Brave", "Red hot chili peppers", "The Uplift Mofo Party Plan", "1987"));

Tracks.map(track => {
    console.log("----------------------");
    console.log("\nSong: " + track.song);
    console.log("\nArtist: " + track.artist);
    console.log("\nAlbum: " + track.album + ", Year: " + track.year);
    console.log("----------------------");
});

// Ninjas are cool!

console.log('%cDo your worst!\n', 'background: red; color: white; display: block; padding: 3px;');
console.log('%cFork it on GitHub: https://github.com/iamshaunjp/git-playlist.git', 'background: #0057A0; color: white; display: block; padding: 3px;');
"use strict";
function make_album(artist, album, numberoftracks) {
    let albumObject = {
        artist: artist,
        album: album,
    };
    if (numberoftracks !== undefined) {
        albumObject.numberoftracks = numberoftracks;
    }
    return albumObject;
}
console.log(make_album("Taylor Swift", "Enchanted"));
console.log(make_album("One Direction", "Night Changes"));
console.log(make_album("Astrid", "Hurts so Good"));
console.log(make_album("Atif Alam", "Barish", 1)); // Adding numberoftracks in this call

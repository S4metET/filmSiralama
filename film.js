let filmSayisi = prompt("Kaç Dizi Eklemek istiyorsun.");
let favoriFilmler = [];

for (let i = 0; i < filmSayisi; i++) {
    let film = prompt(`${i + 1}. favori filmini yaz:`);
    favoriFilmler.push(film);
}

favoriFilmler.sort();

console.log("Favori Filmlerinizin Alfabetik Sırası:");
for (let i = 0; i < favoriFilmler.length; i++) {
    console.log((i+1) + "." + favoriFilmler[i]);    
}
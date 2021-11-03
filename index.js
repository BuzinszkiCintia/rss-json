function readNews() {
    fetch("rss.json")
    .then((r)=> r.json()) //ezzel adom meg hogy json-t hozzon létre
    .then(renderNews);

} 
// news -> rss.json
function renderNews(news) {
    let items = news.items;
    for (let item of items) { //végig megyünk a for ciklussal a itemeken
        renderItem(item);
    }
}

function renderItem(item) {//it hozzuk létre azt amit látni akarok kint az odlalon
    let box = document.createElement('div'); //dobozt hoztuk létre
    let title = document.createElement('h1'); //címet hoztuk létre
    let desc = document.createElement('p'); // táblázat

    title.innerText = item.title; //egy adott item-nek kiolvassuk most a title mezejét és belerakjuk a title-be
    desc.innerText = item.summary; // egy itemnek a summary tulajdonságát adjuk vissza (szöveget)
    box.append(title, desc); // most a dobozba beleírtuk az előző két sorba lévő szöveget
    document.getElementById('rss').append(box);

}
//event listener 
window.addEventListener('load', readNews); // 
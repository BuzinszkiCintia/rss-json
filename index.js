function trimDOM(str) {
    let parsel = new DOMParser(); //példányosítás, a dom parser az egy konstruktor; beolvastuk, feldolgozza és csinál egy új dom tree-t ez a DOM parsel konst. 
    let doc = parsel.parseFromString(str, "text/html"); 
    let txt = doc.body.innerText;
    return txt.substring(0, 255) + "...";
}

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
    let box = document.createElement("div"); //dobozt hoztuk létre
    box.className = "article";
    let title = document.createElement("h1"); //címet hoztuk létre
    let desc = document.createElement("p"); // táblázat
    let link = document.createElement("a");

    title.innerText = item.title; //egy adott item-nek kiolvassuk most a title mezejét és belerakjuk a title-be
    
    link.innerText = item.link; 
    link.href = item.link;
    desc.innerText = trimDOM (item.summary);; // egy itemnek a summary tulajdonságát adjuk vissza (szöveget) + substring-el levágjuk (ez változott)
    
    box.append(title, desc); // most a dobozba beleírtuk az előző két sorba lévő szöveget
    document.getElementById("rss").append(box);

}
//event listener 
window.addEventListener("load", readNews); 
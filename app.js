
const uri = 'http://perspektywy.pl/rekrutacja/news.json';
const uri2 = 'https://cors-anywhere.herokuapp.com/';
let req = new Request(uri2+uri, {
    method: 'GET',
})

let frame = $('.frame');
let old = $('.old');
let divOld = $(`<div></div>`).css('background-image', 'url("http://perspektywy.pl/rekrutacja/img/img_05.jpg")');

fetch(req)
.then(response => response.json())
.then(jsonData =>{
    for(let key in jsonData){
        let link = jsonData[key].img;
        link = 'http:'+ link
        let div = $(`<div></div>`).css('background-image', `url(${link})`)
        div.append(`<p class = "title">${jsonData[key].title}</p>`)
        console.log(div)
        frame.append(div);
    }

    old.append(divOld);
    divOld.append(`<p class = "title">${jsonData[5].title}</p>`)
})
.catch(err =>{
    console.log('ERROR', err.message);
})

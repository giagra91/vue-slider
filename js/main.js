
let root = new Vue(
    {
        el: `#root`,
        data: {

        },
        methods: {

        }
    },
)



// Array di oggetti fornito
const mainArray = [
    {
    place: 'Svezia',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    image: 'img/01.jpg',
    },
    {
    place: 'Svizzera',
    text: 'Lorem ipsum',
    image: 'img/02.jpg',
    },
    {
    place: 'Gran Bretagna',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: 'img/03.jpg',
    },
    {
    place: 'Germania',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    image: 'img/04.jpg',
    },
    {
    place: 'Paradise',
    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    image: 'img/05.jpg',
    },
];

// Inizializzo le variabili con cui verranno inseriti gli elementi nell'HTML
let carouselContent = ``;
let thumbnailsContent = ``;
let changeDirection = false;

// Creo un ciclo for per inserire i contenuti degli array nei div
for (let i = 0; i < mainArray.length; i++){
    carouselContent += `
    <div class="main-carousel position-relative ${i != 0 ? 'd-none' : ''}">
        <img src="${mainArray[i].image}" alt="${mainArray[i].place}">
        <div class="my-carousel-info text-white text-center position-absolute bottom-0 pe-2">
            <h3>${mainArray[i].place}</h3>
            <p>${mainArray[i].text}</p>
        </div>
    </div>`;

    thumbnailsContent += `
    <div class="my-thumbnails-container d-inline-block ${i != 0 ? 'my-filter' : 'my-border-white'}">
    <img class="img-fluid" src="${mainArray[i].image}" alt="${mainArray[i].place}">
    </div>`;
}; 

document.getElementById(`my-after-carousel`).innerHTML=`
<div>
    <button type="text" class="btn btn-warning mb-3" id="reverse">Inverti scorrimento</button>
</div>
<div>
    <div class="form-group mb-2">
        <label for="exampleInputEmail1">Link all'immagine</label>
        <input type="text" id="insertNewImageLink" placeholder="Aggiungi la nuova immagine" class="ms-2">
    </div>
    <button type="submit" class="btn btn-primary">Aggiungi</button>
</div>
`;


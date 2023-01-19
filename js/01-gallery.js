import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery")

renderGalleryItems(galleryItems); 

galleryList.addEventListener("click", onGalleryListClick)
 function onGalleryListClick(event){
    event.preventDefault();

if (event.target.nodeName !== "IMG"){
    return
}
const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}">`)
instance.show();
// console.log(event.target.nodeName)
 }

function createGalleryItemsMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) => `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>` ).join("")
    
}

function renderGalleryItems(galleryItems) {
    galleryList.innerHTML = createGalleryItemsMarkup(galleryItems);

}

// console.log(createGalleryItemsMarkup(galleryItems));
console.log(galleryList);


// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
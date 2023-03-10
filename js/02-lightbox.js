import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery")

renderGalleryItems(galleryItems); 
const gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});

// gallery.on('show.simplelightbox', function () {
// 	document.body.style.backgroundColor = "green"
// });


galleryList.addEventListener("click", onGalleryListClick)
 function onGalleryListClick(event){
    event.preventDefault();

 }


function createGalleryItemsMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>` ).join("")
    
}

function renderGalleryItems(galleryItems) {
    galleryList.innerHTML = createGalleryItemsMarkup(galleryItems);

}

import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) => `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a></li>`
    )
    .join("");
}
gallery.innerHTML = createGallery(galleryItems);

//Vanilla JavaScript Plugin
const lightbox = new SimpleLightbox(".gallery a", {
  //Options
  captionsData: "alt",
});

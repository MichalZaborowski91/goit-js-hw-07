import { galleryItems } from "./gallery-items.js";

const divGallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
}

divGallery.innerHTML = createGallery(galleryItems);
divGallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  divGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

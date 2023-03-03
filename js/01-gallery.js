import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createEl = createCards(galleryItems);

gallery.insertAdjacentHTML('beforeend', createEl);
  
function createCards () {
    return galleryItems.map(({ original,preview,description }) => {
        return `
        <div class ="gallery__items">
        <a href="${original}" class= "gallery__link">
        <img class ="gallery__image" src="${preview}" 
        alt="${description}" data-source="${original}">
        </a>
        </div>
        `;
      })
      .join("");
   }
  // gallery.innerHTML.createEl;

  gallery.addEventListener("click", onLinkClick)

const instance = basicLightbox.create(
  `<img width="1040" height="720" src="#">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscPress);
    },
  }
);

function onLinkClick(event) {
  event.preventDefault();
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function onEscPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

console.log(galleryItems);
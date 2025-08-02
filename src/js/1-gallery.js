import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  {
    preview: new URL('../img/small1.jpg', import.meta.url).href,
    original: new URL('../img/large1.jpg', import.meta.url).href,
    description: 'Image 1',
  },
  {
    preview: new URL('../img/small2.jpg', import.meta.url).href,
    original: new URL('../img/large2.jpg', import.meta.url).href,
    description: 'Image 2',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
  })
  .join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
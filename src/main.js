import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getSearchImage } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.input');
const imageGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const queryImage = searchInput.value.trim();

  if (queryImage === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  showLoader();

  getSearchImage(queryImage)
    .then(data => {
      if (data.hits.length === 0) {
        imageGallery.innerHTML = '';
        return iziToast.error({
          message:
            '❌ Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
          maxWidth: 350,
          timeout: 5000,
          progressBar: false,
        });
      }

      const markup = renderGallery(data.hits);
      imageGallery.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });
  return event.target.reset();
});

function showLoader() {
  loader.style.display = 'inline-block';
}
function hideLoader() {
  loader.style.display = 'none';
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

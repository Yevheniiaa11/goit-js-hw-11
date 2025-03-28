import { searchImage } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-function";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector(".form");
const input = document.querySelector('input[name="search-text"]');
const loader = document.querySelector(".loader");

loader.style.display = "none";


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = input.value.trim();

    if(searchInput) {

        loader.style.display = "block";

        searchImage(searchInput).then(images => {

            createGallery(images);

        const ligthbox = new SimpleLightbox(".gallery a", {
                captionsData: 'alt',
                captionsDelay: 250,
        });

        loader.style.display = "none";

          
        ligthbox.refresh();

        });
    }
});


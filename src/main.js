import { searchImage } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector(".form");
const input = document.querySelector('input[name="search-text"]');
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

// loader.style.display = "none";

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionsDelay: 250,
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = input.value.trim();

    if(searchInput) {

        loader.style.display = "block";
        gallery.innerHTML = "";

        searchImage(searchInput)
        .then(images => {

            createGallery(images);
            lightbox.refresh();

        })

        .catch(error => {
            console.error("Downloadd error:", error);
        })

        .finally(() => {
            loader.style.display = "none";
        });
    }
});



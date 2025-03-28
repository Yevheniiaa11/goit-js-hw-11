export function createGallery(images){

    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    const markup = images
       .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="description">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
        </div>
    </li>
    `).join("");

    gallery.insertAdjacentHTML("beforeend", markup);

}
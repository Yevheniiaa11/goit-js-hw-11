import axios from 'axios';


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const BASE = "https://pixabay.com/api/";
const API_KEY = "49565039-11a2922cd8e7ceae59523da99";


export function searchImage(name) {
    console.log("Searching for:", name);
    return axios.get(BASE, {
        params: {
            key: API_KEY,
            q: name,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
    })

    .then(response => {
        console.log("Response received:", response.data);
        const hits = response.data.hits;

        if (hits.length === 0) {
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            return [];

        }

        return hits;
    })
    .catch(error => {
        console.error("Axios error:", error);
        iziToast.error({
            title: "Error",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
        return [];
    });
}


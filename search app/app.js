const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const input = document.querySelector("#search-input");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search");
const clearButton = document.querySelector("#clear");
const imageWrapper = document.querySelector(".imagelist-wrapper");
events();
function events() {
    form.addEventListener("submit", searchImages);
    clearButton.addEventListener("click", clear);


}
function clear() {
    input.value = "";
    imageWrapper.innerHTML = "";
}
function searchImages(e) {
    let value = input.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID unRQjGAC4rrqCZlytAxOrWgS0cv6qULBTpr-4WhokoY"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                addImageUi(image.urls.small);
            })
        })
        .catch((error) => console.log(error));
    e.preventDefault();

}
function addImageUi(url) {
    let div = document.createElement("div");
    div.className = "card";
    let img = document.createElement("img");
    img.setAttribute("src", url);
    img.width = "350";
    img.height = "350";
    div.appendChild(img);
    imageWrapper.appendChild(div);
}
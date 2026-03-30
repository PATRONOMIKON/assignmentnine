const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const input = document.querySelector("#search-input");

const API_KEY = "ofjHD4j78FCEF3kDRU6g4MqnZLIr3bfo";

async function fetchGifs(searchTerm) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&rating=g` ;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    const images = data.data.map(gif => gif.images.original.url);

    return images;
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return [];
  }
}

button.addEventListener("click", async () => {
  const searchTerm = input.value || "Dogs";

  gifContainer.innerHTML = "";

  const images = await fetchGifs(searchTerm);

  images.forEach(url => {
    gifContainer.innerHTML += `
      <img src="${url}" class="col-3 mb-3">
    `;
  });
});
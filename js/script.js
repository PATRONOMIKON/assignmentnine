console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=ofjHD4j78FCEF3kDRU6g4MqnZLIr3bfo&q=Dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function fetchGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data); // inspect structure

  const images = data.data.map(gif => gif.images.original.url);

  return images;
}

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
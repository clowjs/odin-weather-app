import './index.css';
import { fetchWeather, fetchImage } from './utils/api';

const input = document.querySelector('input');
const button = document.querySelector('button');
const cityElement = document.getElementById('city');
const tempsElement = document.getElementById('temps');
const iconElement = document.getElementById('icon');
const descriptionElement = document.getElementById('description');
const conditionImageElement = document.getElementById('conditionImage');

function updateResults(
  {
    city, country, tempC, tempF, icon, description,
  },
) {
  cityElement.textContent = `${city}, ${country}`;
  tempsElement.textContent = `${tempC}°C / ${tempF}°F`;
  iconElement.src = icon;
  descriptionElement.textContent = description;
}

function updateImage(description) {
  fetchImage(description).then((url) => {
    conditionImageElement.src = url;
  });
}

function updateInfo(data) {
  updateResults(data);
  conditionImageElement.src = '';
  updateImage(data.description);
}

function handleClick() {
  if (!input.value) return;

  fetchWeather(input.value).then(updateInfo);
}

button.addEventListener('click', handleClick);

fetchWeather('São Paulo').then(updateInfo);

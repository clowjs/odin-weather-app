import './index.css';
import { fetchWeather } from './utils/api';

const input = document.querySelector('input');
const button = document.querySelector('button');
const cityElement = document.getElementById('city');
const tempsElement = document.getElementById('temps');
const iconElement = document.getElementById('icon');
const descriptionElement = document.getElementById('description');

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

function handleClick() {
  if (!input.value) return;

  fetchWeather(input.value).then(updateResults);
}

button.addEventListener('click', handleClick);

fetchWeather('São Paulo').then(updateResults);

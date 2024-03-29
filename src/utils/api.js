export async function fetchWeather(query) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e0b34c34316f40cd957191330241103&q=${query}`,
      { mode: 'cors' },
    );

    const data = await response.json();

    return {
      city: data.location.name,
      country: data.location.country,
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      icon: data.current.condition.icon,
      description: data.current.condition.text,
    };
  } catch (error) {
    throw new Error('Error fetching weather', error);
  }
}

export async function fetchImage(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=IkHw2BT4EP5hMYmULmCnzI586K7XLTkP&s=${query}`,
      { mode: 'cors' },
    );

    const data = await response.json();

    return data.data.images.original.url;
  } catch (error) {
    throw new Error('Error fetching image', error);
  }
}

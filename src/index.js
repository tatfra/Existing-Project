function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let apiKey = "21eea3638bfada0d7c0b605eac8f5457";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(`${apiUrl}`).then(showTemp);
}
navigator.geolocation.getCurrentPosition(showPosition);

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityName = response.data.name;

  console.log(`${temperature}, ${cityName}`);

  let h1 = document.querySelector(`h1`);
  h1.innerHTML = `It is currently ${temperature}ºC in ${cityName}`;
}

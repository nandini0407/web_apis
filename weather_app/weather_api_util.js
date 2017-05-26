
export const fetchWeather = (cityId) => {
  return $.ajax({
    method: 'GET',
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=b4ddfdf515f0af2814a1c801c050152b`
  });
};

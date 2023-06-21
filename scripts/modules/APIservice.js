const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '1c61ec40a3036ac05deedbc08a01b7c8';

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`)
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const data = await response.json();
    return { success: true, data }
  } catch (err) {
    return { success: false, err }
  }
};
import axios from "axios";

export default class OpenMeteoHttpClient {
  static BASE_URL = "https://api.open-meteo.com/v1";

  getWeatherForToday(lat, long) {
    return axios.get(`${OpenMeteoHttpClient.BASE_URL}/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&forecast_days=1`)
      .then(res => res.data);
  }
}
import axios from "axios";

export default class CountriesHttpClient {
  static BASE_URL = "https://studies.cs.helsinki.fi/restcountries";

  getAll() {
    return axios.get(`${CountriesHttpClient.BASE_URL}/api/all`)
      .then(resp => resp.data);
  }

}
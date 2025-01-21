import axios from "axios";

class PhonebookClient {
  static BASE_URL= import.meta.env.VITE_API_BASE_URL;

  getAll() {
    return axios.get(`${PhonebookClient.BASE_URL}/persons`)
      .then(res => res.data);
  }

  save(entryObject) {
    return axios.post(`${PhonebookClient.BASE_URL}/persons`, entryObject)
      .then(res => res.data);
  }

  update(id, newEntryObject) {
    return axios.put(`${PhonebookClient.BASE_URL}/persons/${id}`, newEntryObject)
      .then(res => res.data);
  }

  /**
   *
   * @param id
   * @returns {Promise<axios.AxiosResponse<any>>} removed person
   */
  delete(id) {
    return axios.delete(`${PhonebookClient.BASE_URL}/persons/${id}`)
      .then(res => res.data);
  }
}

export default PhonebookClient
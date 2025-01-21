import axios from "axios";


class NoteClient {

  static BASE_URL = import.meta.env.VITE_API_BASE_URL;

  getAll() {
    return axios.get(`${NoteClient.BASE_URL}/notes`)
      .then(res => res.data);
  }

  create(noteObject) {
    return axios.post(NoteClient.BASE_URL, noteObject)
      .then(res => res.data);
  }

  update(id, newNoteObject) {
    return axios.put(`${NoteClient.BASE_URL}/notes/${id}`, newNoteObject)
      .then(res => res.data);
  }
}

export default NoteClient;
class NoteObject {
  id;
  content;
  important;

  get id() { return this.id; }
  get content() { return this.content; }
  get important() { return this.important; }

  withImportant(important) {
    return new NoteObject(this.id, this.content, important);
  }

  constructor(id, content, important) {
    this.id = id;
    this.content = content;
    this.important = important;
  }
}

export default NoteObject;
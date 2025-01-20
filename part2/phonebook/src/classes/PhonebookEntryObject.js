import PhonebookEntryComponent from "../components/PhonebookEntryComponent.jsx";

class PhonebookEntryObject {
  static ID_GENERATOR = () => {
    let id = 1;
    return id++;
  };

  id = PhonebookEntryObject.ID_GENERATOR();
  name;

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  constructor(name) {
    this.name = name;
  }

  equals(other) {
    if (!(other instanceof PhonebookEntryObject)) {
      return false;
    }
    if (Object.keys(this).length !== Object.keys(other).length) {
      return false;
    }
    if (this === other) {
      return true;
    }
    for (const key in this) {
      if (key === "id") continue;
      if (this[key] !== other[key]) {
        return false;
      }
    }
    return true;
  }
}

export default PhonebookEntryObject;
class PhonebookEntryObject {
  static ID_GENERATOR = {
    currentId: 1,
    next() {
      return this.currentId++;
    }
  };

  static fromJson({ name, phoneNumber, id }) {
    PhonebookEntryObject.ID_GENERATOR.next();
    return new PhonebookEntryObject(name, phoneNumber, +id);
  }

  id;
  name;
  phoneNumber;

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  get phoneNumber() {
    return this.phoneNumber;
  }

  constructor(name, phoneNumber, id) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    if (id !== 0 && !id) {
      this.id = PhonebookEntryObject.ID_GENERATOR.next();
    }
    else {
      this.id = id;
    }
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
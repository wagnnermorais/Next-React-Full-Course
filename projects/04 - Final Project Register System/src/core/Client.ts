export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string = null) {
    this.#name = name
    this.#age = age
    this.#id = id
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

  static empty() {
    return new Client("", 0)
  }
}
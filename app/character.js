export class Character {
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = "alive";
    this.comunication = "";
  }

  communicate() {
    return "";
  }

  die() {
    this.status = "dead";
  }
}

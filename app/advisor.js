class Advisor extends Character {
  constructor(name, family, age, characterAdvised) {
    super(name, family, age);
    this.characterAdvised = characterAdvised;
  }

  communicate() {
    return "I don't know why, but I feel I'm going to die soon";
  }
}

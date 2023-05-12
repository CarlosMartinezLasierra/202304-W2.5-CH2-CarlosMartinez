class Squire extends Character {
  constructor(name, family, age, characterToServe, flatteryLevel) {
    super(name, family, age);
    this.characterToServe = characterToServe;
    this.flatteryLevel = flatteryLevel;
  }

  communicate() {
    return "I am a loser";
  }
}

class Fighter extends Character {
  constructor(name, family, age, weapon, skill) {
    super(name, family, age);
    this.weapon = weapon;
    this.skill = skill;
  }

  communicate() {
    return "Hit first, ask questions later";
  }
}

class King extends Character {
  constructor(name, family, age, yearsOfReign) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return "You will all die";
  }
}

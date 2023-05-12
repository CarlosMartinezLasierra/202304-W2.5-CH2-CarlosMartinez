import { Character } from "./character";

describe("Given character class", () => {
  test("should create a character with the correct characteristics", () => {
    const character = new Character("Jon", "Snow", 25);

    expect(character.name).toHaveProperty("Jon");
    expect(character.family).toHaveProperty("Snow");
    expect(character.age).toHaveProperty(25);
    expect(character.status).toHaveProperty("alive");
    expect(character.comunication).toHaveProperty("");
  });
});

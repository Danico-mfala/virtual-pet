


// const { it } = require("node:test");
const Pet = require("../pet.js");

let pet;
beforeEach(() => {
  pet = new Pet("Fido");
});

describe("virtual pet constructor", () => {
  it("check if the pet is defined", () => {
    expect(pet).toBeDefined();
  });
  it("give the object", () => {
    expect(pet).toBeInstanceOf(Object);
  });
  it("set the name ", () => {
    expect(pet.name).toBe("Fido");
  });
  it("as 0 ", () => {
    expect(pet.age).toBe(0);
  });
  it("as zero", () => {
    expect(pet.hunger).toBe(0);
  });
  it("as zero", () => {
    expect(pet.fitness).toBe(10);
  });
});

describe("ghghg", () => {
  beforeEach(() => {
    pet.growUp();
  });

  it("as 1", () => {
    expect(pet.age).toBe(1);
  });
  it("as 5", () => {
    expect(pet.hunger).toBe(5);
  });
  it("as 7", () => {
    expect(pet.fitness).toBe(7);
  });

});
describe('fit ',() => {
    if('by 4',() =>{
        pet.fitness = 0;
        pet.walk();
        expect(pet.fitness).toBe(4);
    });
    it('max value 10',() =>{
        pet.fitness = 7;
        pet.walk();
        expect(pet.fitness).toBe(10);
    });
});
describe('fit ',() => {
    if('by 3',() =>{
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toBe(2);
    });
    it('low value 0',() =>{
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toBe(0);
    });
});


describe("check up",()=>{
    it('fitness & hunger',() =>{
        pet.fitness = 2;
        pet.hunger = 7;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('pet fitness',() =>{
        pet.fitness = 2;
        pet.hunger =3;
        expect(pet.checkUp()).toBe('I need a walk');
    });
    it('pet hunger',() =>{
        pet.fitness = 4;
        pet.hunger =6;
        expect(pet.checkUp()).toBe('I am hungry');
    });
    it('pet need nothing',() =>{
        pet.fitness = 4;
        pet.hunger =4;
        expect(pet.checkUp()).toBe('I feel great!');
    });
})
 describe("pet ialive",()=>{
     it('pet is alive',() =>{
            pet.fitness = 0;
            
            expect(pet.isAlive).toBe(false);
        });
    it("pet alive at hunger 10",() =>{
        pet.fitness = 3;
        pet.hunger = 10;
        expect(pet.isAlive).toBe(false);
        pet.hunger = 13;
        expect(pet.isAlive).toBe(false)
    });
    it("pet a live is 30 years old or above",()=>{
        pet.hunger = 8;
        pet.age = 30;
        expect(pet.isAlive).toBe(false);
        pet.hunger = 32;
        expect(pet.isAlive).toBe(false)
    });
    it("pet is alive",() =>{
        pet.age = 4;
        expect(pet.isAlive).toBe(true)
    });
 });


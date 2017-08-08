'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
class CrewMember {
  constructor (name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  // this function adds the new ship object to the crew array
  enterShip (ship) {
    this.ship = ship;
    ship.crew.push(this);
  }

}

class Ship {
  constructor (name, type, ability, crew) {
    // let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    // let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    this.name = name;
    this.type = type;
    this.ability = ability; // || "Can't perform a mission yet.";
    this.crew = [];
  }
  // this function returns a mission statement
  missionStatement (type) {
  // if there is no one yet on the ship / within the crew
    if (!this.crew.length) {
  // OR if (this.crew.length === 0){
  // this is the default mission statment
      return "Can't perform a mission yet.";
    }
  // once crew is added
    return this.ability;
  }
}

// tests
// PASS
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    //wants function named CrewMember
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      //assert confirmed two things are equal
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    // NO PASS

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

// PASS
  describe('Ship', function(){
    //wants function named ship
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

// NO PASS
    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}

class School {
  
  constructor(name, level, numOfStudents) {
    this._name = name;
    this._level = level;
    this._numOfStudents = numOfStudents;
  } 

  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numOfStudents() {
    return this._numOfStudents;
  }
  
  set numberOfStudents(data) {
    if (typeof data === 'number') {
      this._numOfStudents = data;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  
  quickFacts() {
    console.log(`${this._name} educates ${this._numOfStudents} students at the ${this._level} school level. `)
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
    const rand = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[rand];
  }
}

class PrimarySchool extends School {
  constructor(name, pickupPolicy, numOfStudents) {
    super(name, 'primary', numOfStudents)
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, sportsTeams, numOfStudents) {
    super(name, 'high', numOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

class MiddleSchool extends School {
  constructor(name, numOfStudents){
    super(name, 'middle', numOfStudents);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 514);
// lorraineHansbury.quickFacts();
const st = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
// console.log(st);

const alSmith = new HighSchool('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 415);
// console.log(alSmith.sportsTeams);

const team = {
  _players : [{
    firstName : 'Satyam',
    lastName : 'Dua',
    age : 20
  },
  {
    firstName : 'Ramu',
    lastName : 'Kaka',
    age : 20
  },
  {
    firstName : 'Shakti',
    lastName : 'Man',
    age : 20
  }],
  _games : [{
    opponent : 'Broncos',
    teamPoints : 42,
    opponentPoints : 27
  },
  {
    opponent : 'IIT',
    teamPoints : 36,
    opponentPoints : 34
  },
  {
    opponent : 'MIT',
    teamPoints : 46,
    opponentPoints : 32
  }],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = [{
      firstName : firstName,
      lastName : lastName,
      age : age
    }];
    this.players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
      opponent : opponent,
      teamPoints : teamPoints,
      opponentPoints : opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

// console.log(team._players);

team.addGame('Havard', 44, 40);
team.addGame('BBD', 43, 42);
team.addGame('Oxford', 32, 34);

// console.log(team._games);

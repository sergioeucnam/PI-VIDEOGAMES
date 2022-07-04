const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators for Videogame model', () => {
    beforeEach(() => Videogame.sync({ force: true }));

    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({ id: uuidv4(), description: 'The last of the jueguitos is a super fan made', rating: 5 })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name and valid id', () => {
        Videogame.create({ id: uuidv4(), name: 'SuperJueguito' })
          .catch((e) => console.log(e));
      });
    });
  });
});
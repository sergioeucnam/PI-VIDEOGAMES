const { expect, assert } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, Genre, conn } = require('../../src/db');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
const game = {
  id: uuidv4(),
  name: 'The last of me',
  description: 'best game for testing back lul',
  rating: 5,
  genre: 59
};

describe('Videogames routes', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(game)))


  describe('GET /videogames', () => {
    it('should return an array of all videogames', (done) => {
      agent
        .get('/videogames')
        .expect(200)
        .expect('Content-Type', /json/)
      done()
    });
  })

  describe('GET /videogame/:id', () => {
    it('should return a videogame with the given id', (done) => {
      agent
        .get(`/videogame/22509`)
        .expect(201)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('name');
          expect(res.body).to.have.property('description');
          // expect(res.body).to.have.property('rating');
        }).end(done);
    });
  })

  describe('GET /genres', () => {
    it('should return an array of all genres', (done) => {
      agent
        .get('/genres')
        .expect(200)
        .expect('Content-Type', /json/)
      done()
    });
  })

  describe('POST /videogames', () => {
    it('should create a new videogame', (done) => {
      agent
        .post('/videogames')
        .send(game)
        .expect(201)
        .expect('Content-Type', /json/)
        .expect((res) => {
          // expect(res.body.id).to.equal(game.id);
          // expect(res.body.name).to.equal(game.name);
          // expect(res.body.description).to.equal(game.description);
          // expect(res.body.rating).to.equal(game.rating);
        }).end(done);
    });
  })


})
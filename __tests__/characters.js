const supertest = require('supertest');
const server = require('../server');
const db = require('../data/config');

beforeEach(async () => {
  // run seeds before each test
  await db.seed.run();
});

afterAll(async () => {
  // Close database after all tests to prevent warning
  await db.destroy();
});

describe('character resource integration tests', () => {
  it('GET /api/characters', async () => {
    const res = await supertest(server).get('/api/characters');
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.data[0].name).toBe('Mario');
  });

  it('GET /api/characters/:id', async () => {
    const res = await supertest(server).get('/api/characters/1');
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.data.name).toBe('Mario');
  });

  it('GET /api/characters/:id (not found)', async () => {
    const res = await supertest(server).get('/api/characters/0');
    expect(res.statusCode).toBe(404);
  });

  it('POST /api/characters', async () => {
    const res = await supertest(server).post('/api/characters').send({
      name: 'Yoshi',
      description: 'Yoshi is a green and anthropomorphic dinosaur.'
    });
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body.data.name).toBe('Yoshi');
  });

  it('POST /api/characters (existing character)', async () => {
    const res = await supertest(server).post('/api/characters').send({
      name: 'Mario',
      description: "It's-a Me, Mario!"
    });
    expect(res.statusCode).toBe(409);
  });

  it('DELETE /api/characters/:id', async () => {
    const res = await supertest(server).delete('/api/characters/1');
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('1 record(s) has been deleted');
  });
});

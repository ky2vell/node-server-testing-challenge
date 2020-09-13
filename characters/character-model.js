const db = require('../data/config');

function find() {
  return db('characters');
}

function findById(id) {
  return db('characters').where({ id }).first();
}

function findChar(name) {
  return db('characters').where(name).first();
}

function add(newCharacter) {
  return db('characters')
    .insert(newCharacter)
    .then(id => findById(id[0]));
}

function remove(id) {
  return db('characters').where({ id }).del();
}

module.exports = { find, add, findById, findChar, remove };

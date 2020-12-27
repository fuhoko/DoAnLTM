const fs = require('fs');
const contents = require('./dataScore.json');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('score').del()
    .then(() => {
      // Inserts seed entries
      return knex('score').insert(contents);
    });
};

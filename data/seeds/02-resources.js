
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Yu-Gi-Oh Cards', description: ''},
        {name: 'Swim Trunks', description: ''},
        {name: 'Computer', description: ''},
        {name: 'Coffee Pot', description: ''},
        {name: 'Wood', description: ''},
      ]);
    });
};

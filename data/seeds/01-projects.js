
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Lakers Website', description: 'Finish new website for LA Lakers'},
        {name: 'Get bigger muscles', description: 'Have bulging muscles'},
        {name: 'Win Yu-Gi-Oh Tourney', description: 'Become Yu-gi-Oh champ of the world'},
        {name: 'Make Treehouse', description: 'Turn backyard into Treehouse getaway'},
        {name: 'Swim the Pacific', description: 'Set record for fastest to swimm across Pacific Ocean'},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {notes: 'Buy Domain Name', description: '', project_id: 1},
        {notes: '24 hour code sesh', description: '', project_id: 1},
        {notes: 'Wake Up', description: '', project_id: 2},
        {notes: 'Workout', description: '', project_id: 2},
        {notes: 'Become 1 with the cards', description: '', project_id: 3},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {proj_id: 3, resc_id: 1},
        {proj_id: 5, resc_id: 2},
        {proj_id: 1, resc_id: 3},
        {proj_id: 1, resc_id: 4},
        {proj_id: 2, resc_id: 4},
        {proj_id: 3, resc_id: 4},
        {proj_id: 4, resc_id: 4},
        {proj_id: 5, resc_id: 4},
        {proj_id: 4, resc_id: 5},
      ]);
    });
};


exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.text('name')
        .notNullable()
      tbl.text('description')
      tbl.boolean('completed')
        .defaultTo(false)
  })
  .createTable('resources', tbl => {
        tbl.increments()
        tbl.text('name')
            .unique()
            .notNullable()
        tbl.text('description')
        tbl.boolean('completed')
            .defaultTo(false)
  })
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.text('name')
        .notNullable()
      tbl.text('description')
      tbl.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
  .createTable('project_resources', tbl => {
      tbl.integer('proj_id')
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('resc_id')
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

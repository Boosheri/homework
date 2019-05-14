exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohort", t => {
      t.bigIncrements("id");
      t.string("team_name");
      t.string("team_logo");
      t.text("team_members");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("cohort");
  };
  
 
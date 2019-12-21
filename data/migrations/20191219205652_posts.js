
exports.up = function(knex) {
    return knex.schema.createTable("posts", posts => {
        posts.increments();
    
        posts.string("chef_name", 255);
        posts.string("recipe_title", 255);
        posts.string("item_photo", 255);
        posts.string("chef_location", 255);
        posts.string("item_ingredients", 255);
        posts.string("time_cook", 255);
        posts.string("Type", 255);

    
        posts
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("posts");
};

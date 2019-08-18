"use strict";

const _            = require('lodash');
const express      = require('express');
const bodyParser   = require('body-parser');
const config  = require('./knexfile.js');

// Initialize Express.
const app = express();
app.use(bodyParser.json());

// Configure & Initialize Bookshelf & Knex.
console.log('Running in environment: ' + process.env.NODE_ENV);
const knex = require('knex')(config[process.env.NODE_ENV]);
const bookshelf = require('bookshelf')(knex);

// This is a good place to start!
const User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function(){
    return this.hasMany(Posts,'author');
  }
});

const Posts = bookshelf.Model.extend({
  tableName: 'posts',
  author: function() {
    return this.belongsTo(User, 'author');
  },
  comments: function() {
    return this.hasMany(Comments);
  },
});

const Comments = bookshelf.Model.extend({
  tableName: 'comments',
  user: function() {
    return this.belongsTo(User);
  },
  post: function() {
    return this.belongsTo(Posts);
  },
});

exports.User = User;
exports.Posts = Posts;
exports.Comments = Comments;



// Exports for Server hoisting.
const listen = (port) => {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      resolve();
    });
  });
};

exports.up = (justBackend) => {
  return knex.migrate.latest([process.env.NODE_ENV])
    .then(() => {
      return knex.migrate.currentVersion();
    })
    .then((val) => {
      console.log('Done running latest migration:', val);
      return listen(3000);
    })
    .then(() => {
      console.log('Listening on port 3000...');
    });
};

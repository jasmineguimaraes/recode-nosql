const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://artsy:recode@localhost:27017/?authMechanism=DEFAULT';

// Database Name
const dbName = 'artsy';
var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true, useUnifiedTopology: true }, function( err, client ) {
      _db  = client.db(dbName);
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};
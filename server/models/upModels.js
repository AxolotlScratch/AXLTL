const { Pool } = require('pg');

const PG_URI = 'postgres://fknystcf:nxddx9ZcoF0lGSPOkt4Kt2F5A3J9WQT8@fanny.db.elephantsql.com/fknystcf';

const pool = new Pool({
    connectionString: PG_URI
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params) => {
    console.log('upModel => executed query: ', text);
    return pool.query(text, params);
  }
};


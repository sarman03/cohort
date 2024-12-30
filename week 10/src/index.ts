const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://test_owner:iSF9zxXfPN3y@ep-soft-dawn-a5nvtmh4.us-east-2.aws.neon.tech/test?sslmode=require'
});



// async function createUsersTable() {
//   try {
//     await client.connect();
//     const result = await client.query(`
//     CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );
//     `);
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// }

async function insertData(){
    try {
        await client.connect();
        const result2 = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('test2', 'test22gmail.com', 'test22password');
        `);
        console.log(result2);
}
catch (err) {
    console.error(err);
}
}

// createUsersTable();
insertData();
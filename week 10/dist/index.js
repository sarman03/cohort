"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result2 = yield client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('test2', 'test22gmail.com', 'test22password');
        `);
            console.log(result2);
        }
        catch (err) {
            console.error(err);
        }
    });
}
// createUsersTable();
insertData();

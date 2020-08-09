import * as mongodb from 'mongodb'
import { config as envConfig } from 'dotenv';
envConfig({ path: 'src/.env' });
let _db;
const uri = process.env['MONGO_URL'];
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });
const connection = callback => {
    client.connect()
    .then(client => {
        _db = client.db();
        callback();
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
}
const getDb = () => {
    if (_db) {
      return _db;
    }
    throw 'No database found!';
  };
export const mongoConnector = {
    connection, getDb
};

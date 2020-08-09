import { mongoConnector } from '../connectors';
import * as mongodb from 'mongodb'

function getUser(id) {
    const db = mongoConnector.getDb();
    return db
      .collection('users')
      .find({_id:new mongodb.ObjectId(id)})
      .toArray()
      .then(users => {
        console.log(users);
        return users;
      })
      .catch(err => {
        console.log(err);
      });
}

function getUsers() {
    const db = mongoConnector.getDb();
    return db
      .collection('users')
      .find()
      .toArray()
      .then(users => {
        return users;
      })
      .catch(err => {
        console.log(err);
      });
}
function addUser(user) {
    const db = mongoConnector.getDb();
    return db
      .collection('users')
      .insertOne(user)
      .then(user => {
        console.log("User Added");
      })
      .catch(err => {
        console.log(err);
      });
}
function updateUser(user) {
    const db = mongoConnector.getDb();
    user._id = new mongodb.ObjectId(user._id);
    return db
      .collection('users')
      .updateOne({ _id: user._id }, {$set:user})
      .then(user => {
        console.log("Updated")
      })
      .catch(err => {
        console.log(err);
      });
}
function deleteUser(uid) {
    const db = mongoConnector.getDb();
    return db
      .collection('users')
      .deleteOne({'_id': new mongodb.ObjectId(uid._id)})
      .then(user => {
        console.log("User Deleted")
      })
      .catch(err => {
        console.log(err);
      });
}

export const userRepository = {
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser
};

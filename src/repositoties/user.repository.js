import { mongoConnector } from '../connectors';
import * as mongodb from 'mongodb';

function getUser(id) {
    const db = mongoConnector.getDb();
    return db
        .collection('users')
        .find({ _id: new mongodb.ObjectId(id) })
        .toArray()
        .then((users) => {
            return users;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getUsers() {
    const db = mongoConnector.getDb();
    return db
        .collection('users')
        .find()
        .toArray()
        .then((users) => {
            return users;
        })
        .catch((err) => {
            console.log(err);
        });
}
function addUser(user) {
    const db = mongoConnector.getDb();
    return db
        .collection('users')
        .insertOne(user)
        .then((result) => {
            console.log('User Added');
            user._id = result.insertedId;
            return user;
        })
        .catch((err) => {
            console.log(err);
        });
}
function updateUser(user) {
    const db = mongoConnector.getDb();
    user._id = new mongodb.ObjectId(user._id);
    const options = { upsert: false };
    return db
        .collection('users')
        .updateOne({ _id: user._id }, { $set: user }, options)
        .then((result) => {
            console.log('Updated');
            return result.modifiedCount;
        })
        .catch((err) => {
            console.log(err);
        });
}
function deleteUser(uid) {
    const db = mongoConnector.getDb();
    return db
        .collection('users')
        .deleteOne({ _id: new mongodb.ObjectId(uid._id) })
        .then((result) => {
            console.log('User Deleted');
            return result.deletedCount;
        })
        .catch((err) => {
            console.log(err);
        });
}

export const userRepository = {
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};

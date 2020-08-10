import { mongoConnector } from '../connectors';
import * as mongodb from 'mongodb';
/*
 * @collection: in NoSQL it's the collestion where all the respiective
 *  entity rcords are present.its same as table in SQL.
 * @id: ObjectId of the entity.
 */
function getEntity(collection, id) {
    const db = mongoConnector.getDb();
    return db
        .collection(collection)
        .find({ _id: new mongodb.ObjectId(id) })
        .toArray()
        .then((entity) => {
            return entity;
        })
        .catch((err) => {
            console.log(err);
        });
}
/*
 * @collection: in NoSQL it's the collestion where all the respiective
 *  entity rcords are present.its same as table in SQL.
 */
function getEntities(collection) {
    const db = mongoConnector.getDb();
    return db
        .collection(collection)
        .find()
        .toArray()
        .then((entities) => {
            return entities;
        })
        .catch((err) => {
            console.log(err);
        });
}
/*
 * @collection: in NoSQL it's the collestion where all the respiective
 *  entity rcords are present.its same as table in SQL.
 * @entity: entity is an objet which needs to be added in colection.
 */
function addEntity(collection, entity) {
    const db = mongoConnector.getDb();
    return db
        .collection(collection)
        .insertOne(entity)
        .then((result) => {
            entity._id = result.insertedId;
            return entity;
        })
        .catch((err) => {
            console.log(err);
        });
}
/*
 * @collection: in NoSQL it's the collestion where all the respiective
 *  entity rcords are present.its same as table in SQL.
 * @entity: entity is an objet which needs to be updated in colection.
 */
function updateEntity(collection, entity) {
    const db = mongoConnector.getDb();
    entity._id = new mongodb.ObjectId(entity._id);
    const options = { upsert: false };
    return db
        .collection(collection)
        .updateOne({ _id: entity._id }, { $set: entity }, options)
        .then((result) => {
            return result.modifiedCount;
        })
        .catch((err) => {
            console.log(err);
        });
}
/*
 * @collection: in NoSQL it's the collestion where all the respiective
 *  entity rcords are present.its same as table in SQL.
 * @entity_is: entity_id is ObjectId for the entity to be deleted.
 */
function deleteEntity(collection, entity_id) {
    const db = mongoConnector.getDb();
    return db
        .collection(collection)
        .deleteOne({ _id: new mongodb.ObjectId(entity_id._id) })
        .then((result) => {
            return result.deletedCount;
        })
        .catch((err) => {
            console.log(err);
        });
}

export const mongoWrapper = {
    getEntity,
    getEntities,
    addEntity,
    updateEntity,
    deleteEntity,
};

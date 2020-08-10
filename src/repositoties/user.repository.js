import { mongoWrapper } from '../db-wrapper';

function getUser(id) {
    return mongoWrapper.getEntity('users', id);
}

function getUsers() {
    return mongoWrapper.getEntities('users');
}

function addUser(user) {
    return mongoWrapper.addEntity('users', user);
}

function updateUser(user) {
    return mongoWrapper.updateEntity('users', user);
}

function deleteUser(uid) {
    return mongoWrapper.deleteEntity('users', uid);
}

export const userRepository = {
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};

import { userRepository } from '../repositoties';

function getUser(id) {
    return userRepository.getUser(id);
}

function getUserByField(field, value) {
    return userRepository.getUserByField(field, value);
}

function getUsers() {
    return userRepository.getUsers();
}

function addUser(user) {
    return userRepository.addUser(user);
}

function updateUser(user) {
    return userRepository.updateUser(user);
}

function deleteUser(uid) {
    return userRepository.deleteUser(uid);
}

export const userService = {
    getUser,
    getUserByField,
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};

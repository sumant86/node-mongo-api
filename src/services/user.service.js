import { userRepository } from '../repositoties';

function getUser(id) {
    return userRepository.getUser(id);
}

function getUsers() {
    return userRepository.getUsers();
}

function addUser(user) {
    console.log("Service", user);
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
    getUsers,
    addUser,
    updateUser,
    deleteUser
};

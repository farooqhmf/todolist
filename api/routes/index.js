const toDOList = require('./toDoList');
const user = require('./user');

module.exports = (app) => {
    toDOList(app),
    user(app)
};
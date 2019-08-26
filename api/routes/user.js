const userObj = require('../controllers/user');

module.exports = function(app){

    //user routes
    app.route('/')
    .get(userObj.list_user);

    app.route('/user')
    .get(userObj.list_user)
    .post(userObj.create_user);

    app.route('/user/:userId')
    .get(userObj.read_user)
    .put(userObj.update_user)
    .delete(userObj.delete_user);
};
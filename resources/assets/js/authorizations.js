let user = window.App.user;

module.exports = {
    owns (model, prop = 'user_id') {
        return model[prop] === user.id;
    },
    isBan(){
        return user.isBanned;
    },
    isAdmin () {
        return ['JohnDoe', 'JaneDoe'].includes(user.name);
    }
};

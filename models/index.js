const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

//Model Associations
//user and post relationships:
User.hasMany (Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

//user and comment relationships:
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

//post and comment relationships:
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = {User, Post, Comment};
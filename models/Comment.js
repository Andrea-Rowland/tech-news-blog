const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        //columns go here
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        comment_text: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }

        },
        post_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;
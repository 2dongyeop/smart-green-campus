const Sequelize = require('sequelize');

module.exports = class Sensor extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // id: {                            //시퀄라이즈가 id를 알아서 기본 키로 연결
            //     type: Sequelize.INTEGER,
            //     allowNull: false,
            //     unique: true,
            // },
            value: {
                type: Sequelize.DOUBLE.UNSIGNED,
                allowNull: false,
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Sensor',
            tableName: 'sensors',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        //db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
    }
};
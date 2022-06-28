module.exports = (sequelizeConfig, Sequelize) => {
    // Set Model
    const Sensor = sequelizeConfig.define(
        'sensor',
        {
            value: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        }
    );

    return Sensor;
};
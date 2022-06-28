module.exports = (sequelizeConfig, Sequelize) => {
    // Set Model
    const Sensor = sequelizeConfig.define(
        'sensor',
        {
            value: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                // unique: true,
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        }
    );

    return Sensor;
};
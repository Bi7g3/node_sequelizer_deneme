
module.exports = ( sequelize, DataTypes)=> {
    const User = sequelize.define("User", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            field: 'full_name'
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            field: 'phone_number'
        }
    });
    return User;
}

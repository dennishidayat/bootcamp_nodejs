module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customernumber: {
            field:'customernumber',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            field: 'username',
            type: type.STRING
        },
        password: {
            field: 'password',
            type: type.STRING
        },
        birthdate: {
            field:'birthdate',
            type: type.DATE
        },
        firstname: {
            field:'firstname',
            type: type.STRING
        },
        lastname: {
            field:'lastname',
            type: type.STRING
        },
        phonenumber: {
            field:'phonenumber',
            type: type.STRING
        },
        phonetype: {
            field:'phonetype',
            type: type.STRING
        }
    }, {
        tableName: 'customer',
        timestamps: false
    })
}

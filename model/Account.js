module.exports = (sequelize, type) => {
    return sequelize.define('account', {
        accountnumber: {
            field: 'accountnumber',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        opendate: {
            field: 'opendate',
            type: type.DATE,
        },
        balance: {
            field: 'balance',
            type: type.INTEGER,
        },
        customernumber: {
            field: 'customernumber',
            type: type.INTEGER
        }
    }, {
        tableName: 'account',
        timestamps: false
    });
}
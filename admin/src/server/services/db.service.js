const sql = require('mssql');
const dbConfig = require('../../utils/db.config');

async function connectToDb() {
    try {
        await sql.connect(dbConfig);
        console.log('Подключение к MSSQL установлено');
    } catch (err) {
        console.error('Ошибка подключения к MSSQL:', err);
    }
}

async function executeSqlQuery(query) {
    try {
        const request = new sql.Request();
        const result = await request.query(query);
        return result.recordset;
    } catch (err) {
        console.error('Ошибка выполнения SQL-запроса:', err);
    }
}

module.exports = { connectToDb, executeSqlQuery };

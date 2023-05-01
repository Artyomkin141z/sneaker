const sql = require('mssql');
const dbConfig = require('../../utils/db.config');

async function executeSqlQuery(query) {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query(query);
        return result.recordset;
    } catch (err) {
        console.error('Ошибка выполнения SQL-запроса:', err);
    } finally {
        sql.close();
    }
}

module.exports = { executeSqlQuery };

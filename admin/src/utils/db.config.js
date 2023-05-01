const sql = require('mssql');

const config = {
  server: 'GILA',
  database: 'sneackerDB',
  user: 'sa',
  password: '1111',
  port: 1433,
  options: {
    trustServerCertificate: true
  }
};

async function getData() {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM admins');
    console.log(result.recordset);
  } catch (err) {
    console.error(err);
  } finally {
    sql.close();
  }
}

module.exports = config; 
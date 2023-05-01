class UserDB {
    loginUser(email){
        return `SELECT * FROM admins
                WHERE admins.email = '${email}'  OR admins.login = '${email}'`
    }
}

module.exports = new UserDB();
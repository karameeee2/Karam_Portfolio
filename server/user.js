const mysql = require('mysql');

const userSchema = new mysql.schema({
    id: String,
    password: String
});

userSchema.methods.comparePassword = (inputPassword, cb) => {
    if(inputPassword === this.password) {
        cb(null, true);
    } else {
        cb('error');
    }
}

module.exports = mysql.model('users', userSchema, 'users');
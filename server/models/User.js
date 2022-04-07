const mongoose = require('mongoose');
//const Schema = mongoose.Schema; this is same as below line uses E2015 destruction
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//load to mongo data base (modelname, schemaname), 2 arguments means to load to db
mongoose.model('users', userSchema);
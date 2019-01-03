const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let _db = null;
let _isConnected;

const connect = () => {
  if (_isConnected) {
    return Promise.resolve();
  }
  return mongoose.connect(process.env.MONGO_URI)
    .then(db => { 
        _db=db
        _isConnected = db.connections[0].readyState;
      return _db;
    });
};

const getMongoClient = async () => {
    if (_isConnected) {
        return db
    }
    return connect();
}

module.exports = {
    getMongoClient
}
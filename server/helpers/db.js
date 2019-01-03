const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let _isConnected;

const connect = () => {
  if (_isConnected) {
    return Promise.resolve();
  }
  return mongoose.connect(process.env.MONGO_URI)
    .then(db => { 
        _isConnected = db.connections[0].readyState;
    });
};

const getMongoClient = async () => {
    try {
        
        if (!_isConnected) await connect();
            const { db } = mongoose.connection;
            return db;
    } catch (error) {
        throw error
    }
}

module.exports = {
    getMongoClient
}
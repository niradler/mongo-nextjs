const {getMongoClient} = require('../helpers/mongo')

class Collections {
    constructor(db){
        this.db =db;
    }

    getCollections(){
       return this.db.getCollectionNames();
    }
}

const collections = new Collections(getMongoClient);
module.exports = collections
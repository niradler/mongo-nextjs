const {getMongoClient} = require('../helpers/db')

class Home {

    static async getTags(){
        try {
            const db = await getMongoClient();
            // const collections = db.getCollectionNames();
            console.log({db})
            const tags = await db.collection('tags').find().toArray();
            return {tags}
        } catch (error) {
           console.log({error})
        }
    }
}

module.exports = Home
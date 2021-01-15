const functions = require('firebase-functions');
const algoliasearch = require("algoliasearch");

module.exports = (collectionName, options) => {
    const client = algoliasearch(options.ALGOLIA_ID, options.ALGOLIA_ADMIN_KEY);

    const syncFunctions = {};
    syncFunctions[`${collectionName}OnCreate_syncWithAlgolia`] = functions.firestore.document(`${collectionName}/{id}`).onCreate((snap, context) => {
        const data = snap.data();
        data.objectID = context.params.id;
      
        const index = client.initIndex(`${collectionName}`);
        return index.saveObject(data);
    });

    syncFunctions[`${collectionName}OnUpdate_syncWithAlgolia`] = functions.firestore.document(`${collectionName}/{id}`).onUpdate((change, context) => {
        const data = change.after.data();
        data.objectID = context.params.id;
      
        const index = client.initIndex(`${collectionName}`);
        return index.partialUpdateObject(data);
    });

    
    syncFunctions[`${collectionName}OnDelete_syncWithAlgolia`] = functions.firestore.document(`${collectionName}/{id}`).onDelete((change, context) => {
        const index = client.initIndex(`${collectionName}`);
        return index.deleteObject(context.params.id);
    });

    return syncFunctions;
}


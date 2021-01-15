# Firebase Algolia-sync
![](  =250x20 )
<img src="https://i.snipboard.io/Goj19x.jpg" alt="Firebase and Algolia logos" style="position: relative; left: -10px; margin-bottom: -30px"/>


This is a module that helps you sync firebase collections with Algolia very easily.

**TO BE USED IN A FIREBASE CLOUD FUNCTION INDEX.JS FILE**


```javascript
// CURRENT FILE: index.js of a firebase cloud function.

import * as SyncCollectionWithAlgolia from 'firebase-algolia-sync';
    // OR
const SyncCollectionWithAlgolia = require('firebase-algolia-sync');


const options = {
    ALGOLIA_ID: 'YOUR_ALGOLIA_ID',
    ALGOLIA_ADMIN_KEY: 'YOUR_ALGOLIA_ADMIN_KEY',
}

module.exports = {
    ...SyncCollectionWithAlgolia('myCollectionName', options)
};
```

the SyncCollectionWithAlgolia fucntion returns function which hook into onCreate, onUpdate and onDelete operations on a collection via the firebase could funciton API.

 <a href="http://webo-tech.com" style=" margin-left: 1px">
Developed by <img src="https://webo-tech.com/wp-content/uploads/2020/02/webo-logo.png" alt="WeboTech logo" height="40" style="position: relative; top: 8px;"/>
</a> 

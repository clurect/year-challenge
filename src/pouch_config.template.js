/*
* Rename to pouch_config.js and provide values for DatabaseAddress, DatabaseName
*/
const DatabaseAddress = '';
const DatabaseName = '';

import PouchDB from 'pouchdb';

const db = new PouchDB(DatabaseName);
PouchDB.sync(DatabaseName, DatabaseAddress, { live: true });

export {db}
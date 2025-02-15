import { LowSync, JSONFileSync } from 'lowdb';
import { join } from 'path';

// init
const file = join(__dirname, '../../db.json');
const adapter = new JSONFileSync(file);
const db = new LowSync(adapter);

// default structure
db.read();
db.data ||= { users: [], shoppingLists: [], items: [] };
db.write();

export default db;
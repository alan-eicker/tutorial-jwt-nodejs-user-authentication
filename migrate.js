const dotenv = require('dotenv-flow').config();
const sqlite = require('sqlite');
const dbPromise = sqlite.open(`${process.env.BASE_URL || './src'}/database.sqlite`);

(async () => {
  try {
    const db = await dbPromise;
    db.migrate({ force: 'last' });
    console.log('Migration complete.');
  } catch (err) {
    console.log('Error connection to database', err);
  }
})();
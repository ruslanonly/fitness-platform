const mongoose = require('mongoose')
const config = require('./index')
async function connect() {
	return await mongoose.connect(config.DATABASE.MONGO_URL, {
		dbName: config.DATABASE.MONGO_INITDB_DATABASE
	})
}

module.exports = {
    connect
}
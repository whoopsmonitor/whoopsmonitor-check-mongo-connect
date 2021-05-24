const { MongoClient } = require('mongodb')
const WM_CONNECTION_STRING = process.env.WM_CONNECTION_STRING

// Create a new MongoClient
const client = new MongoClient(WM_CONNECTION_STRING, {
  useUnifiedTopology: true
})

;(async function main() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })

    console.log('Successfully connected.')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(2)
  }
})()

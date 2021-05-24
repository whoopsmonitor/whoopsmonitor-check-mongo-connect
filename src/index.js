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
    console.log('Not connected.')
    process.exit(2)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})()

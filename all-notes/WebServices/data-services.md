# Data Services

![diagram](https://github.com/webprogramming260/.github/raw/main/profile/webServices/dataServices/dataService.jpg)
- SQL databases have served as the general purpose data service solution
- starting around 2010, specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applications
- often called NoSQL solutions because they do not use the general purpose relational database paradigms popularized by SQL databases
- popular data services

| Service       | Specialty             |
| ------------- | --------------------- |
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |

## MongoDB
- increases developer productivity by using JSON objects as its core data model
- made up of one or more collections that each contain JSON doc
- think of a collection as a large array of JavaScript objects, each with a unique ID
- sample of a collection of houses that are for rent
```
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```
- has no strict schema requirements
- collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing
- allows the schema of a collection to morph organically as the data model of the application evolves
- add a new field to a Mongo collection you just insert the field into the documents as desired
-  field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced
- query syntax for Mongo also follow a JavaScript-inspired flavor
```
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

### Using MongoDB in Your Application
- first install `mongodb` using ```npm install mongodb```
- use the MongoClient object to make a client connection to the database server
- requires a username, password, and the hostname of the database server
```
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```
- client connection you can then get a database object and from that a collection object
- collection object allows you to insert, and query for, docs
- do not have to do anything special to insert a JavaScript object as a Mongo doc
- just call the `insertOne` function on the collection object and pass it the JavaScript object
- database or collection does not exist, Mongo will automatically create them for you
- automatically be assigned a unique ID
```
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```
- query for documents you use the find function on the collection object
- `find` function is asynchronous and so we use the await keyword to wait for the promise to resolve before we write them out to the console
```
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```
- do not supply any parameters to the `find` function then it will return all documents in the collection
- only get back the single document that we previously inserted
```
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```
- provide a query and options to the `find` func
- example below we query for a property_type of Condo that has less than two bedrooms
- also specify the options to sort by descending price, and limit our results to the first 10 docs
```
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```
- query matches the document that we previously inserted and so we get the same result as before

## Managed Services
- managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria

### MongoDB Atlas
- major cloud providers offer multiple data services
- we will use [Atlas](https://www.mongodb.com/atlas/database)
- No credit card or payment is required to set up and use Atlas, as long as you stick to the shared cluster environment

![Atlas](https://github.com/webprogramming260/.github/raw/main/profile/webServices/dataServices/webServicesMongoSignUp.jpg)

-[setting up atlas](https://www.youtube.com/watch?v=daIH4o75KE8)

## Keeping Your Keys Out of Your Code
- load your credentials when the application executes
- JSON configuration file that contains the credentials that you dynamically load into the JavaScript that makes the database connection
- make dbConfig.json
```
{
  "hostname": "cs260.abcdefg.mongodb.net",
  "userName": "myMongoUserName",
  "password": "toomanysecrets"
}
```
- put this in database.json
```
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
```
- Make sure you include dbConfig.json in your .gitignore file so that it does not get pushed up to GitHub.

### Testing the Connection on Starup
- nice to know that your connection string is correct before your application attempts to access any data
- making an asynchronous request to ping the database
- fails then either the connection string is incorrect, the credentials are invalid, or the network is not working
```
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
```

## Using Mongo From Your Code
- you should be good to use Atlas from both your development and production environments
- test that things are working correctly with the following example
```
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```
- should do this
```
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```
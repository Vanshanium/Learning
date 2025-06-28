# MongoDB
MongoDB is a widely used open-source NoSQL database system designed for scalability and flexibility. It stores data in BSON (Binary JSON) documents, which allows for the representation of complex and hierarchical data structures. MongoDB is commonly chosen for modern web applications due to its high performance and its capability to efficiently manage large volumes of unstructured or semi-structured data.

## Database Commands

```bash
    show databases;         # Lists all available databases
    db                      # Displays the current database
    use new_database        # Switches to or creates a new database if it does not exist
    db.dropDatabase()       # Deletes the current database
```

## Collections

In MongoDB, collections are analogous to tables in relational databases. They store data as key-value pairs within documents, providing a flexible schema for data storage.

```bash

    show collections
    db.createCollection("Collection_name")
    db.Collection_name.drop()

    # Insertion.
    db.Collection_name.insertOne({key:value,key:value})
    db.Collection_name.insertMany([{key:value,key:value},{key:value,key:value},....])

    db.Collection_name.find({key:value})

```
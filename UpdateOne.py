from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://kjyp2605:admin123@cluster0.s4ul6fm.mongodb.net"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.vehicles

    # Get reference to 'accounts' collection
    cars_collection = db.vehicles

    # Filter
    document_to_update = {"_id": ObjectId("65f3024e79faa9f81c3a28b7")}

    # Update
    add_to_balance = {"$inc": {"cost": 100}}

    # Print original document
    pprint.pprint(cars_collection.find_one(document_to_update))

    # Write an expression that adds to the target account balance by the specified amount.
    result = cars_collection.update_one(document_to_update, add_to_balance)
    print("Documents updated: " + str(result.modified_count))

    # Print updated document
    pprint.pprint(cars_collection.find_one(document_to_update))


except Exception as e:
    print(e)
finally:
    client.close()

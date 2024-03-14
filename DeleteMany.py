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

    # Filter by ObjectId
    documents_to_delete = {"cost": {"$lt": 20000}}

    # Search for sample document before delete
    print("Searching for sample target document before delete: ")
    pprint.pprint(cars_collection.find_one(documents_to_delete))

    # Write an expression that deletes the target accounts.
    result = cars_collection.delete_many(documents_to_delete)

    # Search for sample document after delete
    print("Searching for sample target document after delete: ")
    pprint.pprint(cars_collection.find_one(documents_to_delete))

    print("Documents deleted: " + str(result.deleted_count))


except Exception as e:
    print(e)
finally:
    client.close()
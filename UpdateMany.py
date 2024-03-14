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
    db = client.Vehicles

    # Get reference to 'accounts' collection
    cars_collection = db.accounts

    # Filter
    select_car = {"vehicle_name": "Volvo",}

    # Print original document
    set_field = {"$set": {"minimum_cost": 35000}}

    # Write an expression that adds to the target account balance by the specified amount.
    result = cars_collection.update_many(select_car, set_field)

    # Print updated document
    print("Documents matched: " + str(result.matched_count))
    print("Documents updated: " + str(result.modified_count))
    pprint.pprint(cars_collection.find_one(select_car))

except Exception as e:
    print(e)
finally:
    client.close()
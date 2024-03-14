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
    car_collection = db.vehicles

    # inserting one Vehicle
    new_car = {
        "vehicle_name": "Volvo",
        "vehicle_id": "FSD5454FRG",
        "vehicle_color": "black",
        "cost": 35450,
    }

    # inserting one car
    doccument_to_find = {
        "_id": ObjectId("65f2ff0dc6601a121b8326d9")
    }

    # Write an expression that inserts the 'new_account' document into the 'accounts' collection.
    result = car_collection.insert_one(doccument_to_find)

    pprint.pprint(result)


except Exception as e:
    print(e)
finally:
    client.close()
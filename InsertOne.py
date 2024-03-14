
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
import pprint

uri = "mongodb+srv://kjyp2605:admin123@cluster0.s4ul6fm.mongodb.net"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.vehicles

    # Get reference to 'vehicles' collection
    car_collection = db.vehicles

    # inserting one Vehicle
    new_car = {
        "vehicle_name": "Volvo",
        "vehicle_id": "FSD5454FRG",
        "vehicle_color": "black",
        "cost": 35450,
    }

    # Write an expression that inserts the 'new_car' document into the 'vehicles' collection.
    result = car_collection.insert_one(new_car)

    document_id = result.inserted_id
    pprint.pprint(f"_id of inserted document: {document_id}")


except Exception as e:
    print(e)
finally:
    client.close()
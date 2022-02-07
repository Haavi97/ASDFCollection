from importlib.metadata import metadata


metadata = """{
    "name": "",
    "image": "",
    "description": "",
    "properties": {
        "symbol": "",
        "address": "",
        "royalty": "",
        "recipient": "",
        "IP_Rights": "",
        "createdAt": "",
        "collection": ""
    }
}"""

print("".join("{:02x}".format(ord(c)) for c in metadata))
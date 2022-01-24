from importlib.metadata import metadata


metadata = """{
  "properties": {
    "symbol": "TNFT",
    "royalty": "100",
    "recipient": "0x3c7aef7d580d82a679cc3b287934b894d99043db",
    "createdAt": "20:04:56 GMT+0200 (Ida-Euroopa standardaeg)",
    "collection": "Fantom Powered NFT Collection",
    "address": "0x3c7aef7d580d82a679cc3b287934b894d99043db",
    "IP_Rights": "https://enos.itcollege.ee/~fortin/tnft"
  },
  "name": "Some NFT",
  "image": "https://artion6.mypinata.cloud/ipfs/QmbL8y2PxgFTnWgGx6LPRxK3ircvmadrjYARZSupfCWrno",
  "description": "Arduino traffic light"
}"""

print("".join("{:02x}".format(ord(c)) for c in metadata))
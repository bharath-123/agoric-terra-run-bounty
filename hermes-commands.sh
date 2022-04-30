

# Creating a channel b/w bombay-12 and agoric chains
hermes create channel agoric bombay-12 --port-a transfer --port-b transfer -o unordered

# Restoring an agoric key
hermes keys restore agoric -p "m/44'/564'/0'/0/0" -m "mnemonic";

# Restoring a terra key
hermes keys restore bombay-12 -p "m/44'/330'/0'/0/0" -m "mnemonic"

# Transferring urun to terra
hermes tx raw ft-transfer bombay-12 agoric transfer channel-5 100000000 -o 1000 -n 3 -d urun

# agoric-terra-run-bounty

Run Token IBC denom: ibc/1F70B965BDA2F3D6E5244B00B70F4F2F620E76906931D97D209458476ADB76BD

RUN/UST pool address: terra18zatp3ds9ukp450k3nv2xr4k777fyrrfcckcxl
RUN/UST liquidity token address: terra1slpjy68zrve7fcpc8txun8arnqgmc98vahjury

IBC terra key: terra1se0zl9zna7lj6449lhx7d425kjz2j2ty6ss23v
IBC agoric key: agoric10vmns7y63qkevxh88zvv0eh608um407uwrwf6g

Terra network: bombay-12 which is the public test
Agoric network: agoric which is a local-chain I setup in my local machine

Liquidity provision tx: https://finder.terra.money/testnet/tx/9B8F73EEE39EF7BC500A8C40A17DF67258A47172F00AE80DCDF4D90ED3CE8196
Pool creation tx: https://finder.terra.money/testnet/tx/C1F78FF2515857C0F7D459DA45BCB98DA41711EBBE7BB125196F325FDBE2F0D3

Main Challenges:

1. Terra does not have a lot of public nodes with open grpc ports which are required for hermes. To work around this, we worked with figment to open their node grpc 
ports. But to access this we still have to pass an api key. To work around this, I hacked around ibc-rs to include api keys in the call. Future work will be to support
grpc/rest authentication which will required when we need to setup ibc relayers using private nodes.

2. Terra has a separate hd path. I faced issues when restoring terra keys as the mnemonic to pub key derivation in terra is different from how hermes derives public
keys from a mnemonic. We need to specify terra's hd path while restoring the keys which is m/44'/330'/0'/0/0 

Files:

hermes-config.toml: The config of the hermes relayer used to send RUN from agoric to terra. The hermes relayer was run on my local machine
hermes-commands.sh: The commands used to create the ibc-channel, restore terra/agoric keys and transfer tokens from agoric to Terra

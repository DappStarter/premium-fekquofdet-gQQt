require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note office pulp imitate problem sunset silly'; 
let testAccounts = [
"0x1f6ef385823cf63d87397f7e4d8161f3e021dffe5292f93d4c9e318ee8de329d",
"0x2b0d5a85b0f443a7c92bc1c8f2f94b238779814588289917409aa3b142ad9f52",
"0xacb62b5f296654f141c1e173891781c4bd3c2975f8b00968ba8c1b2790804caa",
"0x9252ecfa0d68ef9770141adc5ee241c0416980a88787ffd69b810904d884daea",
"0xfc743eb8195cdc270a18c983eaa70bc9b1dda267c2df9ada06d424e2ba6c0b8d",
"0xaf9c66524d853e4ba34e01ff4d55d95947da8da9029bf9f811a61986d4e4b81a",
"0xd25105f33efd867ebe05ace1e13ea40f708d41402a590aaa259fdb2b73235966",
"0x64389527b8557c6974740fcab52899e34d9c93bfcc04ff128301b30de0505503",
"0x137ae6ae8cc7983d2e58764d66172b71ed0a034fd5dc9f34292feb3a27530142",
"0x963c5306ce34595005df7698adf47f583a245b2fe3bb03abe13f224379d7047a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


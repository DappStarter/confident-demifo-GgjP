require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn prosper grace hero flower thank'; 
let testAccounts = [
"0x1081dac9aa0018270a864f5c1671d9d4062694c1e63ec676a8768baffab66838",
"0x90e7daa5f7d27ee66410f89648f62e1f359be439a11a1fc42d75a72af9a0cb8f",
"0xb38c928cb99f5681549266db98f39ea681bf1f0da2a9b82739a68012d69a9b8b",
"0x30319b5f8cc321db668eed5b8aeab003a5b86cdbda35d8e4ffdf5bf95e483773",
"0x6f1e1f9c50eaf6e8e1a0f42784c1d6e521c08e44aecde77d73a939619fcd8eb9",
"0xffce28c22a27324d7db242506f4d58c93416dfccc9e8ba624f5e70660e31a0de",
"0x09afae463da83d5872280eb57707f88954d71ef4d61ee2cf8f38f3acb45c43c3",
"0xf1770380a246a632dbb8be97b3d901c024185b5fe814258340c5ee220c6be782",
"0xbd072fa7478ab1ae487189513320c04899d7e7e6ed761edbbed38b11cdebcf88",
"0x1bbac6266dc359cd657a6d22f7d64006ae9840baa4e6b91c26cb65a079479497"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


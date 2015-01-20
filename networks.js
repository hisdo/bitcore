var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('fea503db'),
  addressVersion: 0x3F,
  privKeyVersion: 191,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('DDF24F884C380E5DECE4FA4902E809C1BD714E642CCBD58C3F10642804000000'),
    merkle_root: hex('D4212C552F872E40CE248CE150E8CF3867379E8FA350C54FFDD478ABA43468CB'),
    height: 0,
    nonce: 13067232,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(22), 0),
    timestamp: 1398300393,
    bits: 503578623,
  },
  dnsSeeds: [
    'dnsseed1.wampum.org',
    'dnsseed2.wampum.org',
    'dnsseed3.wampum.org'
  ],
  defaultClientPort: 4011
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 19112
};

  var crypto=require("crypto");
  var alice=crypto.createECDH('secp256k1');
  alice.generateKeys()
  var bob=crypto.createECDH('secp256k1');
  bob.generateKeys()
  var alice_Pub=alice.getPublicKey().toString('base64')
  var bob_Pub=bob.getPublicKey().toString('base64')
  var alice_shared_key=alice.computeSecret(bob_Pub,'base64','hex')
  var bob_shared_key=bob.computeSecret(alice_Pub,'base64','hex')
  console.log(alice_shared_key==bob_shared_key);
  console.log(alice_shared_key);
  console.log(bob_shared_key);
  

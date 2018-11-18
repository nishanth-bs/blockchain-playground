
//constructor function for blockchain
function Blockchain(){
  this.chain = [];
  this.newTransactions = [];
}

//class
//class Blockchain{
//  constructor(){

//  }


//  ** other methods
//}

Blockchain.prototype.createNewBlock = function( nonce, previousBlockHash, hash){
  //our each newly created block will have these data
  //block object
  const newBlock = {
    index : this.chain.length +1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

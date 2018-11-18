
//constructor function for blockchain
function Blockchain(){
  this.chain = [];
  this.pendingTransactions = [];
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
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function{
  return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
  //pending transactions which aren't recorder into the blockchainyet
  // they get validated when  a new block is created
  //transaction object
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient : recipient
  };

  this.pendingTransactions.push(newTransaction);

  //number of block this transaction will be added to
  return this.getLastBlock()['index'] + 1;
}

module.exports = Blockchain;

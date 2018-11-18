const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, '0asdfasdfl', 'dsfljasf0adsf');

bitcoin.createNewTransaction(200,'Nishanthasdfas', 'Raghavendraadsfas');
bitcoin.createNewBlock(23423,'afasdfasdfafa','adsfasdg');
//after mining the second block here will contain only one transactions
console.log(bitcoin.chain[1]);


bitcoin.createNewTransaction(200,'Nishanthasdfas', 'Raghavendraadsfas');
bitcoin.createNewTransaction(200,'Nishanthasdfas', 'Raghavendraadsfas');
bitcoin.createNewTransaction(200,'Nishanthasdfas', 'Raghavendraadsfas');
bitcoin.createNewBlock(2389, '0asdfasdfl', 'dsfljasf0adsf');
//bitcoin.createNewBlock()
console.log(bitcoin.chain[2]);
console.log(bitcoin);

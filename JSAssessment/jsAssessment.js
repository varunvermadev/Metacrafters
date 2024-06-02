// 1. create a variable to hold  NFT's
const NFTs = [];

// 2. Generating Unique IDs
function generateUniqueID(date) {

    return (new Date(date).getTime()+ Math.floor(Math.random()*200 + 100)).toString().slice(-5);
}
generateID('2024-01-01')

//3. Minting NFT

function mintNFT(_name,_owner,_creator,_description,_creationDate,_blockchain) {
    const NFT = {
        'id': generateID(_creationDate),
        'name': _name,
        'owner': _owner,
        'creator': _creator,
        'description': _description,
        'creationDate': _creationDate,
        'blockchain': _blockchain
    };

    NFTs.push(NFT);
    console.log(`Minted : ${NFT.name} of ${NFT.owner} created`);
    console.log('\n');
}

// 4. Listing NFTs

function listNFTs() {
    NFTs.forEach(NFT => {
        Object.entries(NFT).forEach(entry => {
            console.log(`${entry[0].padEnd(15,' ')} : ${entry[1]} `);
        })
        console.log('\n');
    })
}

// 5. Geting Total Supply

function getTotalSupply() {
    return NFTs.length;
}

//6. Searching NFTs by id
function findNFT(id) {
    const nft = NFTs.find(NFT => NFT.id == id);
    if (nft) {
        console.log(`NFT is found \n`);
    }
    else {
        console.log('NO NFT is found having id ' + id + '\n');
    }
    return nft;
}

//7. Transfering Ownership of NFT

function transferNFT(nft,newOwner) {
    const validNFT = findNFT(nft.id);
    if (!validNFT) {
        console.log('No such NFT exist.\n');
        return;
    }
    validNFT.owner = newOwner;
    console.log(`New Owner of this  ${validNFT.name} is ${newOwner}\n`);    
}
//8. Deleting  NFT

function deleteNFT(nft) {
    const validNFT = findNFT(nft.id);
    if (!validNFT) {
        console.log('No such NFT exist.\n');
        return;
    }

    const index = NFTs.findIndex(NFT => NFT.id = validNFT.id);
    NFTs.splice(index, 1);
    console.log(validNFT.name, ' is successfully deleted \n');

}




// Function calls



mintNFT('Beeple: Everydays', 'Alice', 'Beeple', 'A collection of 5000 digital images', '2021-03-11', 'Ethereum');
mintNFT('CryptoPunk #7804', 'Bob', 'Larva Labs', 'An alien wearing a cap and smoking a pipe', '2021-03-10', 'Ethereum');
mintNFT('Bored Ape Yacht Club #2087', 'Charlie', 'Yuga Labs', 'A bored ape with a unique fur pattern', '2022-08-07', 'Ethereum');
mintNFT('Decentraland Parcel', 'Diana', 'Decentraland Foundation', 'A plot of virtual land in Decentraland', '2021-02-20', 'Ethereum');
mintNFT('Axie Infinity: Axie #458', 'Eve', 'Sky Mavis', 'A rare axie used in the Axie Infinity game', '2021-07-15', 'Ronin');

listNFTs();

console.log(`Total NFTs minted are: ${getTotalSupply()}\n`);

const realID = NFTs[2].id;
const fakeID = '99999';
findNFT(realID);
findNFT(fakeID);

transferNFT(NFTs[2], 'Frank');

deleteNFT(NFTs[3]);

console.log(`Total NFTs minted are: ${getTotalSupply()}\n`);

listNFTs();





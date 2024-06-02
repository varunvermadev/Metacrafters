/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created

Additional Features : 
1.Unique Id to Every NFT
3.Deleting Metadata of any NFT
4.Transfering Ownership Of NFTs
5.Searching NFT in NFTs

*/

// 1. create a variable to hold your NFT's
const NFTs = [];

// 2. Generating Unique IDs

function generateID() {
    const date = new Date();
    return (date.getTime() + Math.floor(Math.random()*200 + 100)).toString().slice(-5);
}

//3. Minting NFT

function mintNFT(_name,_owner,_creator,_description,_creationDate,_blockchain) {
    const NFT = {
        'id': generateID(),
        'name': _name,
        'owner': _owner,
        'creator': _creator,
        'description': _description,
        'creationDate': _creationDate,
        'blockchain' : _blockchain
    }

    NFTs.push(NFT);
    console.log(`Minted : ${NFT.name} of ${NFT.owner} created in ${NFT.creationDate}`);
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
    console.log(`New Owner of this NFT ${validNFT.name} is ${newOwner}\n`);    
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

// Minting NFTs
mintNFT('First NFT', 'Alice', 'Alice', 'This is the first NFT', '2024-01-01', 'Ethereum');
mintNFT('Second NFT', 'Bob', 'Alice', 'This is the second NFT', '2024-01-02', 'Ethereum');
mintNFT('Third NFT', 'Charlie', 'Bob', 'This is the third NFT', '2024-01-03', 'Binance Smart Chain');
mintNFT('Fourth NFT', 'Diana', 'Charlie', 'This is the fourth NFT', '2024-01-04', 'Polygon');
mintNFT('Fifth NFT', 'Eve', 'Diana', 'This is the fifth NFT', '2024-01-05', 'Solana');

// Listing All NFTs
listNFTs();

// Total NFTs Created
console.log(`Total NFTs minted are: ${getTotalSupply()}\n`);

// Finding NFTs by ID
const realID = NFTs[2].id;  // Assuming this ID exists
const fakeID = '99999';     // Assuming this ID does not exist
findNFT(realID);
findNFT(fakeID);

// Transferring Ownership of an NFT
transferNFT({id: realID}, 'Frank');  // Transfer the third NFT to 'Frank'

// Deleting an NFT
deleteNFT({id: realID});  // Delete the third NFT

// Listing All NFTs after deletion to see the changes
listNFTs();

// Total NFTs Created after deletion
console.log(`Total NFTs minted are: ${getTotalSupply()}\n`);

// Example of transferring ownership and then deleting
const secondNFTID = NFTs[1].id; // Assuming this ID exists
transferNFT({id: secondNFTID}, 'Grace');  // Transfer the second NFT to 'Grace'
deleteNFT({id: secondNFTID});  // Delete the second NFT

// Listing All NFTs after transfer and deletion
listNFTs();

// Total NFTs Created after transfer and deletion
console.log(`Total NFTs minted are: ${getTotalSupply()}\n`);



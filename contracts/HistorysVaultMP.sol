//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

//TODO: testing import, remove for production
import "hardhat/console.sol";

// the market place
contract HistorysVault is ReentrancyGuard {
    
  using Counters for Counters.Counter;
  Counters.Counter private _artifactIds;
  Counters.Counter private _artifactsSold;

//@dev: strcut for the ArtifactItem
// an ArtifactItem is the struct that will keep track of the NFTs for the marketplace 
  struct ArtifactItem {
    uint artifactId;
    uint256 artifactPrice;
    uint256 ArtifactTokenId;
    address ArtifactNFTContract;
    address payable currentArtifactOwner;
    address payable OriginalArtifactOwner;
  }


//@dev: mapp the NFT ID to it's struct 
  mapping(uint256 => ArtifactItem) private IdForArtifactItem;


//@dev: event
  event ArtifactItemCreated (
    uint indexed artifactId,
    uint256 indexed ArtifactTokenId,
    uint256 artifactPrice,
    address indexed ArtifactNFTContract,
    address currentArtifactOwner,
    address OriginalArtifactOwner
  );


//@dev: 
  function getArtifactItem(uint256 artifactItemId) public view returns (ArtifactItem memory) {
    return IdForArtifactItem[artifactItemId];
  }

  function createArtifactitem(
    address ArtifactNFTContract,
    uint256 ArtifactTokenId,
    uint256 artifactPrice
  ) public payable nonReentrant {
    require(artifactPrice > 0, "artifactPrice must be at least 1 wei");

    _artifactIds.increment();
    uint256 artifactId = _artifactIds.current();
  
    IdForArtifactItem[artifactId] =  ArtifactItem (
      artifactId,
      ArtifactTokenId,
      artifactPrice,
      ArtifactNFTContract,
      payable(msg.sender),
      payable(address(0))
    );

    IERC721(ArtifactNFTContract).transferFrom(msg.sender, address(this), ArtifactTokenId);

    emit ArtifactItemCreated(
      artifactId,
      ArtifactTokenId,
      artifactPrice,
      ArtifactNFTContract,
      msg.sender,
      address(0)
    );
  }

  function createArtifactSale(
    address ArtifactNFTContract,
    uint256 artifactId
    ) public payable nonReentrant {
    uint artifactPrice = IdForArtifactItem[artifactId].artifactPrice;
    uint ArtifactTokenId = IdForArtifactItem[artifactId].ArtifactTokenId;
    require(msg.value == artifactPrice, "Please submit the asking artifactPrice in order to complete the purchase");

    IdForArtifactItem[artifactId].currentArtifactOwner.transfer(msg.value);
    IERC721(ArtifactNFTContract).transferFrom(address(this), msg.sender, ArtifactTokenId);
    IdForArtifactItem[artifactId].OriginalArtifactOwner = payable(msg.sender);
    _artifactsSold.increment();
  }

  function fetchArtifactItem(uint artifactId) public view returns (ArtifactItem  memory) {
    ArtifactItem  memory item = IdForArtifactItem[artifactId];
    return item;
  }

  function fetchArtifactItems() public view returns (ArtifactItem [] memory) {
    uint itemCount = _artifactIds.current();
    uint unsoldItemCount = _artifactIds.current() - _artifactsSold.current();
    uint currentIndex = 0;

    ArtifactItem [] memory artifacts = new ArtifactItem [](unsoldItemCount);
    for (uint i = 0; i < itemCount; i++) {
      if (IdForArtifactItem[i + 1].OriginalArtifactOwner == address(0)) {
        uint currentId = IdForArtifactItem[i + 1].artifactId;
        ArtifactItem  storage currentItem = IdForArtifactItem[currentId];
        artifacts[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
   
    return artifacts;
  }

  function fetchMyArtifacts() public view returns (ArtifactItem [] memory) {
    uint totalItemCount = _artifactIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (IdForArtifactItem[i + 1].OriginalArtifactOwner == msg.sender) {
        itemCount += 1;
      }
    }

    ArtifactItem [] memory artifacts = new ArtifactItem [](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (IdForArtifactItem[i + 1].OriginalArtifactOwner == msg.sender) {
        uint currentId = IdForArtifactItem[i + 1].artifactId;
        ArtifactItem  storage currentItem = IdForArtifactItem[currentId];
        artifacts[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
   
    return artifacts;
  }
}
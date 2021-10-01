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

//@dev: strcut for the ArtifactMPitem
// an ArtifactMPitem is the struct that will keep track of the NFTs for the marketplace 
  struct ArtifactMPitem {
    uint artifactId;
    uint256 artifactPrice;
    uint256 ArtifactTokenId;
    address ArtifactNFTContract;
    address payable currentArtifactOwner;
    address payable OriginalArtifactOwner;
  }


//@dev: mapp the NFT ID to it's struct 
  mapping(uint256 => ArtifactMPitem) private IdForArtifactMPItem;


//@dev: event
  event ArtifactMPItemCreated (
    uint indexed artifactId,
    uint256 indexed ArtifactTokenId,
    uint256 artifactPrice,
    address indexed ArtifactNFTContract,
    address currentArtifactOwner,
    address OriginalArtifactOwner
  );

  event ArtifactItemSold (
    uint256 id, 
    address buyer, 
    uint256 askingPrice
  );


//@dev: 
  function getArtifactMPItem(uint256 artifactItemId) public view returns (ArtifactMPitem memory) {
    return IdForArtifactMPItem[artifactItemId];
  }


// @dev: transfer the NFT from user to the Market 
  function createArtifactitem(
    address ArtifactNFTContract,
    uint256 ArtifactTokenId,
    uint256 artifactPrice
  ) public payable nonReentrant returns (uint256) {
    require(artifactPrice > 0, "artifactPrice must be at least 1 wei");

    _artifactIds.increment();
    uint256 artifactId = _artifactIds.current();
  
    IdForArtifactMPItem[artifactId] =  ArtifactMPitem (
      artifactId,
      ArtifactTokenId,
      artifactPrice,
      ArtifactNFTContract,
      payable(msg.sender),
      payable(address(0))
    );

    IERC721(ArtifactNFTContract).transferFrom(msg.sender, address(this), ArtifactTokenId);

    emit ArtifactMPItemCreated(
      artifactId,
      ArtifactTokenId,
      artifactPrice,
      ArtifactNFTContract,
      msg.sender,
      address(0)
    );
    return artifactId;
  }

  function createArtifactSale(
    address ArtifactNFTContract,
    uint256 artifactId
    ) public payable nonReentrant {
    uint artifactPrice = IdForArtifactMPItem[artifactId].artifactPrice;
    uint ArtifactTokenId = IdForArtifactMPItem[artifactId].ArtifactTokenId;
    require(msg.value == artifactPrice, "Please submit the asking artifact Price in order to complete the purchase");

    IdForArtifactMPItem[artifactId].currentArtifactOwner.transfer(msg.value);
    IERC721(ArtifactNFTContract).transferFrom(address(this), msg.sender, ArtifactTokenId);
    IdForArtifactMPItem[artifactId].OriginalArtifactOwner = payable(msg.sender);
    _artifactsSold.increment();

    emit ArtifactItemSold(ArtifactTokenId, msg.sender, artifactPrice);
  }

  function fetchArtifactItem(uint artifactId) public view returns (ArtifactMPitem  memory) {
    ArtifactMPitem  memory item = IdForArtifactMPItem[artifactId];
    return item;
  }

  function fetchArtifactItems() public view returns (ArtifactMPitem [] memory) {
    uint itemCount = _artifactIds.current();
    uint unsoldItemCount = _artifactIds.current() - _artifactsSold.current();
    uint currentIndex = 0;

    ArtifactMPitem [] memory artifacts = new ArtifactMPitem [](unsoldItemCount);
    for (uint i = 0; i < itemCount; i++) {
      if (IdForArtifactMPItem[i + 1].OriginalArtifactOwner == address(0)) {
        uint currentId = IdForArtifactMPItem[i + 1].artifactId;
        ArtifactMPitem  storage currentItem = IdForArtifactMPItem[currentId];
        artifacts[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
   
    return artifacts;
  }

  function fetchMyArtifacts() public view returns (ArtifactMPitem [] memory) {
    uint totalItemCount = _artifactIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (IdForArtifactMPItem[i + 1].OriginalArtifactOwner == msg.sender) {
        itemCount += 1;
      }
    }

    ArtifactMPitem [] memory artifacts = new ArtifactMPitem [](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (IdForArtifactMPItem[i + 1].OriginalArtifactOwner == msg.sender) {
        uint currentId = IdForArtifactMPItem[i + 1].artifactId;
        ArtifactMPitem  storage currentItem = IdForArtifactMPItem[currentId];
        artifacts[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }

   
    return artifacts;
  }
}
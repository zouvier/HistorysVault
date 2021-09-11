// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//TODO: testing import, remove for production
import "hardhat/console.sol";



contract Artifact is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _ArtifactTokenIds;
    address HISAddress;

//TODO: figure out the addy for History's Vault main contract.
    constructor(address mpAddress) ERC721("History's Vault", "HIS") {
        HISAddress = mpAddress;
    }

    function createArtifactToken(string memory tokenURI) public returns (uint) {
        _ArtifactTokenIds.increment();
        uint256 newArtifactTokenId = _ArtifactTokenIds.current();

        _mint(msg.sender, newArtifactTokenId);
        _setTokenURI(newArtifactTokenId, tokenURI);
        setApprovalForAll(HISAddress, true);
        return newArtifactTokenId;
    }
}
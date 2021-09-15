var ArtifactContractABI = [
{
  "inputs": [
    {
      "internalType": "address",
      "name": "mpAddress",
      "type": "address"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "approved",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "Approval",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "operator",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }
  ],
  "name": "ApprovalForAll",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "Transfer",
  "type": "event"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "getApproved",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    }
  ],
  "name": "isApprovedForAll",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [],
  "name": "name",
  "outputs": [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "ownerOf",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "_data",
      "type": "bytes"
    }
  ],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    },
    {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }
  ],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  "name": "supportsInterface",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [],
  "name": "symbol",
  "outputs": [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "tokenURI",
  "outputs": [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "string",
      "name": "_tokenURI",
      "type": "string"
    }
  ],
  "name": "createArtifactToken",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
}
];

var HistorysVaultContractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "artifactId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "ArtifactTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "artifactPrice",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "ArtifactNFTContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "currentArtifactOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "OriginalArtifactOwner",
          "type": "address"
        }
      ],
      "name": "ArtifactItemCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "artifactItemId",
          "type": "uint256"
        }
      ],
      "name": "getArtifactItem",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "artifactId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "artifactPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ArtifactTokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "ArtifactNFTContract",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "currentArtifactOwner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "OriginalArtifactOwner",
              "type": "address"
            }
          ],
          "internalType": "struct HistorysVault.ArtifactItem",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "ArtifactNFTContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ArtifactTokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "artifactPrice",
          "type": "uint256"
        }
      ],
      "name": "createArtifactitem",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "ArtifactNFTContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "artifactId",
          "type": "uint256"
        }
      ],
      "name": "createArtifactSale",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "artifactId",
          "type": "uint256"
        }
      ],
      "name": "fetchArtifactItem",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "artifactId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "artifactPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ArtifactTokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "ArtifactNFTContract",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "currentArtifactOwner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "OriginalArtifactOwner",
              "type": "address"
            }
          ],
          "internalType": "struct HistorysVault.ArtifactItem",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "fetchArtifactItems",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "artifactId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "artifactPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ArtifactTokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "ArtifactNFTContract",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "currentArtifactOwner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "OriginalArtifactOwner",
              "type": "address"
            }
          ],
          "internalType": "struct HistorysVault.ArtifactItem[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "fetchMyArtifacts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "artifactId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "artifactPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ArtifactTokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "ArtifactNFTContract",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "currentArtifactOwner",
              "type": "address"
            },
            {
              "internalType": "address payable",
              "name": "OriginalArtifactOwner",
              "type": "address"
            }
          ],
          "internalType": "struct HistorysVault.ArtifactItem[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

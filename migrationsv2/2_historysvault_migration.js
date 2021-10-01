const HistorysVault = artifacts.require("HistorysVault");
const Artifact = artifacts.require("Artifact");

/*
module.exports = async function (deployer, development) {
  deployer.deploy(HistorysVault)
  deployer.deploy(Artifact,HistorysVault.address);
  //await deployer.deploy(Artifact,HistorysVault.address)

};
*/
module.exports = (deployer, network) => {
  deployer.deploy(HistorysVault).then(function() {
    return deployer.deploy(Artifact, HistorysVault.address)
  });
};

//@dev: code for artifact export
/*
const Artifact = artifacts.require("Artifact");

module.exports = function (deployer) {
  deployer.deploy(Artifact,'Insert Historys Vault Address here');
};
*/
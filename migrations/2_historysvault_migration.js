const HistorysVault = artifacts.require("HistorysVault");

module.exports = function (deployer) {
  deployer.deploy(HistorysVault);
};

var Ratings = artifacts.require('./Rating.sol');

module.exports = function(deployer) {
    deployer.deploy(Ratings, ["Star wars", "Gifted", "Iron first"], {gas: 6700000});
}
const hre = require("hardhat");
const { ethers } = require("hardhat");

async function deploy_lr1155() {
  console.log("Deploying LR1155 contract...");

  const LandRockerERC1155 = await ethers.getContractFactory(
    "LandRockerERC1155"
  );
  const landRockerERC1155Instance = await LandRockerERC1155.deploy();
  await landRockerERC1155Instance.deployed();

  console.log(
    "LR1155 Contract deployed to:",
    landRockerERC1155Instance.address
  );

  console.log("---------------------------------------------------------");

  // await hre.run("laika-sync", {
  //   contract: "LRTPreSale",
  //   address: lrtPreSaleInstance.address,
  // });

  return landRockerERC1155Instance.address;
}
module.exports = deploy_lr1155;

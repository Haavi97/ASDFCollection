module.exports = async function({
    getNamedAccounts,
    deployments,
    network
}) {

    console.log('network: ', network.name);
    const { deploy } = deployments;
    console.log(`Deployments: `, deploy);

    const { deployer, dev } = await getNamedAccounts();

    const chainId = await getChainId();
    console.log("On chain:", chainId.toString());

    console.log(`Deployer's address: `, deployer);
    console.log(`Dev's address: `, dev);



    if (dev) {
        const nfst = await deploy("NFST", {
            from: dev,
            log: true,
            args: ["NFST", "NFST"],
            deterministicDeployment: false,
        });
        console.log("Deployed collection: ", nfst.address);
        const collec = await ethers.getContractAt(nfst.abi, nfst.address);
        console.log("Collection contract retrieved");
        await collec.mint(deployer, 3, 3, 0x0);
    } else {
        console.log("Didn't get any deployer")
    }
}

module.exports.tags = ["NFST"];
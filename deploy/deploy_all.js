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
        const { asdfCollection } = await deploy("ASDFCollection", {
            from: dev,
            log: true,
            args: ["ASDF Collection 2", "ASDF"],
            deterministicDeployment: false,
        });
    } else {
        console.log("Didn't get any deployer")
    }
}

module.exports.tags = ["ASDFCollection2"];
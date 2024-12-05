const LPETH_CONTRACT = "0xF3a75E087A92770b4150fFF14c6d36FB07796252"

async function tvl(api) {
    const liabilities = await api.call({
        abi: 'uint256:liabilities',
        target: LPETH_CONTRACT,
    })

    api.add(LPETH_CONTRACT, liabilities)
}

module.exports = {
    methodology: 'Counts the amount of deposited ETH in the LPETH contract.',
    start: '1729496117',
    ethereum: {
        tvl
    }
}
export const theme = {
    colors: {
        yellow01: "#ad9900",
        yellow02: "#ad990025",
        blue01: "#112255cc",
        blue02: "#112255ff",
    },
};

export const postABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_message",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_date",
                type: "uint256",
            },
        ],
        name: "createPost",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getPosts",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "message",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "date",
                        type: "uint256",
                    },
                ],
                internalType: "struct PostContract.Post[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

export const deployedContractNetwork = {
    ropsten: "0xEBb37567011aa04C408cd5cBEa40E7BD29E8504B",
    goerli: "0xCcA8161efc9Eff9Aa08fc5F1193bA86aC2C6aBe0",
};

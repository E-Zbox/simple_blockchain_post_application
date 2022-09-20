export const getPosts = async (contract) => await contract.getPosts();

export const createPost = async (contract, _name, _message) =>
    await contract.createPost(_name, _message, Date.now());

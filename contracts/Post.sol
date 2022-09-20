// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract PostContract {
    struct Post {
        string name;
        string message;
        uint256 date;
    }

    mapping(address => Post[]) posts;

    function createPost(
        string memory _name,
        string memory _message,
        uint256 _date
    ) public {
        Post memory newPost = Post(_name, _message, _date);
        posts[msg.sender].push(newPost);
    }

    function getPosts() public view returns (Post[] memory) {
        return posts[msg.sender];
    }
}

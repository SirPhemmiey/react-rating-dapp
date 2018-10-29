pragma solidity ^0.4.24;

contract Rating {

    mapping (bytes32 => uint8) public receivedRating;

    /**
    We will use an array of bytes32 to store movie list
     */
    bytes32[] public movieList;

    /**
    We will create a contructor that will be called when this contract is deployed on the contract
     */
    constructor(bytes32[] movieNames) public {
        movieList = movieNames;
    }

    //this function will return total votes for a movie
    function totalVotesFor(bytes32 movieName) public view returns (uint8) {
        return receivedRating[movieName];
    }

    //this function will increment the rating of a movie
    function voteFor(bytes32 movieName) public {
        receivedRating[movieName]++;
    }
}
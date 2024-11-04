// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CredentialManager is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Credential {
        string credentialName;
        string organization;
        uint256 dateIssued;
        string ipfsHash;
        string status; // Status can be "Pending", "Accepted", or "Rejected"
    }

    // Mapping from user address to their credentials array
    mapping(address => Credential[]) public userCredentials;

    // Event emitted when a new credential is added
    event CredentialAdded(address indexed user, uint256 index);

    // Event emitted when a credential is reviewed
    event CredentialReviewed(address indexed user, uint256 index, string status);

    // Constructor to set the ERC721 token name and symbol, and initial owner
    constructor(address initialOwner) ERC721("CredentialToken", "CTKN") Ownable(initialOwner) {}

    // Function to add a new credential
    function addCredential(
        string memory _credentialName,
        string memory _organization,
        uint256 _dateIssued,
        string memory _ipfsHash
    ) public {
        Credential memory newCredential = Credential({
            credentialName: _credentialName,
            organization: _organization,
            dateIssued: _dateIssued,
            ipfsHash: _ipfsHash,
            status: "Pending" // Initial status
        });

        userCredentials[msg.sender].push(newCredential);
        emit CredentialAdded(msg.sender, userCredentials[msg.sender].length - 1);
    }

    // Function to get a specific credential
    function getCredential(address _user, uint256 _index) public view returns (
        string memory,
        string memory,
        uint256,
        string memory,
        string memory
    ) {
        require(_index < userCredentials[_user].length, "Invalid credential index");
        Credential memory cred = userCredentials[_user][_index];
        return (
            cred.credentialName,
            cred.organization,
            cred.dateIssued,
            cred.ipfsHash,
            cred.status
        );
    }

    // Function to accept a credential (only contract owner can call this)
    function acceptCredential(address _user, uint256 _index) public onlyOwner {
        require(_index < userCredentials[_user].length, "Invalid credential index");
        Credential storage cred = userCredentials[_user][_index];
        require(
            keccak256(bytes(cred.status)) == keccak256(bytes("Pending")),
            "Credential must be in 'Pending' status"
        );
        cred.status = "Accepted";
        emit CredentialReviewed(_user, _index, "Accepted");

        // Mint an ERC721 token to represent the accepted credential
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(_user, newTokenId);
    }

    // Function to reject a credential (only contract owner can call this)
    function rejectCredential(address _user, uint256 _index) public onlyOwner {
        require(_index < userCredentials[_user].length, "Invalid credential index");
        Credential storage cred = userCredentials[_user][_index];
        require(
            keccak256(bytes(cred.status)) == keccak256(bytes("Pending")),
            "Credential must be in 'Pending' status"
        );
        cred.status = "Rejected";
        emit CredentialReviewed(_user, _index, "Rejected");
    }

    // Function to get all credentials with "Pending" status for a user
    function getPendingCredentials(address _user) public view returns (Credential[] memory) {
        return _getCredentialsByStatus(_user, "Pending");
    }

    // Function to get all credentials with "Accepted" status for a user
    function getAcceptedCredentials(address _user) public view returns (Credential[] memory) {
        return _getCredentialsByStatus(_user, "Accepted");
    }

    // Function to get all credentials with "Rejected" status for a user
    function getRejectedCredentials(address _user) public view returns (Credential[] memory) {
        return _getCredentialsByStatus(_user, "Rejected");
    }

    // Internal function to filter credentials by status
    function _getCredentialsByStatus(address _user, string memory _status) internal view returns (Credential[] memory) {
        uint256 count = 0;
        uint256 totalCredentials = userCredentials[_user].length;

        // Count how many credentials match the given status
        for (uint256 i = 0; i < totalCredentials; i++) {
            if (keccak256(bytes(userCredentials[_user][i].status)) == keccak256(bytes(_status))) {
                count++;
            }
        }

        // Create a new array to hold the matching credentials
        Credential[] memory filteredCredentials = new Credential[](count);
        uint256 index = 0;

        // Populate the filtered array with matching credentials
        for (uint256 i = 0; i < totalCredentials; i++) {
            if (keccak256(bytes(userCredentials[_user][i].status)) == keccak256(bytes(_status))) {
                filteredCredentials[index] = userCredentials[_user][i];
                index++;
            }
        }

        return filteredCredentials;
    }

}
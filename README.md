# HAUthentiCred: An Ethereum-Based Academic Credential Storage

A blockchain-based credential verification system for academic institutions, built on Ethereum. HAUthentiCred enables secure, transparent, and immutable storage of academic credentials while facilitating easy verification by authorized parties.

## Features

- **Blockchain-Based Verification**: Leverage Ethereum's immutability for secure credential storage
- **Dual User Roles**: 
  - Students can submit and manage their credentials
  - Professors can verify and validate submitted credentials
- **MetaMask Integration**: Secure wallet connection for blockchain interactions
- **NFT Integration**: Verified credentials are minted as ERC721 tokens
- **Real-Time Status Tracking**: Monitor credential verification status
- **User-Friendly Interface**: Clean and intuitive web interface

## Technology Stack

- **Frontend**: HTML, JavaScript, CSS
- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum
- **Web3 Integration**: ethers.js
- **Wallet**: MetaMask
- **Token Standard**: ERC721

## Prerequisites

- Node.js (v12 or higher)
- MetaMask browser extension
- Access to an Ethereum network (testnet recommended for testing)

## Usage

### For Students

1. **Connect Wallet**:
   - Click "Connect to MetaMask"
   - Select "Student" role
   - Complete profile setup

2. **Submit Credentials**:
   - Click "Add Credential"
   - Fill in credential details:
     - Credential Name
     - Issuing Organization
     - Date Issued
     - IPFS Hash

3. **Monitor Status**:
   - View all credentials
   - Check pending verifications
   - Track accepted/rejected credentials

### For Professors

1. **Connect Wallet**:
   - Click "Connect to MetaMask"
   - Select "Professor" role
   - Complete profile setup

2. **Verify Credentials**:
   - View pending verifications
   - Accept or reject credentials
   - Review verification history

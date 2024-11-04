// ABI of the CredentialManager contract (abbreviated for brevity)
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "acceptCredential",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_credentialName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_organization",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_dateIssued",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
            }
        ],
        "name": "addCredential",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "initialOwner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "CredentialAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "status",
                "type": "string"
            }
        ],
        "name": "CredentialReviewed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "rejectCredential",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getAcceptedCredentials",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "credentialName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "organization",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dateIssued",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    }
                ],
                "internalType": "struct CredentialManager.Credential[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getCredential",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getPendingCredentials",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "credentialName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "organization",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dateIssued",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    }
                ],
                "internalType": "struct CredentialManager.Credential[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getRejectedCredentials",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "credentialName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "organization",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dateIssued",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    }
                ],
                "internalType": "struct CredentialManager.Credential[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userCredentials",
        "outputs": [
            {
                "internalType": "string",
                "name": "credentialName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "organization",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "dateIssued",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Contract address (replace with your deployed contract address)
const contractAddress = "0xc227Ad2B543F6b514E18b2f5ea8E1473528c8370";

let provider, signer, contract, currentAccount;

// Connect to MetaMask
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            currentAccount = await signer.getAddress();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            document.getElementById('connectWallet').classList.add('hidden');
            document.getElementById('profileSetup').classList.remove('hidden');
        } catch (error) {
            console.error("Failed to connect to MetaMask:", error);
        }
    } else {
        console.log('Please install MetaMask!');
    }
}

// Save user profile
function saveProfile() {
    const userType = document.getElementById('userType').value;
    const userName = document.getElementById('userName').value;
    const userIdNumber = document.getElementById('userIdNumber').value;

    localStorage.setItem('userType', userType);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userIdNumber', userIdNumber);

    document.getElementById('profileSetup').classList.add('hidden');
    if (userType === 'student') {
        document.getElementById('studentPortal').classList.remove('hidden');
    } else {
        document.getElementById('professorPortal').classList.remove('hidden');
    }
}

// Add a new credential
async function addCredential() {
    const credentialName = document.getElementById('credentialName').value;
    const organization = document.getElementById('organization').value;
    const dateIssued = new Date(document.getElementById('dateIssued').value).getTime() / 1000; // Convert to Unix timestamp
    const ipfsHash = document.getElementById('ipfsHash').value;

    try {
        const tx = await contract.addCredential(credentialName, organization, dateIssued, ipfsHash);
        await tx.wait();
        console.log("Credential added successfully");
        // Clear the form
        document.getElementById('credentialName').value = '';
        document.getElementById('organization').value = '';
        document.getElementById('dateIssued').value = '';
        document.getElementById('ipfsHash').value = '';
    } catch (error) {
        console.error("Failed to add credential:", error);
    }
}

// View credentials (for students)
async function viewCredentials() {
    try {
        const credentials = await contract.getAcceptedCredentials(currentAccount);
        const tableBody = document.querySelector('#credentialsTable tbody');
        tableBody.innerHTML = '';
        credentials.forEach(cred => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = cred.credentialName;
            row.insertCell(1).textContent = cred.organization;
            row.insertCell(2).textContent = new Date(cred.dateIssued * 1000).toLocaleDateString();
            row.insertCell(3).textContent = cred.status;
        });
        document.getElementById('credentialsList').classList.remove('hidden');
    } catch (error) {
        console.error("Failed to fetch credentials:", error);
    }
}

// View pending credentials (for students)
async function viewPendingCredentials() {
    try {
        const pendingCredentials = await contract.getPendingCredentials(currentAccount);
        const tableBody = document.querySelector('#credentialsTable tbody');
        tableBody.innerHTML = '';
        pendingCredentials.forEach(cred => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = cred.credentialName;
            row.insertCell(1).textContent = cred.organization;
            row.insertCell(2).textContent = new Date(cred.dateIssued * 1000).toLocaleDateString();
            row.insertCell(3).textContent = cred.status;
        });
        document.getElementById('credentialsList').classList.remove('hidden');
    } catch (error) {
        console.error("Failed to fetch pending credentials:", error);
    }
}

// View pending verifications (for professors)
async function viewPendingVerifications() {
    try {
        const pendingCredentials = await contract.getPendingCredentials(currentAccount);
        const tableBody = document.querySelector('#pendingVerificationsTable tbody');
        tableBody.innerHTML = '';
        pendingCredentials.forEach((cred, index) => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = contractAddress;
            row.insertCell(1).textContent = cred.credentialName;
            row.insertCell(2).textContent = cred.organization;
            row.insertCell(3).textContent = new Date(cred.dateIssued * 1000).toLocaleDateString();
            const actionCell = row.insertCell(4);
            const acceptBtn = document.createElement('button');
            acceptBtn.textContent = 'Accept';
            acceptBtn.onclick = () => acceptCredential(currentAccount, index);
            const rejectBtn = document.createElement('button');
            rejectBtn.textContent = 'Reject';
            rejectBtn.onclick = () => rejectCredential(currentAccount, index);
            actionCell.appendChild(acceptBtn);
            actionCell.appendChild(rejectBtn);
        });
        document.getElementById('pendingVerificationsList').classList.remove('hidden');
    } catch (error) {
        console.error("Failed to fetch pending verifications:", error);
    }
}

// View verified credentials (for professors)
async function viewVerifiedCredentials() {
    try {
        const verifiedCredentials = await contract.getAcceptedCredentials(currentAccount);
        const tableBody = document.querySelector('#verifiedCredentialsTable tbody');
        tableBody.innerHTML = '';
        verifiedCredentials.forEach(cred => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = contractAddress;
            row.insertCell(1).textContent = cred.credentialName;
            row.insertCell(2).textContent = cred.organization;
            row.insertCell(3).textContent = new Date(cred.dateIssued * 1000).toLocaleDateString();
        });
        document.getElementById('verifiedCredentialsList').classList.remove('hidden');
    } catch (error) {
        console.error("Failed to fetch verified credentials:", error);
    }
}

// Accept a credential (for professors)
async function acceptCredential(userAddress, index) {
    try {
        const tx = await contract.acceptCredential(userAddress, index);
        await tx.wait();
        console.log("Credential accepted successfully");
        viewPendingVerifications(); // Refresh the list
    } catch (error) {
        console.error("Failed to accept credential:", error);
    }
}

// Reject a credential (for professors)
async function rejectCredential(userAddress, index) {
    try {
        const tx = await contract.rejectCredential(userAddress, index);
        await tx.wait();
        console.log("Credential rejected successfully");
        viewPendingVerifications(); // Refresh the list
    } catch (error) {
        console.error("Failed to reject credential:", error);
    }
}

// Logout function
function logout() {
    // Clear local storage
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('userIdNumber');

    // Hide all portals
    document.getElementById('studentPortal').classList.add('hidden');
    document.getElementById('professorPortal').classList.add('hidden');

    // Show connect wallet button
    document.getElementById('connectWallet').classList.remove('hidden');

    // Reset connection
    provider = null;
    signer = null;
    contract = null;
    currentAccount = null;
}

// Utility function to show/hide elements
function showElement(elementId) {
    document.querySelectorAll('.hidden').forEach(el => el.classList.add('hidden'));
    document.getElementById(elementId).classList.remove('hidden');
}

// Event listeners
document.getElementById('connectButton').addEventListener('click', connectWallet);
document.getElementById('saveProfile').addEventListener('click', saveProfile);
document.getElementById('addCredentialBtn').addEventListener('click', () => showElement('addCredentialForm'));
document.getElementById('submitCredential').addEventListener('click', addCredential);
document.getElementById('viewCredentialsBtn').addEventListener('click', viewCredentials);
document.getElementById('viewPendingCredentialsBtn').addEventListener('click', viewPendingCredentials);
document.getElementById('viewPendingVerificationsBtn').addEventListener('click', viewPendingVerifications);
document.getElementById('viewVerifiedCredentialsBtn').addEventListener('click', viewVerifiedCredentials);
document.getElementById('logoutBtn').addEventListener('click', logout);
document.getElementById('logoutBtnProf').addEventListener('click', logout);

// Check if user is already logged in
window.onload = function () {
    const userType = localStorage.getItem('userType');
    if (userType) {
        document.getElementById('connectWallet').classList.add('hidden');
        if (userType === 'student') {
            document.getElementById('studentPortal').classList.remove('hidden');
        } else {
            document.getElementById('professorPortal').classList.remove('hidden');
        }
    }
};
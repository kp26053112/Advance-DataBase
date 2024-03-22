// Placeholder data for user's profile, listings, transactions, and messages (replace with actual data)
const userData = {
  username: 'john_doe',
  email: 'johndoe@example.com',
  listings: [
    { id: 1, title: 'Textbook - Chemistry 101', price: 29.99 },
    { id: 2, title: 'Desk Chair', price: 49.99 },
  ],
  transactions: [
    { id: 1, type: 'Buy', item: 'Textbook - Biology 101', price: 25.99 },
    { id: 2, type: 'Sell', item: 'Desk Lamp', price: 15.49 },
  ],
  messages: [
    { id: 1, sender: 'JaneDoe', content: 'Hi, I am interested in your textbook listing.' },
    { id: 2, sender: 'AliceSmith', content: 'Is the desk lamp still available?' },
  ],
};

// Function to populate user's profile information
function populateProfile() {
  const profileSection = document.getElementById('profileSection');
  profileSection.innerHTML = `
    <h2>Welcome, ${userData.username}!</h2>
    <p>Email: ${userData.email}</p>
  `;
}

// Function to populate user's listings
function populateListings() {
  const listingsSection = document.getElementById('listingsSection');
  let listingsHTML = '<h2>My Listings</h2>';

  userData.listings.forEach(listing => {
    listingsHTML += `
      <div class="listing">
        <h3>${listing.title}</h3>
        <p>$${listing.price.toFixed(2)}</p>
      </div>
    `;
  });

  listingsSection.innerHTML = listingsHTML;
}

// Function to populate user's transactions
function populateTransactions() {
  const transactionsSection = document.getElementById('transactionsSection');
  let transactionsHTML = '<h2>My Transactions</h2>';

  userData.transactions.forEach(transaction => {
    transactionsHTML += `
      <div class="transaction">
        <p>${transaction.type}: ${transaction.item} - $${transaction.price.toFixed(2)}</p>
      </div>
    `;
  });

  transactionsSection.innerHTML = transactionsHTML;
}

// Function to populate user's messages
function populateMessages() {
  const messagesSection = document.getElementById('messagesSection');
  let messagesHTML = '<h2>My Messages</h2>';

  userData.messages.forEach(message => {
    messagesHTML += `
      <div class="message">
        <p>From: ${message.sender}</p>
        <p>${message.content}</p>
      </div>
    `;
  });

  messagesSection.innerHTML = messagesHTML;
}

// Call functions to populate user data
populateProfile();
populateListings();
populateTransactions();
populateMessages();

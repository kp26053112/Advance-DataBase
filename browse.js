// Sample data for listings (replace with actual data source)
const listingsData = [
  { id: 1, title: 'Textbook - Biology 101', price: 25.99, image: 'textbook-biology.jpg' },
  { id: 2, title: 'Desk Lamp', price: 15.49, image: 'desk-lamp.jpg' },
  { id: 3, title: 'Laptop - MacBook Pro', price: 899.99, image: 'macbook-pro.jpg' },
  // Add more listings as needed
];

// Function to populate listings dynamically
function populateListings() {
  const listingsContainer = document.getElementById('listingsContainer');
  let listingsHTML = '';

  listingsData.forEach(listing => {
    listingsHTML += `
      <div class="listing">
        
        <h3>${listing.title}</h3>
        <p>$${listing.price.toFixed(2)}</p>
        <button onclick="viewListing(${listing.id})">View Details</button>
      </div>
    `;
  });

  listingsContainer.innerHTML = listingsHTML;
}

// Function to simulate viewing listing details
function viewListing(listingId) {
  alert(`Viewing details for listing ID: ${listingId}`);
}

// Call function to populate listings
populateListings();

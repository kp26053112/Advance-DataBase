// Sample data for featured listings and benefits
const featuredListingsData = [
    { title: 'Textbooks', description: 'Find affordable textbooks for your courses.' },
    { title: 'Furniture', description: 'Upgrade your dorm or apartment with stylish furniture.' },
    { title: 'Electronics', description: 'Discover the latest gadgets and electronics at great prices.' },
  ];
  
  const benefitsData = [
    'Convenience: Easily find and acquire items you need.',
    'Affordability: Discover great deals and negotiate prices.',
    'Community: Connect with fellow students.',
    'Security: Benefit from secure transactions and messaging.',
  ];
  
  // Function to populate featured listings dynamically
  function populateFeaturedListings() {
    const featuredListingsContainer = document.getElementById('featuredListings');
    let listingsHTML = '';
  
    featuredListingsData.forEach(listing => {
      listingsHTML += `
        <div class="listing">
          <h3>${listing.title}</h3>
          <p>${listing.description}</p>
        </div>
      `;
    });
  
    featuredListingsContainer.innerHTML = listingsHTML;
  }
  
  // Function to populate benefits dynamically
  function populateBenefits() {
    const benefitsContainer = document.getElementById('whyChoose');
    let benefitsHTML = '<ul>';
  
    benefitsData.forEach(benefit => {
      benefitsHTML += `<li>${benefit}</li>`;
    });
  
    benefitsHTML += '</ul>';
    benefitsContainer.innerHTML = benefitsHTML;
  }
  
  // Event listeners for navigation links
  document.getElementById('homeLink').addEventListener('click', () => {
    // Logic to navigate to home page
  });
  
  document.getElementById('loginLink').addEventListener('click', () => {
    // Logic to navigate to login/register page
  });
  
  document.getElementById('browseLink').addEventListener('click', () => {
    // Logic to navigate to browse listings page
  });
  
  document.getElementById('sellLink').addEventListener('click', () => {
    // Logic to navigate to sell items page
  });
  
  document.getElementById('messagesLink').addEventListener('click', () => {
    // Logic to navigate to messages page
  });
  
  document.getElementById('accountLink').addEventListener('click', () => {
    // Logic to navigate to my account page
  });
  
  // Call functions to populate data
  populateFeaturedListings();
  populateBenefits();
  
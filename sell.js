document.getElementById('sellForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const itemName = document.getElementById('itemName').value;
  const itemDescription = document.getElementById('itemDescription').value;
  const itemPrice = document.getElementById('itemPrice').value;
  const itemImage = document.getElementById('itemImage').files[0]; // Assuming single file upload
  // Add logic for submitting new listing
  console.log('Sell item submitted:', itemName, itemDescription, itemPrice, itemImage);
});

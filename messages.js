document.getElementById('messageForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const recipient = document.getElementById('recipient').value;
  const messageContent = document.getElementById('messageContent').value;
  // Add logic for sending message to recipient
  console.log('Message sent to:', recipient, 'Message:', messageContent);
});

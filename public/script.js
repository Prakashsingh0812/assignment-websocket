const socket = io();

// Get elements
const messages = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("message");

// Listen for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const msg = input.value;

  // Send message to the server
  socket.emit("chat message", msg);

  // Clear the input field
  input.value = "";
});

// Listen for chat messages from the server
socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

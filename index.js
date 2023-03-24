const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.getElementById('mensageInput');
const chatButton = document.querySelector('.chat-input button');
const userTypeSelect = document.getElementById('userTypeSelect');

let messageTypeWidth = userTypeSelect.value;
setUserTypeSelectWidth(messageTypeWidth);

function setUserTypeSelectWidth(type) {
  const width = type === 'Atendente' ? '16%' : '13%';
  userTypeSelect.style.width = width;
}

function addMessage(author, message, isAgent) {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message';

  const authorClass = isAgent ? 'author' : 'authoruser';
  const authorElement = document.createElement('span');
  authorElement.className = authorClass;
  authorElement.textContent = `${author} diz:`;
  messageContainer.appendChild(authorElement);


  const messageContent = document.createElement('div');
  messageContent.className = `message-content ${isAgent ? 'from-agent' : 'from-user'} `;
  messageContent.id = `${isAgent ? 'from-agent' : 'from-user'}`;

  const textElement = document.createElement('span');
  textElement.className = 'text';
  textElement.textContent = message;
  messageContent.appendChild(textElement);

  const timeElement = document.createElement('span');
  timeElement.className = 'time';
  const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  timeElement.textContent = timeNow;
  messageContent.appendChild(timeElement);

  messageContainer.appendChild(messageContent);
  chatMessages.appendChild(messageContainer);
}

chatButton.addEventListener('click', sendMessage);
userTypeSelect.addEventListener('change', (event) => {
  const type = event.target.value;
  setUserTypeSelectWidth(type);
});

chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const messageType = userTypeSelect.value;
  const message = chatInput.value.trim();
  if (!message) {
    return;
  }
  const isAgent = messageType === 'Atendente';
  addMessage(messageType, message, isAgent);
  chatInput.value = '';
  if (message === "/clear") {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message) => message.remove());
    chatInput.value = '';
  }
  if (message === "/reset") {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message) => message.remove());
    chatInput.value = '';
    addMessage('Atendente', 'Bom diaa!!!', true);
    addMessage('Atendente', 'Olá, como posso ajudá-lo?', true);
    addMessage('Você', 'Gostaria de saber mais sobre o produto X.', false);
    addMessage('Você', 'E também gostaria de saber o valor do produto X.', false) 
  }
};


addMessage('Atendente', 'Bom diaa!!!', true);
addMessage('Atendente', 'Olá, como posso ajudá-lo?', true);
addMessage('Você', 'Gostaria de saber mais sobre o produto X.', false);
addMessage('Você', 'E também gostaria de saber o valor do produto X.', false);

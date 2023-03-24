const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.getElementById('mensageInput');
const chatButton = document.querySelector('.chat-input button');
const userTypeSelect = document.getElementById('userTypeSelect');

const messageTypeWidth = userTypeSelect.value;
if(messageTypeWidth === "Atendente"){
    userTypeSelect.style.width = "16%";
}
else{
    userTypeSelect.style.width = "13%";
}
function addMessage(author, message, isAgent) {

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';
    let x = '';

    if(isAgent === false){
        x = 'authoruser';
    }
    else{
        x = 'author';
    };

    const authorElement = document.createElement('span');
    authorElement.className = x;
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

chatButton.addEventListener('click', () => {
    sendMessage();
});

userTypeSelect.addEventListener('click', () => {
    const messageTypeWidth = userTypeSelect.value;
    if(messageTypeWidth === "Atendente"){
        userTypeSelect.style.width = "16%";
    }
    else{
        userTypeSelect.style.width = "13%";
    }
});


chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    };
});

function sendMessage() {
    const messageType = userTypeSelect.value;
    const message = chatInput.value.trim();
    if (message) {
        let y = false;
        if(messageType === 'Atendente'){
            y = true;
        }
        else{
            y = false;
            
        }
        addMessage(messageType, message, y);
        chatInput.value = '';
    };
};


addMessage('Atendente', 'Bom diaa!!!', true);
addMessage('Atendente', 'Olá, como posso ajudá-lo?', true);
addMessage('Você', 'Gostaria de saber mais sobre o produto X.', false);
addMessage('Você', 'E também gostaria de saber o valor do produto X.', false);

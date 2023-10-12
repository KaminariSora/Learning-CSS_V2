const chatOutput = document.getElementById('chat-output');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        appendMessage('You', message);
        messageInput.value = '';
        receiveRandomMessage();
    }
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatOutput.appendChild(messageDiv);
}

function receiveRandomMessage() {
    const randomMessages = [
        'Hello!',
        'How are you?',
        'Nice weather today!',
        'What do you like to do for fun?',
        'Tell me about your hobbies.'
    ];

    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    setTimeout(() => appendMessage('Stranger', randomMessage), 1000);
}

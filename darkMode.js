const toggleSwitch = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');
const chat_container = document.querySelector(".chat-container");
const chat_input = document.querySelector(".chat-input");
const chat_header = document.querySelector(".chat-header");
const chat_input_text = document.getElementById("mensageInput");

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        body.classList.add('dark-mode');
        chat_container.classList.add('dark-mode');
        chat_input.classList.add('dark-mode');
        chat_header.classList.add('dark-mode');
        chat_input_text.classList.add('dark-mode');
       

    } else {
        body.classList.remove('dark-mode');
        chat_container.classList.remove('dark-mode');
        chat_input.classList.remove('dark-mode');
        chat_header.classList.remove('dark-mode');
        chat_input_text.classList.remove('dark-mode');
        
    }    
}

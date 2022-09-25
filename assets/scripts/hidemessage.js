const hidden = document.querySelector('.hidden');
const message = document.querySelector('.message');
const msgButton = document.querySelector('.notification button');

function checkMsg() {
  if (message.classList.contains('hidden')) {
    msgButton.innerText = "View message"
  } else if (!message.classList.contains('hidden')) {
    msgButton.innerText = "Hide message"
  }
};

function toggleMsg() {
  message.classList.toggle('hidden')
};

msgButton.addEventListener('click', toggleMsg);
document.addEventListener('click', checkMsg);

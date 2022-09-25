function update() {
  const counter = document.getElementById('counter');
  const unreadCount = document.querySelectorAll('.unread').length
  counter.innerText = unreadCount;
}
window.onload = update();

document.addEventListener('click', update)
document.addEventListener('keyup', update)

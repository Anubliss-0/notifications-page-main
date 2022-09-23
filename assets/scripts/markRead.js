const unreadNotifications = document.querySelectorAll('.unread');
const readAll = document.querySelector('.markread')

unreadNotifications.forEach((notification) => {
  notification.addEventListener('click', function() {
    console.log("hear ya")
    this.classList.remove('unread')
  })
});

readAll.addEventListener('click', function() {
  unreadNotifications.forEach((notification) => {
    notification.classList.remove('unread')
  })
})

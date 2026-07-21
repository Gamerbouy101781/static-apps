 function showSidebar() {
    event.preventDefault()
    navigator.vibrate(90)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
    }
    
function hideSidebar() {
    event.preventDefault()
    navigator.vibrate(90)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
      
    }
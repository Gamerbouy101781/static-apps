 function showSidebar() {
    event.preventDefault()
    navigator.vibrate(70)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
    }
    
function hideSidebar() {
    event.preventDefault()
    navigator.vibrate(70)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
      
    }

 function submitBtn() {
      navigator.vibrate(70)
    }


function updateText() {
    const fill1 = document.getElementById('fill1');
    const fill2 = document.getElementById('fill2');
    const fill3 = document.getElementById('fill3');
    const fill4 = document.getElementById('fill4');
    const fill5 = document.getElementById('fill5');
    const fill6 = document.getElementById('fill6');

    const intelligence = document.getElementById('intelligence');
    const strength = document.getElementById('strength');
    const speed = document.getElementById('speed');
    const durability = document.getElementById('durability');
    const power = document.getElementById('power');
    const combat = document.getElementById('combat');

    intelligence.textContent = `Intelligence: ${fill1.style.width}`;
    strength.textContent = `Strength: ${fill2.style.width}`;
    speed.textContent = `Speed: ${fill3.style.width}`;
    durability.textContent = `Durability: ${fill4.style.width}`;
    power.textContent = `Power: ${fill5.style.width}`;
    combat.textContent = `Combat: ${fill6.style.width}`;

}

updateText()
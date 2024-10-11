document.querySelectorAll('#workflow-link, #currency-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let submenuDiv = this.nextElementSibling;
        submenuDiv.style.display = submenuDiv.style.display === 'flex' ? 'none' : 'flex';
    });
});
let cur = document.getElementById('currency'); 
let currencyLinks = document.getElementsByClassName('currency'); 


Array.from(currencyLinks).forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    cur.innerHTML = link.innerHTML;
   let submenuDiv = document.querySelector('.submenu-div');
   submenuDiv.style.display = 'none';
  });
});

let increaseButtons = document.querySelectorAll('.increase');
let decreaseButtons = document.querySelectorAll('.decrease');
let loveBars = document.querySelectorAll('.love-bar');
let currentWidth = Array.from({length: increaseButtons.length}, () => 10); 

increaseButtons.forEach((increaseBtn, index) => {
    let loveBar = loveBars[index];
    increaseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentWidth[index] < 100) {
            currentWidth[index] += 10;
            loveBar.style.width = currentWidth[index] + '%';
        }
    });
});

decreaseButtons.forEach((decreaseBtn, index) => {
    let loveBar = loveBars[index];

    decreaseBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentWidth[index] > 0) {
            currentWidth[index] -= 10;
            loveBar.style.width = currentWidth[index] + '%';
        }
    });
});





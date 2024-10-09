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

let proposedImages = document.querySelectorAll('.prop-img');
let mainImageDiv = document.querySelector('.main-img');

    proposedImages.forEach((img) => {
        img.addEventListener('mouseover', function() {
            mainImageDiv.style.backgroundImage = `url(${img.src})`;
        });
  });

  /* let plus = document.querySelectorAll('.plus-icon');
  let colapssed = document.querySelector('.collapsed-info')
  let collapssingInfo = document.querySelector('.collapsing-info')

  plus.forEach((img) => {
    img.addEventListener('click', function(){
       colapssed.style.display = colapssed.style.display === 'flex' ? 'none' : 'flex';
         if (collapsedInfo.style.display === 'flex') {
            collapssingInfo.style.height = 'auto'; 
        } 
    })
  })*/

let plusIcons = document.querySelectorAll('.plus-icon');
let collapsingInfos = document.querySelectorAll('.collapsing-info');
let uncolapssedInfo = document.querySelectorAll('.uncolapssed-info');
let infoBox = document.querySelector('.main-info');

plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', function() {
    let collapssedInfo = collapsingInfos[index].querySelector('.collapsed-info');
    let collapsingInfoContainer = collapsingInfos[index];
    let uncolapsedInfoContainer = uncolapssedInfo[index];

    // Toggle visibility of collapsed content
    collapssedInfo.classList.toggle('show');

    // Toggle height between 20% and auto
    if (collapssedInfo.classList.contains('show')) {
      collapsingInfoContainer.classList.add('expanded');
      uncolapsedInfoContainer.classList.add('expanded');
      infoBox.classList.add('expanded');
    } else {
      collapsingInfoContainer.classList.remove('expanded');
      uncolapsedInfoContainer.classList.remove('expanded');
      infoBox.classList.remove('expanded');
    }
  });
});
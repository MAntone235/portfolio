// Nav bar hamburger menu function
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}

// funtion for the zoom larger text box
document.addEventListener('DOMContentLoaded', () => {
    const descElement = document.querySelector('.desc');

    function startZoomAnimation() {
        descElement.classList.add('zoom-end');

        setTimeout(() => {
            descElement.classList.remove('zoom-end');
        }, 1000); 
    }
    // Start the animation
    startZoomAnimation();
});

// popout text box function
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

//close the popup
window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        closePopup();
    }
}


// function for the zoom smaller portfolio picture
function applyZoomEffect() {
    const img = document.querySelector('.hero-section img');
    
    img.classList.add('zoom-in');
    
    setTimeout(() => {
        img.classList.remove('zoom-in');
    }, 2000);
}
document.addEventListener('DOMContentLoaded', applyZoomEffect);

// Experience

//  buttons, popups, and close buttons
const openButtons = document.querySelectorAll('.open-popup');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-button');

//  open the popup
function openPopup(event) {
    const projectId = event.target.getAttribute('data-project');
    document.getElementById(`${projectId}-popup`).style.display = 'flex';
}

// close the popup
function closePopup(event) {
    event.target.closest('.popup').style.display = 'none';
}

// Add event listeners to open buttons
openButtons.forEach(button => {
    button.addEventListener('click', openPopup);
});

// Add event listeners to close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', closePopup);
});

// Close the popup when clicking outside of the popup content
popups.forEach(popup => {
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

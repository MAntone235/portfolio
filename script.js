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

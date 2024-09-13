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

// Learn more button effects
const learnMoreElements = document.querySelectorAll('.learnMore');

// Function for hover effect
function addHoverEffect(element) {
  element.addEventListener('mouseover', () => {
    element.style.transform = 'scale(1.1)';
    element.style.backgroundColor = 'var(--hover-color)';
  });

  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1)';
    element.style.backgroundColor = 'var(--border-color)';
  });

  element.addEventListener('mousedown', () => {
    element.style.transform = 'scale(1.05)';
  });

  element.addEventListener('mouseup', () => {
    element.style.transform = 'scale(1.1)';
  });
}

// Apply hover effect to each 'learnMore' element
learnMoreElements.forEach(addHoverEffect);


// Get all modal elements
var modals = document.querySelectorAll('.modal');
var triggers = document.querySelectorAll('.modal-trigger');
var spans = document.querySelectorAll('.close');

// Loop through each trigger and attach a click event to open the corresponding modal
triggers.forEach(function(trigger) {
    trigger.onclick = function() {
        var modalId = this.getAttribute('href').substring(1);
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }
});

// Loop through each close button and attach a click event to close the modal
spans.forEach(function(span) {
    span.onclick = function() {
        var modal = this.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Function to apply hover effect to images in the modal
function applyHoverEffectToModals() {
    // Select all images within the modals
    const modalImages = document.querySelectorAll('.modal-content img');
    
    modalImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.classList.add('zoom-in'); // Add the zoom-in class on hover
        });

        img.addEventListener('mouseout', () => {
            img.classList.remove('zoom-in'); // Remove the zoom-in class when hover ends
        });
    });
}

// Immediately invoke the function to apply hover effects
applyHoverEffectToModals();



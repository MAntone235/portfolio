// Nav bar hamburger menu function
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    }
}

// Function for the zoom larger text box
document.addEventListener('DOMContentLoaded', () => {
    const descElement = document.querySelector('.desc');
    if (descElement) {
        function startZoomAnimation() {
            descElement.classList.add('zoom-end');
            setTimeout(() => {
                descElement.classList.remove('zoom-end');
            }, 1000);
        }
        startZoomAnimation();
    }
});

// Popup functions
function openPopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Close the popup when clicking outside of the modal content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (popup && event.target === popup) {
        closePopup();
    }
});

// Function for the zoom effect on the portfolio picture
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.hero-section img');
    if (img) {
        img.classList.add('zoom-in');
        setTimeout(() => {
            img.classList.remove('zoom-in');
        }, 2000);
    }
});

// Learn more button effects
const learnMoreElements = document.querySelectorAll('.learnMore');

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

// Modal handling
function handleModals() {
    const modals = document.querySelectorAll('.modal');
    const triggers = document.querySelectorAll('.modal-trigger');
    const spans = document.querySelectorAll('.close');

    // Open modal
    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            const modalId = this.getAttribute('href').substring(1);
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Close modal
    spans.forEach(function(span) {
        span.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

handleModals();

// Function to apply hover effect to images in the modal, excluding ITLCT-Flex
function applyHoverEffectToModals() {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        const modalImages = modal.querySelectorAll('.modal-content img');
        modalImages.forEach(img => {
            
            if (!img.closest('.ITLCT-Flex')) {
                img.addEventListener('mouseover', () => {
                    img.classList.add('zoom-in');
                });

                img.addEventListener('mouseout', () => {
                    img.classList.remove('zoom-in');
                });
            }
        });
    });
}

// Apply the click event listener to ITLCT-Flex items
document.querySelectorAll('.ITLCT-Flex .item').forEach(item => {
    item.addEventListener('click', function() {
      
        this.classList.toggle('active');
    });
});


applyHoverEffectToModals();


// Function to add hover effects to icons
function addIconHoverEffects() {
    const emailIcon = document.getElementById('email-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');

    if (emailIcon) {
        emailIcon.addEventListener('mouseover', () => {
            emailIcon.style.transform = 'scale(1.2)';
            emailIcon.style.color = '#ff4500'; 
        });
        emailIcon.addEventListener('mouseout', () => {
            emailIcon.style.transform = 'scale(1)';
            emailIcon.style.color = '#333'; 
        });
    }

    if (linkedinIcon) {
        linkedinIcon.addEventListener('mouseover', () => {
            linkedinIcon.style.transform = 'scale(1.2)';
            linkedinIcon.style.color = '#0056b3'; 
        });
        linkedinIcon.addEventListener('mouseout', () => {
            linkedinIcon.style.transform = 'scale(1)';
            linkedinIcon.style.color = '#07a4f8'; 
        });
    }
}

document.addEventListener('DOMContentLoaded', addIconHoverEffects);


// Flip for resume page
const flipBox = document.querySelector('.flip-box');
if (flipBox) {
  flipBox.addEventListener('click', () => {
    flipBox.classList.toggle('flipped');
  });
}


const resumeLink = document.querySelector('.resumeLink a');

if (resumeLink) {
    resumeLink.addEventListener('click', function(event) {

        event.preventDefault();


        this.classList.toggle('clicked');
        

        window.open(this.href, '_blank');
    });
}

// Function to apply dark mode based on system preference or saved choice
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPreference ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
}

// Call the function to apply the theme
applyTheme();

// Monitor system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = event.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    }
});

// Save the user's choice (if any) to localStorage when changed
document.documentElement.addEventListener('change', () => {
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});

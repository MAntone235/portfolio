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

// Keyboard interaction for the hamburger menu
function handleHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') { 
                event.preventDefault();
                toggleMenu();
            }
        });
    }
}

handleHamburgerMenu();

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
        popup.setAttribute('aria-hidden', 'false');
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
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

// Flip box functionality
const flipBoxes = document.querySelectorAll('.flip-box1');

flipBoxes.forEach(box => {
    box.addEventListener('click', function () {
        const inner = box.querySelector('.flip-box-inner1');
        inner.classList.toggle('flipped');
    });
});

// Modal functionality
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open modals
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        e.preventDefault(); 
        const modalId = this.getAttribute('href'); 
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Close modals
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = 'none'; 
    });
});

// Close modal when clicking outside of modal content
window.addEventListener('click', function (event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Apply hover effect to images in the modal, excluding ITLCT-Flex
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

// Open image in fullscreen on click
const imgElements = document.querySelectorAll('.ITLCT-Flex img');
imgElements.forEach(img => {
    img.addEventListener('click', function() {
        const fullImageDiv = document.createElement('div');
        fullImageDiv.className = 'fullscreen-image';
        fullImageDiv.innerHTML = `<img src="${this.src}" alt="${this.alt}" class="zoomable" />`;
        document.body.appendChild(fullImageDiv);

        // Zoom functionality
        const zoomableImg = fullImageDiv.querySelector('.zoomable');
        let scale = 1;

        fullImageDiv.addEventListener('wheel', (event) => {
            event.preventDefault();
            scale += event.deltaY * -0.01; // Zoom factor
            scale = Math.min(Math.max(1, scale), 3); // Limit zoom level
            zoomableImg.style.transform = `scale(${scale})`;
        });

        fullImageDiv.addEventListener('click', function() {
            this.remove();
        });
    });
});


// Existing zoom effect code for descElement
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

// Function to add hover effects to icons
function addIconHoverEffects() {
    const emailIcon = document.querySelector('.email-icon');
    const linkedinIcon = document.querySelector('.linkedin-icon');
    const githubIcon = document.querySelector('.github-icon');
    
    const iconHoverEffect = (icon, hoverColor, defaultColor) => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.color = hoverColor;
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            icon.style.color = defaultColor;
        });
    };
    
    if (emailIcon) {
        iconHoverEffect(emailIcon, '#ff4500', 'rgb(151, 213, 216)');
    }
    if (linkedinIcon) {
        iconHoverEffect(linkedinIcon, '#0056b3', 'rgb(98, 183, 240)');
    }
    if (githubIcon) {
        iconHoverEffect(githubIcon, 'rgb(118, 2, 250)', 'rgb(177, 89, 248)');
    }
}

addIconHoverEffects();


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

applyTheme();

// Monitor system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = event.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    }
});

document.documentElement.addEventListener('change', () => {
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});


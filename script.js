// Function to handle the "No" button hover
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
    const buttonsContainer = document.querySelector('.buttons');
    const containerRect = buttonsContainer.getBoundingClientRect();

    // Calculate maximum allowed positions
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    // Generate random positions within the container
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Function to handle the "Yes" button click
const yesButton = document.getElementById('yes-button');

yesButton.addEventListener('click', () => {
    // Create a custom modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '30px';
    modal.style.borderRadius = '15px';
    modal.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    modal.style.textAlign = 'center';
    modal.style.zIndex = '1000';
    modal.style.maxWidth = '400px';
    modal.style.width = '90%';

    // Add the message
    const message = document.createElement('p');
    message.innerHTML = `
        Hahaha! I win! Finally managed to gaslight you into clicking yes—you're stuck with me forever now, and there's no escape. You're all mine! 😈❤️
    `;
    message.style.fontSize = '1.2rem';
    message.style.color = '#333';
    message.style.marginBottom = '20px';
    modal.appendChild(message);

    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.fontSize = '1rem';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '10px';
    closeButton.style.backgroundColor = '#4caf50';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s ease';
    closeButton.addEventListener('mouseover', () => {
        closeButton.style.backgroundColor = '#45a049';
    });
    closeButton.addEventListener('mouseout', () => {
        closeButton.style.backgroundColor = '#4caf50';
    });
    closeButton.addEventListener('click', () => {
        modal.remove(); // Remove the modal when the close button is clicked
    });
    modal.appendChild(closeButton);

    // Add the modal to the body
    document.body.appendChild(modal);

    // Add a semi-transparent overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    // Remove the modal and overlay when clicking outside the modal
    overlay.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
    });
});

// Function to add random cat GIFs
function addCatGifs() {
    const catGifsContainer = document.getElementById('cat-gifs');

    // Array of cat GIF filenames
    const catGifs = ['cats/cat1.gif', 'cats/cat2.gif', 'cats/cat3.gif', 'cats/cat4.gif', 'cats/cat5.gif'];

    // Create a new image element
    const catGif = document.createElement('img');
    catGif.src = catGifs[Math.floor(Math.random() * catGifs.length)]; // Randomly pick a GIF
    catGif.classList.add('cat-gif');

    // Randomize initial position
    catGif.style.left = `${Math.random() * 100}%`;
    catGif.style.top = `${Math.random() * 100}%`;

    // Randomize size slightly (between 100px and 200px)
    const size = 100 + Math.random() * 100;
    catGif.style.width = `${size}px`;
    catGif.style.height = 'auto';

    // Add the GIF to the container
    catGifsContainer.appendChild(catGif);
}

// Function to continuously flood the screen with cat GIFs
function floodWithCatGifs() {
    const interval = 500; // Add a new GIF every 500ms (0.5 seconds)
    setInterval(addCatGifs, interval);
}

// Start flooding the screen with cat GIFs
floodWithCatGifs();

// Creative functionality for the "No" button
noButton.addEventListener('click', () => {
    // Clear all existing GIFs
    const catGifsContainer = document.getElementById('cat-gifs');
    catGifsContainer.innerHTML = '';

    // Display the catcry.gif
    const catCry = document.createElement('img');
    catCry.src = 'cats/catcry.gif'; // Path to the catcry.gif
    catCry.style.position = 'fixed';
    catCry.style.top = '50%';
    catCry.style.left = '50%';
    catCry.style.transform = 'translate(-50%, -50%)';
    catCry.style.width = '300px'; // Adjust size as needed
    catCry.style.height = 'auto';
    catCry.style.zIndex = '1000';
    document.body.appendChild(catCry);

    // Remove the catcry.gif after 3 seconds
    setTimeout(() => {
        catCry.remove();

        // Start the slideshow
        startSlideshow();
    }, 3000);
});

// Function to start the slideshow
function startSlideshow() {
    const slideshowContainer = document.createElement('div');
    slideshowContainer.style.position = 'fixed';
    slideshowContainer.style.top = '0';
    slideshowContainer.style.left = '0';
    slideshowContainer.style.width = '100%';
    slideshowContainer.style.height = '100%';
    slideshowContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    slideshowContainer.style.zIndex = '1000';
    slideshowContainer.style.overflow = 'hidden';
    document.body.appendChild(slideshowContainer);

    // Timeline events
    const events = [
        {
            date: 'October 12, 2023',
            description: 'We matched on Hinge.',
            image: 'cats/hinge.png', // Path to an image/GIF
        },
        {
            date: 'October 13, 2023',
            description: 'We started talking.',
            image: 'cats/started-talking.jpg', // Path to an image/GIF
        },
        {
            date: 'December 5, 2023',
            description: 'We met for the first time.',
            image: 'cats/first.jpg', // Path to an image/GIF
        },
        {
            date: 'December 5, 2023',
            description: 'I confessed my love to you in person.',
            image: 'cats/love-confession.jpg', // Path to an image/GIF
        },
        {
            date: 'December 7, 2023',
            description: 'We met for the second time at Irani Cafe.',
            image: 'cats/second-meet.jpg', // Path to an image/GIF
        },
        {
            date: 'December 7, 2023',
            description: 'We went to bnb ;).',
            image: 'cats/bnb.jpg', // Path to an image/GIF
        },
        {
            date: 'December 11, 2023',
            description: 'We met for like 3-4 times more (I came to Flame).',
            image: 'cats/gfc.jpg', // Path to an image/GIF
        },
        {
            date: 'January 2, 2024',
            description: 'We went to Hippie at Heart.',
            image: 'cats/baner.jpg', // Path to an image/GIF
        },
        {
            date: 'January 3, 2024',
            description: 'We met for the last time (but of course, there are more such moments to come).',
            image: 'cats/last.jpg', // Path to an image/GIF
        },
    ];

    let currentSlide = 0;

    // Function to display the current slide
    function showSlide(index) {
        slideshowContainer.innerHTML = ''; // Clear the previous slide

        const event = events[index];

        // Create a slide div
        const slide = document.createElement('div');
        slide.style.position = 'absolute';
        slide.style.top = '50%';
        slide.style.left = '50%';
        slide.style.transform = 'translate(-50%, -50%)';
        slide.style.textAlign = 'center';
        slide.style.opacity = '0'; // Start with 0 opacity
        slide.style.transition = 'opacity 1s ease-in-out'; // Smooth fade transition

        // Add the date
        const date = document.createElement('h2');
        date.textContent = event.date;
        date.style.fontSize = '1.5rem';
        date.style.color = '#4caf50';
        slide.appendChild(date);

        // Add the description
        const description = document.createElement('p');
        description.textContent = event.description;
        description.style.fontSize = '1.2rem';
        description.style.color = '#333';
        slide.appendChild(description);

        // Add the image/GIF
        const image = document.createElement('img');
        image.src = event.image;
        image.style.width = '200px';
        image.style.height = 'auto';
        image.style.marginTop = '10px';
        slide.appendChild(image);

        // Add the slide to the container
        slideshowContainer.appendChild(slide);

        // Fade in the slide
        setTimeout(() => {
            slide.style.opacity = '1';
        }, 10); // Small delay to trigger the transition

        // Show the next slide after 3 seconds
        if (index < events.length - 1) {
            setTimeout(() => {
                // Fade out the current slide
                slide.style.opacity = '0';

                // Show the next slide after the fade-out transition
                setTimeout(() => {
                    showSlide(index + 1);
                }, 1000); // Wait for the fade-out transition to complete
            }, 3000); // Delay between slides
        } else {
            // Display the final message after the last slide
            setTimeout(() => {
                // Fade out the last slide
                slide.style.opacity = '0';

                // Show the final message after the fade-out transition
                setTimeout(() => {
                    slideshowContainer.innerHTML = ''; // Clear the last slide

                    const finalMessage = document.createElement('div');
                    finalMessage.innerHTML = `
                        <p style="font-size: 1.5rem; color: #f44336; text-align: center;">
                            Every moment with you feels like a piece of eternity I never want to let go of. You’ve become the rhythm my heart beats to, the light in every shadow, and the reason time feels so precious. Are you sure you wouldn’t want to rewrite this story together, forever?
                        </p>
                        <p style="font-size: 1.5rem; color: #f44336; text-align: center;">
                            Are you sure this is the choice you want to make or would you take a moment to rethink?
                        </p>
                    `;
                    finalMessage.style.position = 'absolute';
                    finalMessage.style.top = '50%';
                    finalMessage.style.left = '50%';
                    finalMessage.style.transform = 'translate(-50%, -50%)';
                    finalMessage.style.opacity = '0'; // Start with 0 opacity
                    finalMessage.style.transition = 'opacity 1s ease-in-out'; // Smooth fade transition
                    slideshowContainer.appendChild(finalMessage);

                    // Fade in the final message
                    setTimeout(() => {
                        finalMessage.style.opacity = '1';
                    }, 10); // Small delay to trigger the transition

                    // Add the "Go Back in Time" button
                    const goBackButton = document.createElement('button');
                    goBackButton.textContent = 'Go Back in Time';
                    goBackButton.style.padding = '15px 30px';
                    goBackButton.style.fontSize = '1.2rem';
                    goBackButton.style.border = 'none';
                    goBackButton.style.borderRadius = '10px';
                    goBackButton.style.backgroundColor = '#4caf50';
                    goBackButton.style.color = '#fff';
                    goBackButton.style.cursor = 'pointer';
                    goBackButton.style.marginTop = '20px';
                    goBackButton.style.opacity = '0'; // Start with 0 opacity
                    goBackButton.style.transition = 'opacity 1s ease-in-out'; // Smooth fade transition
                    goBackButton.addEventListener('click', () => {
                        // Reload the page to go back to the main question
                        window.location.reload();
                    });
                    slideshowContainer.appendChild(goBackButton);

                    // Fade in the "Go Back in Time" button
                    setTimeout(() => {
                        goBackButton.style.opacity = '1';
                    }, 10); // Small delay to trigger the transition
                }, 1000); // Wait for the fade-out transition to complete
            }, 3000); // Delay before showing the final message
        }
    }

    // Start the slideshow
    showSlide(currentSlide);
}
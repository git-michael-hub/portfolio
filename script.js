document.addEventListener('DOMContentLoaded', function() {
    // Get all image containers
    const imageContainers = document.querySelectorAll('.image-container');
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    const closeButton = document.querySelector('.close-button');

    // Add click event to each image container
    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            popupImage.src = imgSrc;
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
        });
    });

    // Close popup when clicking the close button
    closeButton.addEventListener('click', function() {
        closePopup();
    });

    // Close popup when clicking outside the image
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });

    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
            closePopup();
        }
    });

    // Function to close popup
    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
}); 
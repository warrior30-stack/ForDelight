document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContent = document.getElementById('main-content');

    // Show the main content and hide the overlay when clicked
    loadingOverlay.addEventListener('click', function() {
        loadingOverlay.style.display = 'none';
        mainContent.style.display = 'block';
    });
});

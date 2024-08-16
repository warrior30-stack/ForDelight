document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('colorful-heart');
    const colors = [
        '#ff4d6d', // Color 1
        '#ff6f61', // Color 2
        '#ff9a8b', // Color 3
        '#ffb3ab'  // Color 4
    ];
    
    let currentColorIndex = 0;
    
    heart.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.documentElement.style.setProperty('--heart-color-1', colors[currentColorIndex]);
    });
});

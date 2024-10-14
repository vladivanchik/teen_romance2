document.getElementById('no-button').addEventListener('click', function() {
    let yesButton = document.getElementById('yes-button');
    let currentWidth = parseInt(window.getComputedStyle(yesButton).width);
    let currentHeight = parseInt(window.getComputedStyle(yesButton).height);
    yesButton.style.width = (currentWidth + 100) + 'px';
    yesButton.style.height = (currentHeight + 100) + 'px';
});
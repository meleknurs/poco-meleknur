const mountainImage = document.getElementById("mountain");
const hoverArea = document.getElementById('hover-area');
const pixelMeImage = document.getElementById("pixel-me");
const helloTextImage = document.getElementById("hello-text");

hoverArea.addEventListener('mouseover', function () {
    mountainImage.src = '/images/mountain-hover.png';
});

hoverArea.addEventListener('mouseout', function () {
    mountainImage.src = '/images/mountain-default.png';
});


pixelMeImage.addEventListener('click', function(){
    if (helloTextImage.style.display === 'none') {
        helloTextImage.style.display = 'block';
    } else {
        helloTextImage.style.display = 'none';
    }
});



const mountain= document.getElementById("mountain");
const hoverArea = document.getElementById('hover-area');


hoverArea.addEventListener('mouseover', function () {
    mountain.src = '/images/mountain-hover.png';
});

hoverArea.addEventListener('mouseout', function () {
    mountain.src = '/images/mountain-default.png';
});

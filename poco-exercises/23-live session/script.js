const imgTags = document.querySelectorAll("img");

imgTags.forEach(img => {
    img.addEventListener("error", () => {
        img.src = "https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"; 
    });

    img.addEventListener("mouseover", handlerMouseOver, true);
});

const pTag = document.querySelector("p");
const nestedImgTag = pTag.querySelector("img"); 
nestedImgTag.addEventListener("mouseover", handlerMouseOver, true);

pTag.addEventListener("mouseover", () => {
    nestedImgTag.removeEventListener("mouseover", handlerMouseOver, true);
});

function handlerMouseOver() {
    alert("Hover over img-Tag");
}

function handleFormSubmission(event){
    event.preventDefault();
    const inputValue = document.querySelector("#fname").value;
    console.log(`Hello and welcome ${inputValue}`);
}

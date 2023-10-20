
//Assign new variables of the html tags
const h1 = document.querySelectorAll("h1");
const p = document.querySelector("p");
const a = document.querySelector("a");


// Create a loop with 2 iterations for h1 tags, add new text before content
h1.forEach((element, index) => {
element.textContent = element.textContent + ` New Title ${index+1}`;
});


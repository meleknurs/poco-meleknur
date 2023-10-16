const birthYear = 2000;
const products = [];
const product = {}; // You're right, 'const' is appropriate here because you're not re-assigning 'product'.
const numberList = [6, 9, 1, 15, 20];


//const h1 = document.querySelector("h1");
//console.log(h1);

const element= document.querySelector(".blue");
console.log(element);

const elements=document.querySelectorAll("p");
console.log(elements)
elements.forEach(function(p,i){
if(i==0){
    p.innerHTML = `innerHTML: <span>test</span><script>alert("script running");</script>`;
}else if (i===1){
    const span= document.createElement("span");
    span.textContent = "test";
    p.appendChild(span);
    //p.textContent= "textContent: <span>test</span>";
} else {
    p.innerText = "innerText: <span>test</span>";
}

});

const h1=document.querySelector("h1"); //i select the h1 tag element
h1.textContent = "Title - click me"; //change the title
h1.addEventListener("click", function(){
    h1.textContent="Thank you";
});


function addValues(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}


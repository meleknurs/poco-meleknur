

const detailsOfPeople = [
    {
        fname: "Faranak",
        lname: "Rahimi",
        eyeColor: "braun"
    },

    {
        fname: "Ali",
        lname: "Dinc",
        eyeColor: "braun"
    },
    {
        fname: "Gebre",
        lname: "Kahsay",
        eyeColor: "braun"
    }
];



function giveDetails(articleId) {

    detailsOfPeople.forEach(function(element) {
    
        if (element.fname.toLowerCase() === articleId.toLowerCase()) {
            console.log(element);

            const detailsDiv = document.createElement("div");

            detailsDiv.textContent = `First Name: ${element.fname}, Last Name: ${element.lname}, Eye Color: ${element.eyeColor}`;

            
            const article = document.getElementById(articleId);

           
            article.appendChild(detailsDiv);


            //1. use document.createElement to create an html tag
            //2. use textContent to add value of 1 specific element property to tag
            //3. append element to container in DOM 



        }
    });

}



//var item = document.getElementById("faranak");
//item.addEventListener("mouseover", )



/*
if when I hoverover of an image, id of the element, can match the id of description list, 
display whole description of the person


*/

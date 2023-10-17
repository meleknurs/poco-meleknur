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
  const container = document.getElementById(`details-container-${articleId}`);
  container.innerHTML = ""; 

  detailsOfPeople.forEach(function (element) {
    if (element.fname.toLowerCase() === articleId.toLowerCase()) {
      const ul = document.createElement("ul");

      const firstNameItem = document.createElement("li");
      firstNameItem.textContent = `First Name: ${element.fname}`;
      ul.appendChild(firstNameItem);

      const lastNameItem = document.createElement("li");
      lastNameItem.textContent = `Last Name: ${element.lname}`;
      ul.appendChild(lastNameItem);

      const eyeColorItem = document.createElement("li");
      eyeColorItem.textContent = `Eye Color: ${element.eyeColor}`;
      ul.appendChild(eyeColorItem);

      container.appendChild(ul);
    }
  });
}


 // Clear the details when the mouse leaves
 document.querySelectorAll(".individual").forEach(function (article) {
  article.addEventListener("mouseleave", function () {
    const articleId = article.id;
    const container = document.getElementById(`details-container-${articleId}`);
    container.innerHTML = "";
  });
});





/*
 when I hoverover of an image, id of the element, can match the id of description list, 
and display whole description of the person


*/
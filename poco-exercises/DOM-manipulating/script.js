
//Assign new variables of the html tags
const h1 = document.querySelectorAll("h1");
const p = document.querySelector("p");
const a = document.querySelector("a");


// Create a loop with 2 iterations for h1 tags, add new text before content
h1.forEach((element, index) => {
element.textContent = element.textContent + ` New Title ${index+1}`;
});

//==============================================

//Book List

var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }
    ];

// Iterate through the array of books. For each book, create a p
// element with the book title and author and append it to the page.

    const bookLists= document.querySelectorAll("li");


    
     books.forEach(function(book, index) {

        var bookDetails = document.createElement("p");

        bookDetails.textContent = `${book.title} by ${book.author}`;

        bookLists[index].appendChild(bookDetails);


     });
     
    


    

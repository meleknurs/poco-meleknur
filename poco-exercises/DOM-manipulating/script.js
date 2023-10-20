
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
    alreadyRead: false,
    image:  
    "https://exlibris.azureedge.net/covers/9780/2625/2567/1/9780262525671xl.webp"}, 
    {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    image: 
    "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg",
    }
    ];

// Iterate through the array of books. For each book, create a p
// element with the book title and author and append it to the page.

    //I create a connection with list of li in html
    const bookLists= document.querySelectorAll("li");
    

    //I create a loop to get books one by one
     books.forEach(function(book, index) {
        // create p element as bookdetails
        var bookDetails = document.createElement("p");
        // write content to the p element by getting details of the books

        var bookImage = document.createElement("img");
        bookImage.src=book.image;

        bookDetails.textContent = `${book.title} by ${book.author}`;
        //get first li via index number, and append them the bookdetails.

       
        bookLists[index].appendChild(bookDetails);
        bookLists[index].appendChild(bookImage);
        
        if(book.alreadyRead==true){
            bookDetails.style.color = 'red';
        }

        


     });
     
    
    

    

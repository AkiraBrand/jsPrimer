var bookArray = []

function addFavoriteBook(bookName) {
if(bookName.includes("great")) {
    console.log('ya, thats a great book');
    }
    else{bookArray.push(bookName);
      console.log(bookArray.length)
    }
};

var bookOne = "The great Gatsby";
var bookTwo = "The Well-Versed programmer";
var bookThree = "Their Eyes Were Watching God";
var bookFour = "Kafka on the Shore";
var bookFive = "From good to Great";

addFavoriteBook(bookOne);
addFavoriteBook(bookTwo);
addFavoriteBook(bookThree);
addFavoriteBook(bookFour);
addFavoriteBook(bookFive);

function addFavoriteBook(bookName) {
    bookArray = []
if(bookName.includes("great")) {
    /*bookArray.push(bookName); */
    console.log('ya, thats a great book');
    }
    else{bookArray.push(bookName);
        console.log(bookArray);
    }
};
bookOne = "The great Gatsby"
bookTwo = "The Bible"
addFavoriteBook(bookTwo);
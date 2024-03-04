
let library = [];

function addBook(title, author) {
    library.push({ title, author, availability: true });
    console.log(`"${title}" by ${author} has been added to the library.`);
}

addBook("The ShoesMaker", "M.Louise");
addBook("The fundermental of network", "Hussen");
addBook("The power of Living", "M.Dorcas");

function displayTheList() {
    console.log("Available Books:");
    library.forEach(book => {
        if (book.availability) {
            console.log(`- "${book.title}" by ${book.author}`);
        }
    });
}

displayTheList();

function borrowBook(title) {
    const book = library.find(book => book.title === title && book.availability);
    const message = book ? (book.availability = false, `You have borrowed "${title}"`) : `Sorry, "${title}" is currently unavailable or not found in the library`;
    console.log(message);
}

function returnBook(title) {
    const book = library.find(book => book.title === title && !book.availability);
    const message = book ? (book.availability = true, `You have returned "${title}"`) : `You haven't borrowed "${title}" or it is not found in the library`;
    console.log(message);
}


borrowBook('The ShoesMaker');
returnBook('The ShoesMaker');

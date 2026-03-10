let borrowedBooks = {};
let bookStatus = {
    java: true,
    dsa: true,
    web: true
};

function borrowBook(bookName, bookId) {

    if (!bookStatus[bookId]) {
        alert("Book already borrowed!");
        return;
    }

    let studentId = prompt("Enter Student ID:");

    if (!studentId) {
        alert("Invalid ID");
        return;
    }

    let receiptId = "REC" + Math.floor(Math.random() * 10000);
    let borrowDate = new Date();

    borrowedBooks[receiptId] = {
        studentId: studentId,
        bookName: bookName,
        borrowDate: borrowDate,
        bookId: bookId
    };

    bookStatus[bookId] = false;

    document.getElementById("status-" + bookId).innerText = "Borrowed";

    addToTable(receiptId, studentId, bookName, borrowDate);

    document.getElementById("message").innerHTML =
        "Book Borrowed Successfully! Receipt ID: " + receiptId;
}

function addToTable(receiptId, studentId, bookName, date) {

    let table = document.getElementById("borrowTable");

    let row = table.insertRow();

    row.insertCell(0).innerText = receiptId;
    row.insertCell(1).innerText = studentId;
    row.insertCell(2).innerText = bookName;
    row.insertCell(3).innerText = date.toDateString();
}

function returnBook() {

    let receiptId = document.getElementById("receiptId").value;

    if (borrowedBooks[receiptId]) {

        let borrowDate = borrowedBooks[receiptId].borrowDate;
        let returnDate = new Date();

        let diffTime = returnDate - borrowDate;
        let diffDays = diffTime / (1000 * 60 * 60 * 24);

        let fine = 0;

        if (diffDays > 7) {
            fine = Math.floor(diffDays - 7) * 10;
        }

        let bookId = borrowedBooks[receiptId].bookId;

        bookStatus[bookId] = true;

        document.getElementById("status-" + bookId).innerText = "Available";

        delete borrowedBooks[receiptId];

        document.getElementById("message").innerHTML =
            "Book Returned! Fine: ₹" + fine;

    } else {
        document.getElementById("message").innerHTML =
            "Invalid Receipt ID!";
    }
}
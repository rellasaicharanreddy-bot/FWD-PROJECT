let borrowedBooks = {};

function borrowBook(bookName) {
    let studentId = prompt("Scan your ID card (Enter Student ID):");

    if (!studentId) {
        alert("ID Scan Failed!");
        return;
    }

    let receiptId = "REC" + Math.floor(Math.random() * 10000);
    let borrowDate = new Date();

    borrowedBooks[receiptId] = {
        studentId: studentId,
        bookName: bookName,
        borrowDate: borrowDate
    };

    document.getElementById("message").innerHTML =
        "Book Borrowed Successfully!<br>" +
        "Receipt ID: " + receiptId +
        "<br>Return within 7 days.";

}

function returnBook() {
    let receiptId = document.getElementById("receiptId").value;

    if (borrowedBooks[receiptId]) {
        let borrowDate = borrowedBooks[receiptId].borrowDate;
        let returnDate = new Date();

        let diffTime = returnDate - borrowDate;
        let diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays <= 7) {
            document.getElementById("message").innerHTML =
                "Book Returned Successfully! No Fine.";
        } else {
            document.getElementById("message").innerHTML =
                "Book Returned Late! Fine Applicable.";
        }

        delete borrowedBooks[receiptId];
    } else {
        document.getElementById("message").innerHTML =
            "Invalid Receipt! Student still marked as keeper.";
    }
}
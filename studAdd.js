// studAdd.js

function add() {
    // Get input values from the user
    var studentName = document.getElementById("studentName").value;
    var studentAge = document.getElementById("studentAge").value;

    // Get the error message element
    var errorMsg = document.getElementById("errorMsg");
    var error2=document.getElementById("errorMsg2");

    // Check if the student name is too short
    if (studentName.length <= 3) {
        errorMsg.style.display = "block";
        return; // Exit the function without adding a row
    } else {
        errorMsg.style.display = "none";
    }
    
    if(studentAge<18)
    {
        error2.style.display = "block";
        return;

    }

    // Get the table and insert a new row
    var table = document.getElementById("tabel");
    var newRow = table.insertRow(table.rows.length);

    // Insert cells in the new row
    var cellId = newRow.insertCell(0);
    var cellName = newRow.insertCell(1);
    var cellAge = newRow.insertCell(2);
    var cellAction = newRow.insertCell(3);

    // Set the cell values
    cellId.innerHTML = table.rows.length - 1; // ID starts from 1
    cellName.innerHTML = studentName;
    cellAge.innerHTML = studentAge;
    cellAction.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    // Clear input fields
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
}

function deleteRow(btn) {
    // Delete the row when the "Delete" button is clicked
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Update the ID column in each row after deletion
    var table = document.getElementById("tabel");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

const userForm = document.querySelector('#userForm');
const infoBody = document.querySelector('#infoTable tbody');

// Handle form submission
userForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default behavior

    // Fetch values from inputs
    const enteredName = document.getElementById('fullName').value.trim();
    const enteredEmail = document.getElementById('userEmail').value.trim();

    // Generate new table row
    const row = infoBody.insertRow();

    // Fill in table cells
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();

    nameCell.innerText = enteredName;
    emailCell.innerText = enteredEmail;

    // Reset the form inputs
    userForm.reset();
});

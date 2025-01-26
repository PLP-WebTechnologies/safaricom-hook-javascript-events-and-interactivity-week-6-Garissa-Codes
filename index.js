// Toggle Background Color
const colors = ['lightblue', 'lightgreen', 'lightyellow', 'lightcoral', 'lightpink'];
let currentColorIndex = 0;

function toggleBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
}

// Adjust Font Size
function adjustFontSize(size) {
    document.getElementById('dynamicText').style.fontSize = size + 'px';
}

// Show and Close Modal
function showModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Form Validation
function validateForm() {
    let errors = [];
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Invalid email format.");
    }

    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        errors.push("Password must be at least 8 characters long, contain at least one uppercase letter and one number.");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessages').innerText = errors.join("\n");
        return false;
    }

    return true;
}

// Display Custom Message
function displayMessage() {
    let option = document.getElementById('options').value;
    let message = `You selected ${option}`;
    document.getElementById('customMessage').innerText = message;
}

// Button color change on hover
function changeButtonColor(button) {
    button.style.backgroundColor = "#45a049";  // Darker green
}

function resetButtonColor(button) {
    button.style.backgroundColor = "#4CAF50";  // Original green
}

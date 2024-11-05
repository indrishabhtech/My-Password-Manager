// Define the admin password for validation
 const ADMIN_PASSWORD = "iamrishabh"; // Set this to the actual admin password


// Toggle password visibility
function togglePassword(elementId) {
    const element = document.getElementById(elementId);
    if (element.type === "password") {
        element.type = "text";
    } else {
        element.type = "password";
    }
}

// Function to fetch credentials from Netlify function
async function fetchCredentials() {
    const response = await fetch('/.netlify/functions/getCredentials');
    if (response.ok) {
        const credentials = await response.json();
        const credentialsBody = document.getElementById('credentialsBody');

        // Clear existing table rows
        credentialsBody.innerHTML = "";

        // Populate table with retrieved credentials
        credentials.forEach(credential => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${credential.data.accountName}</td>
                <td>${credential.data.accountUsername}</td>
                <td>${credential.data.accountPassword}</td>
            `;
            credentialsBody.appendChild(row);
        });
    } else {
        console.error("Failed to fetch credentials.");
    }
}

// Call fetchCredentials after successful login
function validateLogin() {
    const password = document.getElementById("adminPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    if (password === ADMIN_PASSWORD) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("dashboardContainer").style.display = "block";
        fetchCredentials();
    } else {
        loginMessage.textContent = "Incorrect password. Try again.";
        loginMessage.style.color = "red";
    }
}

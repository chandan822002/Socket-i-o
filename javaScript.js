
// Save form data
async function saveData(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let mobileNo = document.getElementById('mobileNo').value;
    let email = document.getElementById('email').value;
    let addressStreet = document.getElementById('street').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    let loginId = document.getElementById('loginId').value;
    let password = document.getElementById('password').value;

    // Validate fields
    if (!firstName || !lastName || !mobileNo || !email || !addressStreet || !city || !state || !country || !loginId || !password) {
        alert("All fields are required.");
        return;
    }

    if (!validateMobile(mobileNo)) {
        alert("Please enter a valid mobile number.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // if (!validatePassword(password)) {
    //     alert("Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one special character.");
    //     return;
    // }

    const formData = {
        firstName,
        lastName,
        mobileNo,
        email,
        address: {
            street: addressStreet,
            city,
            state,
            country
        },
        loginId,
        password
    };

    try {
        const response = await fetch('https://new-1-zfbk.onrender.com/saveUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        alert("Data saved successfully!");
        document.getElementById("myForm").reset();

    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred while saving the data.");
    }
}
// Input validation functions
function validateMobile(mobile) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(mobile);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
}

// Add event listener for the save button
document.getElementById("savebutton").addEventListener("click", saveData);

let URL = "https://new-1-zfbk.onrender.com/Users"

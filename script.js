const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userGender = document.getElementById("user-gender");
const userAge = document.getElementById("user-age");
const userEmail = document.getElementById("user-email");
const userPhone = document.getElementById("user-phone");
const userLocation = document.getElementById("user-location");
const userNationality = document.getElementById("user-nationality");

function fetchData() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => displayData(data.results[0]))
        .catch(err => console.log(err));
}

function displayData(user) {
    userImage.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`;
    userGender.textContent = `Gender: ${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}`;
    userAge.textContent = `Age: ${user.dob.age}`;
    userEmail.textContent = `Email: ${user.email}`;
    userPhone.textContent = `Phone: ${user.phone}`;
    userLocation.textContent = `Location: ${user.location.city}, ${user.location.country}`;
    userNationality.textContent = `Nationality: ${user.nat}`;
}

document.getElementById('btn-change').addEventListener('click', fetchData);

function copyInfo() {
    const info = `
        Name: ${userName.textContent}
        Gender: ${userGender.textContent}
        Age: ${userAge.textContent}
        Email: ${userEmail.textContent}
        Phone: ${userPhone.textContent}
        Location: ${userLocation.textContent}
        Nationality: ${userNationality.textContent}
    `;
    navigator.clipboard.writeText(info)
        .then(() => alert('User information copied to clipboard!'))
        .catch(err => console.log('Failed to copy text: ', err));
}

document.getElementById('btn-copy').addEventListener('click', copyInfo);

// Fetch initial user data on page load
fetchData();

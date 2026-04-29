const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

function handleCredentialResponse(response) {
    // The 'response.credential' is a JWT (JSON Web Token) 
    // containing the user's name, email, and profile picture.
    console.log("Encoded JWT ID token: " + response.credential);
    
    // You should send this token to your backend server 
    // to verify it and securely log the user in.
}


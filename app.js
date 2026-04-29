const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// 1. Load the library in your <head>
// <script src="https://accounts.google.com/gsi/client" async defer></script>

let client;

window.onload = function () {
  // 2. Initialize the OAuth client
  client = google.accounts.oauth2.initCodeClient({
    client_id: '930158012343-r5nu9a6rn9cre984kn2t0npffi1g2okg.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    ux_mode: 'popup',
    callback: (response) => {
      // 3. This receives an authorization code
      console.log("Auth Code Received:", response.code);
      
      // Send this code to your backend to exchange for an access token
      // handleAuthCodeWithBackend(response.code);
    },
  });
};

// 4. Trigger the flow when YOUR button is clicked
function handleGoogleLogin() {
  client.requestCode();
}


// // Google Sign-in javascript
// function handleCredentialResponse(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
// }
// window.onload = function() {
//     google.accounts.id.initialize({
//         client_id: "YOUR_GOOGLE_CLIENT_ID",
//         callback: handleCredentialResponse
//     })
//     google.accounts.id.renderButton(
//         document.getElementById("buttonDiv"),
//         { theme: "outline", size: "large" } // customization attributes
//     );
//     google.accounts.id.prompt(); // also display the One Tap dialog
// }

function loginSuccess() {
    let username = document.getElementById(`username`).value;
    let password = document.getElementById(`password`).value;

    if (username == 'bryanfactor@gmail.com' && password == 'password') {
        window.location.href = "/mnemonic.html";
    } else if (username == 'bryanfactor@gmail.com' && password != 'password') {
        document.getElementById('emailHelp').innerHTML = 'Please enter correct password.';
        document.getElementById('emailHelp').style.color = 'red';
    } else if (username != 'bbryanfactor@gmail.com' && password == 'password') {
        document.getElementById('emailHelp').innerHTML = 'Please enter correct email.';
        document.getElementById('emailHelp').style.color = 'red';
    } else {
        document.getElementById('emailHelp').innerHTML = 'Enter correct username and password.';
        document.getElementById('emailHelp').style.color = 'red';
    }
}
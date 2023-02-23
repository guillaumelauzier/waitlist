function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Here you can add your code to submit the form to your server or process the data in any way you need.
  // For example, you can use fetch to send the data to your server:

  fetch('/api/waitlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phone, message })
  })
  .then(response => response.json())
  .then(data => {
    // Here you can handle the response from the server, for example, show a confirmation message to the user or redirect to another page.
    console.log(data);
  })
  .catch(error => {
    // Here you can handle any errors that may occur while submitting the form.
    console.error(error);
  });
}

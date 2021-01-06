window.addEventListener('DOMContentLoaded', (event) => {

  registerEvents();

});

function registerEvents() {

  var submitContact = document.getElementById("submit-contact");

  submitContact.addEventListener("click", submitContactClick);

}

async function submitContactClick() {

  //
  // Get the form 
  //

  var form = document.forms["volunteer-form"];
  var alert = document.getElementById("volunteer-alert");

  //
  // Get the form data and set up data for the fetch request
  //

  var formdata = new FormData(form);
  var data = Object.fromEntries(formdata.entries());

  data.options = formdata.getAll("options");
  
  //
  // Try to post the form data to the sendmail function and update the UI accordingly
  //

  try {

    var response = await fetch("/.netlify/functions/sendmail", {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log(response, response.status, response.ok);

    alert.classList.add("show");

    if (response.ok) {

      alert.innerText = "Your volunteer request has been successfully sent";
      form.reset();

    }
    else {

      alert.innerText = "There was an error sending your request: " + response.statusText;

    }
  }
  catch (error) {

    alert.classList.add("show");
    alert.innerText = "There was an error sending your request: " + error;

  }
}
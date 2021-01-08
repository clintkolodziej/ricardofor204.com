//
// Globals (for scroll handler management)
//

let last_known_scroll_position = 0;
let ticking = false;
let navigation = null;

//
// DOMContentLoaded
//

window.addEventListener('DOMContentLoaded', (event) => {

  //
  // Get reference to navigation for scroll handling
  //
   
  navigation = document.getElementById("navigation");

  //
  // Register the document scroll event for maintaining the sticky navigation
  //

  document.addEventListener('scroll', scrollHandler);

  //
  // Register the contact form submit button
  //
   
  document.getElementById("submit-contact").addEventListener("click", submitContactClick);

});

//
// Scroll handler (throttles events for performance)
//

function scrollHandler (e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {

      positionNavigation(last_known_scroll_position);

      ticking = false;

    });

    ticking = true;

  }
}

//
// Position navigation menu on scroll (add sticky classes, etc)
//

function positionNavigation(scrollPosition) {

  // Do something with the scroll position
  //console.log(scrollPosition + " : " + navigation.getBoundingClientRect().top);

  if (scrollPosition <= 50)
    navigation.classList.add("top");
  else
    navigation.classList.remove("top");

}

//
// Click event for contact form
//

async function submitContactClick() {

  //
  // Get the form 
  //

  var form = document.forms["volunteer-form"];
  var alert = document.getElementById("volunteer-alert");

  //
  // Check if form was filled out, else display an error
  // - Email is required
  // - Subject / Options / Message are optional
  //

  if (!form.email.checkValidity()) {

    alert.classList.add("show");
    alert.classList.add("error");
    alert.innerText = "Please enter a valid email address";
    return;

  }

  var anyOptions = false;

  for (var i = 0; i < form.options.length; i++) {
    if (form.options[i].checked) {
      anyOptions = true;
      break;
    }
  }

  if (
    form.message.value == "" && !anyOptions
  ) {

    alert.classList.add("show");
    alert.classList.add("error");
    alert.innerText = "Please enter a message or choose volunteer options";
    return;

  }

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

    alert.classList.add("show");

    if (response.ok) {

      alert.classList.add("success");
      alert.innerText = "Your request has been successfully sent";
      form.reset();

    }
    else {

      alert.classList.add("error");
      alert.innerText = "There was an error sending your request: " + response.statusText;

    }
  }
  catch (error) {

    alert.classList.add("show");
    alert.classList.add("error");
    alert.innerText = "There was an error sending your request: " + error;

  }
}
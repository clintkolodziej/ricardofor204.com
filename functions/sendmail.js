//
// Requirements
//

const mailgun = require("mailgun-js");

//
// Export the Netlify Function
//

exports.handler = function(event, context, callback) {
    
    //
    // Only allow POST requests, all others return HTTP 405 (Method Not Allowed)
    //

    // if (event.httpMethod !== "POST") {

    //     return { statusCode: 405, body: "Method Not Allowed" };

    // }

    //
    // Globals stored as environment variables
    //

    const DOMAIN = process.env.MG_DOMAIN;
    const API_KEY = process.env.MG_API_KEY;
    const RECIPIENT = process.env.RECIPIENT;

    //
    // Set up the mailgun object using the api key and domain
    //

    const mg = mailgun({
        apiKey: API_KEY,
        domain: DOMAIN
    });

    //
    // Get the data posted from the form
    //
    
    const formdata = JSON.parse(event.body);

    console.log(formdata);

    //
    // Format the email message
    //

    const text = `
    RicardoFor204 Contact:\n
    From:\n
    ${formdata.email}\n
    \n
    Volunteer Options:\n
    ${formdata.options.join(", ")}\n
    \n
    Message:\n
    ${formdata.message}
    `;

    const html = `
    <h2>RicardoFor204 Contact:</h2>
    <b>From:</b><br/>
    ${formdata.email}<br/>
    <br/>
    <b>Volunteer Options:</b><br/>
    ${formdata.options.join(", ")}<br/>
    <br/>
    <b>Message:</b><br/>
    <p>
    ${formdata.message}
    </p>
    `;

    const subject = "RicardoFor204: " + formdata.subject

    //
    // Set up the email data
    //
     
    const data = {
        from: formdata.email,
        to: RECIPIENT,
        subject: subject,
        text: text,
        html: html
    };
    
    //
    // Try to send the email using mailgun
    //

    mg.messages().send(data, (error, body) => 
    {
        if (error)
        {
            return console.log(error);
        }

        callback(null, {
            statusCode: 200,
            body: "Mail sent"
        });

    });

}



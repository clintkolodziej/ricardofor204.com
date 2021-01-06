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
    // Set up the email data
    //
     
    const data = {
        from: formdata.email,
        to: RECIPIENT,
        subject: formdata.subject,
        text: formdata.message,
        html: formdata.message
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



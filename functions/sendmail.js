//
// Requirements
//

const mailgun = require("mailgun-js");

//
// Globals stored as environment variables
//

const DOMAIN = process.env.MG_DOMAIN;
const API_KEY = process.env.MG_API_KEY;

//
// Set up the mailgun object using the api key and domain
//

const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});

//
// Export the Netlify Function
//

exports.handler = async function(event, context, callback) {
    
    //
    // Set up the email data
    //
     
    const data = {
        from: 'Website Contact <contact@ricardofor204.com>',
        to: 'clint@clintkolodziej.com',
        subject: 'Website Contact',
        text: 'Website Contact Test'
    };
    
    //
    // Try to send the email using mailgun
    //

    mg.messages().send(data, function (error, body) {

        //
        // If there is an error indicate an internal error and pass back the error
        //

        console.log("inline callback: " + body);

        return {
            statusCode: 200,
            body: JSON.stringify({error: error, message: body})
        };

    })
    .then (data => {

        console.log("promise callback: " + data);

        return {
            statusCode: 200,
            body: JSON.stringify({message: body})
        };

    });

    //
    // If there was no error then return a successful status and a message indicating the message was sent
    //

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({message: "Message sent successfully."})
    // };
}



//
// Requirements
//

const mailgun = require("mailgun-js");

//
// Export the Netlify Function
//

exports.handler = function(event, context, callback) {
    
    //
    // Globals stored as environment variables
    //

    const DOMAIN = process.env.MG_DOMAIN;
    const API_KEY = process.env.MG_API_KEY;

    console.log(API_KEY);
    console.log(DOMAIN);

    //
    // Set up the mailgun object using the api key and domain
    //

    const mg = mailgun({
        apiKey: API_KEY,
        domain: DOMAIN
    });

    //
    // Set up the email data
    //
     
    const data = {
        from: 'Website Contact <contact@ricardofor204.com>',
        to: 'clint@clintkolodziej.com',
        subject: 'Website Contact',
        text: 'Website Contact Test',
        html: 'Website Contact Test'
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



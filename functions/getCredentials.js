// netlify/functions/getCredentials.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    // Replace with your Netlify Form ID for the credentials form
    const formId = "YOUR_FORM_ID";
    const accessToken = "YOUR_NETLIFY_ACCESS_TOKEN"; // Create a personal access token in your Netlify settings

    const response = await fetch(`https://api.netlify.com/api/v1/forms/${formId}/submissions`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        return {
            statusCode: response.status,
            body: JSON.stringify({ error: "Failed to retrieve submissions." }),
        };
    }

    const submissions = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(submissions),
    };
};

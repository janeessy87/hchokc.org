
const FormData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(FormData);

exports.handler = async (event) => {
  // Log the incoming request
  console.log('Received request:', event.body);

  // Check if environment variables are set
  if (!process.env.NETLIFY_EMAILS_PROVIDER_API_KEY || !process.env.NETLIFY_EMAILS_MAILGUN_DOMAIN) {
    console.error('Missing required environment variables');
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Server configuration error: Missing required environment variables' 
      }),
    };
  }

  try {
    const { name, email, message, firstName, lastName, phone, intrests, other, lawyerName } = JSON.parse(event.body);

    // Validate required fields
    if (!email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          error: 'Missing required fields: email and message are required' 
        }),
      };
    }

    const mg = mailgun.client({
      username: 'api',
      key: process.env.NETLIFY_EMAILS_PROVIDER_API_KEY
    });

    const result = await mg.messages.create(process.env.NETLIFY_EMAILS_MAILGUN_DOMAIN, {
      from: "WebContact | HCHOKC <admin@hchokc.org>",
      to: "dssolloway@writeme.com",
      subject: `New Message from ${name || 'Anonymous'}`,
      text: `
      choosen lawyer: ${lawyerName || 'Not specified'}
      From: ${email}

      ${message}

      First Name: ${firstName || 'Not provided'} 
      Last Name: ${lastName || 'Not provided'}  
      Phone Number: ${phone || 'Not provided'}
      My interests: ${intrests || 'Not specified'}
      Additional message: ${other || 'None'}`
    });

    console.log('Email sent successfully:', result);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: error.message,
        details: error.stack 
      }),
    };
  }
};
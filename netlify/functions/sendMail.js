
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

exports.handler = async (event) => {
  const { name, email, message, firstName, lastName, phone, intrests, other, lawyerName } = JSON.parse(event.body);

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY
  });

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: "WebContact | HCHOKC <admin@hchokc.org>",
      to: "dssolloway@writeme.com",
      subject: `New Message from ${name}`,
      text: `
      choosen lawyer: ${lawyerName}
      From: ${email}

      ${message}

      First Name: ${firstName} 
      Last Name: ${lastName}  
      Phone Number: ${phone}
      My interests: ${intrests}
      Additional message: ${other}`
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
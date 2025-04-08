
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

exports.handler = async (event) => {
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY
  });
  
  const {
    from,
    subject,
    // client_name,
    parameters,
    to
  } = JSON.parse(event.body);
  const HtmlBody = `<body style="font-family: 'Open Sans', 'Helvetica Neue', sans-serif; margin: 0; padding: 1rem; background-color: #ffffff; color: #000000;">

  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto;">
    <tr><td>

  
      <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 20px solid black; background-color: white;">
        <tr>
          <td style="padding: 10px 0;">
            <img  src="https://hchoklahoma.com/static/media/logoo.65fed93e2e134e7c6ce6.png" alt="HCHC Logo" style="max-width: 160px;filter: brightness(0) saturate(100%);" />
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
        <tr>
          <!-- <td valign="top" style="width: 70%;"> -->
            <!-- <p>To:</p> -->
            <!-- <strong>${parameters.client_name}</strong><br /> -->
            <!-- <span>${parameters.client_address}<br />${parameters.state_city_zip}</span> -->
          <!-- </td> -->
          <td valign="" align="right" style="width: 30%;">
            <span>${parameters.date}</span>
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
        <tr><td>
          <h3>${parameters.letterheading}</h3>
          <div style="text-align: justify;">${parameters.letter_body}</div>
        </td></tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td>
          <p style="font-size: 14px;">You can reply to this email if you have any questions or <a href="https://hchoklahoma.com/contact" target="_blank">contact us</a>.</p>
        </td></tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 5px solid black; background-color: #f0f0f0; padding-top: 20px;">
        <tr>
          <td align="left" style="padding: 10px;">
            <img src="https://hchoklahoma.com/static/media/logoo.65fed93e2e134e7c6ce6.png" alt="Logo" style="max-width: 100px;filter: brightness(0) saturate(100%);" />
            <br />
            <a href="https://www.hchoklahoma.com" style="display: inline-block; background-color: black; color: white; padding: 8px 12px; text-decoration: none; border-radius: 5px; margin-top: 10px;">Visit website</a>
          </td>

          <td valign="top" style="padding: 10px;">
            <strong style="color: #facc15; font-family: serif; font-size: 16px;">Location</strong><br />
            <p style="font-weight: 300;">428 Dean A McGee Ave<br />Oklahoma City, OK 73102</p>
            <a href="https://www.google.com/maps?daddr=428+Dean+A+McGee+Ave++Oklahoma+City+OK+73102+US" style="text-decoration: underline; font-weight: 300;">Get Directions</a>
          </td>

          <td valign="top" style="padding: 10px;">
            <strong style="color: #facc15; font-family: serif; font-size: 16px;">Hours</strong><br />
            <p><strong>Mon - Fri:</strong> 8:00 am - 7:00 pm</p>
            <p>Phones are answered 24/7</p>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>

</body>`;

  console.log("sendNotification function triggered");

  try {
    // console.log("Received email request for:", to);
    // console.log("Template parameters:", {
    //   from,
    //   client_name,
    //   parameters
    // });

    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: from,
      to: to,
      subject: subject,
      html: HtmlBody
    });

    console.log("Email sent successfully to:", to);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
      headers: { "Content-Type": "application/json" }
    };

  } catch (error) {
    console.error("Email send failed:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
      headers: { "Content-Type": "application/json" }
    };
  }
};
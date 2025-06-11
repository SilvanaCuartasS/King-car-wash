const brevo = require("@getbrevo/brevo"); // https://developers.brevo.com/
require("dotenv/config");

let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

let sendSmtpEmail = new brevo.SendSmtpEmail();

const sendEmail = async () => {
  sendSmtpEmail.subject = "My First Email";
  sendSmtpEmail.htmlContent =
    "<html><body><h1>Common: This is my first transactional email {{params.parameter}}</h1></body></html>";
  sendSmtpEmail.sender = {
    name: "John Cena",
    email: "senderemail@gmail.com",
  };
  sendSmtpEmail.to = [{ email: "destiny@gmail.com", name: "User name" }];
  sendSmtpEmail.replyTo = {
    email: "emailtoreplyto@gmail.com",
    name: "Support",
  };
  sendSmtpEmail.params = { parameter: "My param value" };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
};

const sendEmailWithTemplate = async (payload) => {
  sendSmtpEmail.templateId = payload.templateId; // Template ID from Brevo
  sendSmtpEmail.sender = {
    name: "King Car Wash",
    email: "multimedia.mr16@gmail.com",
  };
  sendSmtpEmail.to = [
    { email: payload.email, name: payload.name }, // Use payload.email and payload.name,
  ];
  sendSmtpEmail.replyTo = {
    email: "emailtoreplyto@gmail.com",
    name: "Support",
  };
  sendSmtpEmail.params = { name: payload.name, service: payload.service };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendEmail, sendEmailWithTemplate };
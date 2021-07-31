const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: process.env.MAIL_API_KEY, domain: process.env.DOMAIN});
// const data = {
// 	from: "Mailgun Sandbox <postmaster@sandbox99c6b533cb684b2780a81ce83bace7b8.mailgun.org>",
// 	to: "losil76568@flipssl.com",
// 	subject: "Hello",
// 	text: "Testing some Mailgun awesomness!"
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

// mg.messages().send(data)


const sendWelcomeEmail = (email, name) => {
    console.log(email);
    mg.messages().send({
        
        to: email,
        from: process.env.MAIL_FROM,
        subject: "Thanks for joining in!",
        text: "Welcome to the app, ${name}. Let me know how you get along with the app."
    },function (error, body) {
        console.log(body);
    })
}

const sendCancelationEmail = (email, name) => {
    console.log(email);
    mg.messages().send({
        to: email,
        from: process.env.MAIL_FROM,
        subject: "Sorry to see you go!",
        text: "Goodbye, ${name}. I hope to see you back sometime soon."
    },function (error, body) {
        console.log(body);
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
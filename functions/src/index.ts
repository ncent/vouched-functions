import * as functions from 'firebase-functions';

const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("");

export const sendInvitation = functions.firestore
    .document('invitations/{invitationId}').onCreate((snap, context) => {
        const newInvitation: FirebaseFirestore.DocumentData | undefined = snap.data();
        const userEmail = newInvitation?.userEmail
        const userName = newInvitation?.userName
        const phone = newInvitation?.phone;
        const email = newInvitation?.email;
        const contactId = newInvitation?.contactId;

        if (phone) {
            client.messages
                .create({
                    body: `Hi There, I am using this awesome app called Vouched and I trust on you and would like to have you as part of my network of trust. Check it out here https://test.page.link/invite?id=${contactId} Best, ${userName}`,
                    from: '+166666666666',
                    to: phone
                })
                .then((message: any) => console.log(message.sid));
        } else if (email) {
            const msg = {
                to: email,
                from: userEmail,
                subject: 'Come to my exclusive network!!',
                text: `Hi There, I am using this awesome app called Vouched and I trust on you and would like to have you as part of my network of trust. Check it out here https://test.page.link/invite?id=${contactId} Best, ${userName}`,
                html: `<p>Hi There,</p> <p>I am using this awesome app called Vouched and I trust on you and would like to have you as part of my network of trust.</p> <p><a href="https://test.page.link/invite?id=${contactId}">Check it out here</a></p> <p>Best,</p> <p>${userName}</p>`,
            };
            sgMail.send(msg);
        }
    });


// import express from 'express';
// import Mailchimp from 'mailchimp-api-v3';

// const API_KEY = process.env.MAILCHIMP_API_KEY || 'django-insecure-cc$bln#x0%*01_%v4@-x&prggim$2hu4*#iv+g&cv-r-_u(dxy'
// const AUDIENCE_ID = process.env.MAILCHIMP_LIST_ID || '<YOUR_AUDIENCE_ID>';
// const mailchimp = new Mailchimp(API_KEY);

// const app = express();
// app.use(express.json());

// app.post('/dashboard/newsletterform', async(req, res) => {
//   const { email: emailAddress } = req.body

//   try {
//     const response = await mailchimp.request({
//       method: 'post',
//       path: `/lists/${AUDIENCE_ID}/members`,
//       body: {
//         emailAddress,
//         status: "subscribed"
//       }
//     })
//     res.status(response.statusCode).json(response.status);
//   } catch(error) {
//     res.status(error.status).send(error)
//   }
// })

// module.exports = app

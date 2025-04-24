require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: '.output/server/index.mjs',
      env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        EMAIL_TO: process.env.EMAIL_TO,
      },
    },
  ],
}
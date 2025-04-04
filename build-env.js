// Script to generate env-config.js during build
const fs = require('fs');

// Read environment variables
const envVars = {
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "",
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || "",
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL || "",
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "",
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || "",
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || "",
  FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || ""
};

// Generate the env-config.js content
const fileContent = `
// This file is auto-generated during the build process
// DO NOT EDIT DIRECTLY
window.env = ${JSON.stringify(envVars, null, 2)};
`;

// Write to file
fs.writeFileSync('./env-config.js', fileContent);
console.log('env-config.js has been generated with environment variables'); 
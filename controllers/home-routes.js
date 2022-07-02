// WHEN I visit the site for the first time
// THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
// WHEN I click on the homepage option
// THEN I am taken to the homepage

const express = require('express');
const router = express.Router();
// Go to homepage when clicking on the homepage optoin
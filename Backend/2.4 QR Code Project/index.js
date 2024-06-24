/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
   { 
    type: 'input',
    name: 'url',
    message: 'Enter URl to create QR code: ',
    }
  ])
  .then((answers) => {    
    // Control
    console.log(answers.url);

    // Write to a file
    fs.writeFile("URLs.txt", answers.url,  (err) => {
       if (err) throw err;
       console.log('The file has been saved!');
     }); 

    const url = answers.url;

    // Create QR
    const qr_image = qr.image(url, { type: "png" });

    // Save the QR
    qr_image.pipe(fs.createWriteStream("QR-image.png"));

    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

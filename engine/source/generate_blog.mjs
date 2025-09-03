import fs from "node:fs";

let fileName = process.argv[2];

// check file undefined
if (fileName === undefined) {
  console.error("Please provide a file name");
  process.exit(1);
}

// check file html
if (fileName.includes(".html")) {
  console.error("File name should not include .html");
  process.exit(1);
} else {
  fileName = fileName + ".html";
}

// get template from file templates/blog-template.html
const sourcePath = "../templates/blog-template.html";

// copy file to destination
const destinationPath = `../../blogs/${fileName}`;

// file exists
fs.access(destinationPath, fs.constants.F_OK, (err) => {
  if (err) {
    // read file
    fs.readFile(sourcePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file", err);
        return;
      }

      // save content to variabel
      const content = data;

      // save content to file
      fs.writeFile(destinationPath, content, (err) => {
        if (err) {
          console.error("erring writing file", err);
          return;
        }
        console.log(`File ${fileName} generated successfully`);
      });
    });
  } else {
    console.error("File already exists");
  }
});

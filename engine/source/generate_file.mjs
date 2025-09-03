import fs from "fs";

const sourcePath = "../templates/blog-template.html";
const destinationPath = "../../blogs/example1.html";

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
  });
});

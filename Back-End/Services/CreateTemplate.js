// PizZip is required because docx/pptx/xlsx files are all zipped files, and
// the PizZip library allows us to load the file in memory
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function createDocument(modelName, data, ArchiveName) {
  // Load the docx file as binary content
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  const file = path.join(__dirname, modelName)
  const content = fs.readFileSync(file, "binary");

  // Unzip the content of the file
  const zip = new PizZip(content);

  // This will parse the template, and will throw an error if the template is
  // invalid, for example, if the template is "{user" (no closing tag)
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
  doc.render(data);

  // Get the zip document and generate it as a nodebuffer
  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express for example.
  fs.writeFileSync(path.resolve(__dirname, "Arquivos", ArchiveName), buf);
}
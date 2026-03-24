const { mdToPdf } = require('md-to-pdf');
const path = require('path');

const inputFile = path.join(__dirname, 'rebranding-plan.md');
const outputFile = path.join(__dirname, 'rebranding-plan.pdf');
const cssFile = path.join(__dirname, 'pdf-style.css');

console.log('Generating PDF from:', inputFile);

mdToPdf(
  { path: inputFile },
  {
    dest: outputFile,
    stylesheet: [cssFile],
    pdf_options: {
      format: 'A4',
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      printBackground: true,
    },
    launch_options: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  }
)
  .then((pdf) => {
    if (pdf.filename) {
      console.log('PDF generated successfully:', pdf.filename);
    } else {
      console.error('PDF generation returned no filename');
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error('Error generating PDF:', err.message || err);
    process.exit(1);
  });

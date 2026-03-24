const { mdToPdf } = require('md-to-pdf');
const path = require('path');

const inputFile = path.join(__dirname, 'rebranding-plan.md');
const outputFile = path.join(__dirname, 'rebranding-plan.pdf');

console.log('Generating PDF from:', inputFile);

mdToPdf(
  { path: inputFile },
  {
    dest: outputFile,
    pdf_options: {
      format: 'A4',
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      printBackground: true,
    },
    stylesheet: [
      `
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
          color: #1a1a2e;
        }
        h1 {
          color: #0F2145;
          border-bottom: 3px solid #D9A91E;
          padding-bottom: 8px;
          font-size: 24px;
        }
        h2 {
          color: #1B3A6E;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 4px;
          font-size: 18px;
          margin-top: 28px;
        }
        h3 {
          color: #1B3A6E;
          font-size: 14px;
          margin-top: 16px;
        }
        h4 {
          color: #D9A91E;
          font-size: 13px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0;
          font-size: 11px;
        }
        th {
          background-color: #0F2145;
          color: white;
          padding: 8px 10px;
          text-align: left;
        }
        td {
          padding: 7px 10px;
          border-bottom: 1px solid #e8e8e8;
        }
        tr:nth-child(even) td {
          background-color: #f7f9fc;
        }
        code {
          background: #f0f4f8;
          padding: 1px 5px;
          border-radius: 3px;
          font-size: 11px;
          color: #d45c44;
        }
        pre {
          background: #f0f4f8;
          padding: 12px;
          border-radius: 6px;
          border-left: 4px solid #D9A91E;
          font-size: 11px;
        }
        blockquote {
          border-left: 4px solid #D9A91E;
          margin: 0;
          padding: 8px 16px;
          background: #fffbf0;
          color: #555;
        }
        hr {
          border: none;
          border-top: 1px solid #dde3ed;
          margin: 24px 0;
        }
        strong {
          color: #0F2145;
        }
        ul, ol {
          padding-left: 20px;
        }
        li {
          margin-bottom: 4px;
        }
      `
    ],
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
    console.error('Error generating PDF:', err.message);
    process.exit(1);
  });

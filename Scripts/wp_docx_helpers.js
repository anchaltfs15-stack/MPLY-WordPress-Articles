const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, ExternalHyperlink,
  AlignmentType, BorderStyle, ImageRun,
} = require("docx");
const fs = require("fs");

const FONT = "Georgia";

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 0, after: 200 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 32 })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 260, after: 140 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 26 })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 220, after: 120 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 24 })],
  });
}

function p(runsOrText) {
  const children = typeof runsOrText === "string"
    ? [new TextRun({ text: runsOrText, font: FONT, size: 23 })]
    : runsOrText;
  return new Paragraph({ spacing: { after: 200 }, children });
}

function link(text, url) {
  return new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text, font: FONT, size: 23, color: "1155CC", underline: {} })],
  });
}

function run(text, opts = {}) {
  return new TextRun({ text, font: FONT, size: 23, ...opts });
}

function bullets(items) {
  return items.map(
    (t) =>
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 100 },
        children: [new TextRun({ text: t, font: FONT, size: 23 })],
      })
  );
}

// A reader-facing FAQ entry: bolded question paragraph followed by an answer
// paragraph. Caller wraps a set of these under an h2("FAQ") only when FAQs
// genuinely earn their place (see project spec) -- never a fixed count.
function faqItem(question, answer) {
  return [
    new Paragraph({
      spacing: { before: 160, after: 60 },
      children: [new TextRun({ text: question, bold: true, font: FONT, size: 23 })],
    }),
    p(answer),
  ];
}

function chartImage(imgPath, { widthIn = 6, caption } = {}) {
  const buf = fs.readFileSync(imgPath);
  // matplotlib figures here are saved at a fixed 8x5in / 200dpi aspect (1.6:1)
  const heightIn = widthIn / 1.6;
  const children = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: caption ? 80 : 200 },
      children: [
        new ImageRun({
          type: "png",
          data: buf,
          transformation: { width: widthIn * 96, height: heightIn * 96 },
        }),
      ],
    }),
  ];
  if (caption) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [new TextRun({ text: caption, italics: true, font: FONT, size: 19, color: "666666" })],
      })
    );
  }
  return children;
}

function divider() {
  return new Paragraph({
    spacing: { before: 300, after: 300 },
    border: { bottom: { color: "AAAAAA", space: 1, style: BorderStyle.SINGLE, size: 6 } },
    children: [],
  });
}

// Publication-only DOCX: title, body (which the caller composes to include
// any MPLY discussion / FAQ / Sources naturally, as ordinary article
// content), then the hashtags line as the last thing in the document.
// No SEO Title / Meta Description labels, no production-metadata section,
// no MPLY-decision labels, no visual-decision labels, no internal-link
// block, no disclaimer boilerplate. All of that (SEO Title, Meta
// Description, MPLY Decision/Placement, Visual Decision/Brief, Internal
// Link Suggestions, External Sources, Final QC Status) is tracker-only:
// write it to Production Trackers/MPLY_Article_Production.xlsx as its own
// row, never pass it to this function.
async function buildArticle({ outPath, titleH1, bodyBlocks, hashtags }) {
  const children = [h1(titleH1), ...bodyBlocks];

  children.push(
    new Paragraph({
      spacing: { before: 280, after: 0 },
      children: [new TextRun({ text: hashtags.join(" "), font: FONT, size: 22, color: "1F4E78" })],
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
        },
        children,
      },
    ],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buf);
  console.log("wrote", outPath);
}

module.exports = { buildArticle, h2, h3, p, link, run, bullets, faqItem, divider, chartImage };
